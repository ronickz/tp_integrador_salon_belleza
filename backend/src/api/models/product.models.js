import connection from "../database/db.js";


const selectAllProducts = () => {
    const sql = "SELECT * FROM products";

    return connection.query(sql);
}

const selectAllProductsPaginated = (limit,offset) => {
    const sql = "SELECT * FROM products LIMIT ? OFFSET ?";

    return connection.query(sql, [limit, offset]);
}

const selectActiveProducts = () => {
    const sql = "SELECT id, name, price, image FROM products where active = TRUE";

    return connection.query(sql);
}

const selectActiveProductsPaginated = (limit, offset) => {
    const sql = `
        SELECT id, name, price, image
        FROM products
        WHERE active = true
        LIMIT ? OFFSET ?
    `;

    return connection.query(sql, [limit, offset]);
};

const selectProductById = (id) => {
    const sql = "SELECT * FROM products where products.id = ?";
    return connection.query(sql, [id]);
}

const insertProduct = (name, image, category, price) => {
    const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

    // Optimizacion 4: Guardamos la respuesta en rows, para obtener el id rows.insertId
    return connection.query(sql, [name, image, category, price]);
}

const updateProduct = (name, image, category, price, active, id) => {
    const sql = "UPDATE products SET name = ?, image = ?, category = ?, price = ?, active = ? WHERE id = ?";

    return connection.query(sql, [name, image, category, price, active, id]);
}

const deleteProduct = (id) => {
    const sql = "UPDATE products SET active = false WHERE id = ?"
    return connection.query(sql, [id]);
}

export default {
    selectAllProducts,
    selectAllProductsPaginated,
    selectActiveProducts,
    selectActiveProductsPaginated,
    selectProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}