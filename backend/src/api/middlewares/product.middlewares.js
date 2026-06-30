const categoriasValidas = ["cuidado_capilar", "manicuria_unas"];

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!/^[1-9]\d*$/.test(id)) {
    return res.status(400).json({
      message: "El ID debe ser un numero entero positivo y mayor a 0",
    });
  }

  const parsedId = parseInt(id, 10);

  req.id = parsedId;

  next();
};

const isEmpty = (value) => {
  return value === undefined || value === null || String(value).trim() === "";
};


// Faltaria hacer validaciones con las imagenes
const validateProduct = (req, res, next) => {
  const { name, price, category } = req.body;
  const errores = [];

  const nameTrimmed = typeof name === "string" ? name.trim() : "";
  const categoryTrimmed = typeof category === "string" ? category.trim() : "";
  const priceNumber = Number(price); //Si viene un string, retorna isNaN

  if (isEmpty(name)) {
    errores.push("El nombre es obligatorio");
  } else if (nameTrimmed.length < 2) {
    errores.push("El nombre debe tener al menos 2 caracteres");
  } else if (nameTrimmed.length > 50) {
    errores.push("El nombre no puede superar los 50 caracteres");
  }

  if (isEmpty(price)) {
    errores.push("El precio es obligatorio");
  }else if(Number.isNaN(priceNumber)){
    errores.push("El precio debe ser un numero");
  } 
  else if (priceNumber <= 0) {
    errores.push("El precio debe ser un numero mayor a 0");
  }

  if (isEmpty(category)) {
    errores.push("La categoria es obligatoria");
  } else if (!categoriasValidas.includes(categoryTrimmed)) {
    errores.push("Categoria invalida");
  }

  if (errores.length > 0) {
    return res.status(400).json({
      message: "Datos invalidos",
      errores,
    });
  }

  req.body.name = nameTrimmed;
  req.body.category = categoryTrimmed;
  req.body.price = priceNumber;

  next();
};

export { validateId, validateProduct };
