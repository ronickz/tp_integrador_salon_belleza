import connection from "../database/db.js";

const selectProductsByIds = (productIds) => {
  const sql = `
    SELECT id, name, price
    FROM products
    WHERE id IN (?) AND active = true
  `;

  return connection.query(sql, [productIds]);
};

const insertSale = (clientName, total) => {
  const sql = "INSERT INTO sales (client_name, total) VALUES (?, ?)";

  return connection.query(sql, [clientName, total]);
};

const insertSaleProduct = (saleId, productId, quantity, unitPrice, subtotal) => {
  const sql = `
    INSERT INTO sale_products
    (sale_id, product_id, quantity, unit_price, subtotal)
    VALUES (?, ?, ?, ?, ?)
  `;

  return connection.query(sql, [saleId, productId, quantity, unitPrice, subtotal]);
};

const selectAllSales = () => {
  const sql = `
    SELECT id, client_name, sale_date, total
    FROM sales
    ORDER BY sale_date DESC
  `;

  return connection.query(sql);
};

const selectSaleById = (id) => {
  const sql = `
    SELECT id, client_name, sale_date, total
    FROM sales
    WHERE id = ?
  `;

  return connection.query(sql, [id]);
};

const selectSaleProductsBySaleId = (saleId) => {
  const sql = `
    SELECT
      sp.product_id,
      p.name,
      sp.quantity,
      sp.unit_price,
      sp.subtotal
    FROM sale_products sp
    INNER JOIN products p ON p.id = sp.product_id
    WHERE sp.sale_id = ?
  `;

  return connection.query(sql, [saleId]);
};

export default {
  selectProductsByIds,
  insertSale,
  insertSaleProduct,
  selectAllSales,
  selectSaleById,
  selectSaleProductsBySaleId
};
