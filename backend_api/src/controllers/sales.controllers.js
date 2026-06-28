import SalesModels from "../models/sales.models.js";
import ProductModels from "../models/product.models.js";

const createSale = async (req, res) => {
  try {
    const { clientName, products } = req.body;
    const saleDetails = await calculateSaleDetails(products);

    //Verifico si hay valores para poder hacer destructuring
    if (!saleDetails) {
      return res.status(404).json({
        message: "Uno o mas productos no existen",
      });
    }

    const { total, productSubTotal } = saleDetails;

    const [result] = await SalesModels.insertSale(clientName, total);

    for (const product of productSubTotal) {
      await SalesModels.insertSaleProduct(
        result.insertId,
        product.productId,
        product.quantity,
        product.unitPrice,
        product.subtotal,
      );
    }

    return res.status(200).json({
      message: "Venta registrada correctamente",
    });
  } catch (error) {
    console.log("Error al insertar una venta: ", error.message);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

// Calcula el total que debe llevar el registro de venta.
// retorna null si no encuentra algun producto que llega en la request. (cancelando la operacion)
const calculateSaleDetails = async (products) => {
  let total = 0;
  const productSubTotal = [];

  for (const product of products) {
    const [rows] = await ProductModels.selectProductById(product.productId);

    if (rows.length === 0) {
      return null;
    }

    const unitPrice = Number(rows[0].price);
    const subtotal = unitPrice * product.quantity;
    productSubTotal.push({
      productId: product.productId,
      quantity: product.quantity,
      unitPrice,
      subtotal,
    });

    total += subtotal;
  }

  return { total, productSubTotal };
};

export { createSale };
