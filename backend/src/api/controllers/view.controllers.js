import ProductModels from "../models/product.models.js"

const indexView = async (req, res) => {

    try {
        const [rows] = await ProductModels.selectAllProducts();

        res.render("index", {
            title: "Inicio",
            about: "Nuestros productos",
            productsArray: rows
        });

    } catch (error) {
        console.log(error);
    }
}

const getView = (req, res) => {
    res.render("get", {
        title: "Consultar",
        about: "Consultar producto por id:"
    });
}


const createView = (req, res) => {
    res.render("post", {
        title: "Crear",
        about: "Crear producto"
    });
}

const updateView = (req, res) => {
    res.render("put", {
        title: "Modificar",
        about: "Consultar producto por id:"
    });
}


const deleteView = (req, res) => {
    res.render("delete", {
        title: "Eliminar",
        about: "Consultar producto por id:"
    });
}

export {
    indexView,
    getView,
    createView,
    updateView,
    deleteView
}