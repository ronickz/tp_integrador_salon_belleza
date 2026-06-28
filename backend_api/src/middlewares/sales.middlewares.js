const validateSale = (req, res, next) => {
  const { clientName, products } = req.body;
  const errores = [];
  const productsToBuy = [];

  if (typeof clientName !== "string" || clientName.trim() === "") {
    errores.push("El nombre del cliente es requerido");
  }

  if (!Array.isArray(products) || products.length === 0) {
    errores.push("La venta debe tener al menos un producto");
  } else {
    products.forEach((product, index) => {
      if (product === null) {
        errores.push(`El producto ${index + 1} no puede ser null`);
        return;
      }

      const productId = Number(product.productId);
      const quantity = Number(product.quantity);

      if (!Number.isInteger(productId) || productId <= 0) {
        errores.push(`El producto ${index + 1} debe tener un productId valido`);
      }

      if (!Number.isInteger(quantity) || quantity <= 0) {
        errores.push(`El producto ${index + 1} debe tener una cantidad valida`);
      }

      productsToBuy.push({
        productId,
        quantity,
      });
    });
  }

  if (errores.length > 0) {
    return res.status(400).json({
      message: "Datos invalidos",
      errores,
    });
  }

  req.body.clientName = clientName.trim();
  req.body.products = productsToBuy;

  next();
};

export { validateSale };
