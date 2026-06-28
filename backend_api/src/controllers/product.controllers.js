import ProductModels from "../models/product.models.js";
import { getPagination } from "../helpers/helpers.js";

const getAllProducts = async (req, res) => {
  try {
    const { hasPagination, page, limit, offset } = getPagination(req.query);

    if (hasPagination) {
    const [rows] = await ProductModels.selectAllProductsPaginated(limit, offset);

      return res.status(200).json({
        total: rows.length,
        payload: rows,
      });
    } else {
      const [rows] = await ProductModels.selectAllProducts();
      res.status(200).json({
        total: rows.length,
        payload: rows,
      });
    }
  } catch (error) {
    console.log("Error obteniendo productos: ", error.message);

    res.status(500).json({
      message: "Error interno al obtener productos",
    });
  }
};

const getActiveProducts = async (req, res) => {
  try {
    const { hasPagination, page, limit, offset } = getPagination(req.query);

    if (hasPagination) {
    const [rows] = await ProductModels.selectActiveProductsPaginated(limit, offset);

      return res.status(200).json({
        total: rows.length,
        payload: rows,
      });
    } else {
      const [rows] = await ProductModels.selectActiveProducts();
      res.status(200).json({
        total: rows.length,
        payload: rows,
      });
    }
  } catch (error) {
    console.log("Error obteniendo productos: ", error.message);

    res.status(500).json({
      message: "Error interno al obtener productos",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const [rows] = await ProductModels.selectProductById(req.id);
    if (rows.length === 0) {
      return res.status(404).json({
        message: `No se encontro producto con id ${req.id}`,
      });
    }

    res.status(200).json({
      payload: rows[0],
    });
  } catch (error) {
    console.log("Error obteniendo producto POR id: ", error.message);

    res.status(500).json({
      message: `Error interno al obtener un producto con id ${req.id}`,
    });
  }
};

// Faltaria hacer validaciones con imagenes
const createProduct = async (req, res) => {
  try {
    const { name, image, category, price } = req.body;

    const [rows] = await ProductModels.insertProduct(
      name,
      image,
      category,
      price,
    );

    res.status(200).json({
      message: `Producto creado con exito con id ${rows.insertId}`,
      productId: rows.insertId,
    });
  } catch (error) {
    console.log("Error creando producto: ", error.message);

    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const modifyProduct = async (req, res) => {
  try {
    const { name, image, category, price, active } = req.body;

    const [result] = await ProductModels.updateProduct(
      name,
      image,
      category,
      price,
      active,
      req.id,
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "No se actualizó el producto",
      });
    }
    return res.status(200).json({
      message: `Producto con id ${req.id} actualizado correctamente`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error interno al actualizar el producto",
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const [result] = await ProductModels.deleteProduct(req.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: `No se encontro producto con id ${req.id}`,
      });
    }

    res.status(200).json({
      message: `Producto con id ${req.id} desactivado exitosamente`,
    });
  } catch (error) {
    console.log("Error en peticion DELETE: ", error);
    res.status(500).json({
      message: "Error interno al eliminar el producto",
    });
  }
};

export {
  getAllProducts,
  getActiveProducts,
  getProductById,
  createProduct,
  modifyProduct,
  removeProduct,
};
