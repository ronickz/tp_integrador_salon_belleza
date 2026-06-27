const useDatabase = async (connection) => {
    const sql = "USE salon_belleza";

    await connection.query(sql);
};

const createProductsTableIfNotExists = async (connection) => {
    const sql = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            category ENUM('cuidado_capilar', 'manicuria_unas') NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            active BOOLEAN NOT NULL DEFAULT TRUE
        )
    `;

    await connection.query(sql);
};

const importProductsIfEmpty = async (connection) => {
    const [[{ total }]] = await connection.query("SELECT COUNT(*) AS total FROM products");

    if (total > 0) {
        return;
    }

    const sql = `
        INSERT INTO products 
        (name, category, image, price, active)
        VALUES
        ('Shampoo Reparador Keratina', 'cuidado_capilar', 'https://placehold.co/600x400.png', 8500.00, 1),
        ('Acondicionador Hidratante', 'cuidado_capilar', 'https://placehold.co/600x400.png', 7900.00, 1),
        ('Máscara Capilar Nutritiva', 'cuidado_capilar', 'https://placehold.co/600x400.png', 12500.00, 1),
        ('Protector Térmico Capilar', 'cuidado_capilar', 'https://placehold.co/600x400.png', 9700.00, 1),
        ('Óleo Capilar Reparador', 'cuidado_capilar', 'https://placehold.co/600x400.png', 6900.00, 1),
        ('Crema para Peinar Rizos', 'cuidado_capilar', 'https://placehold.co/600x400.png', 8800.00, 1),
        ('Sérum Anti Frizz', 'cuidado_capilar', 'https://placehold.co/600x400.png', 7600.00, 1),
        ('Ampolla Reparadora Capilar', 'cuidado_capilar', 'https://placehold.co/600x400.png', 5200.00, 1),
        ('Spray Brillo Capilar', 'cuidado_capilar', 'https://placehold.co/600x400.png', 6100.00, 1),
        ('Tratamiento Capilar Argán', 'cuidado_capilar', 'https://placehold.co/600x400.png', 14200.00, 0),
        ('Esmalte Gel Nude Rose', 'manicuria_unas', 'https://placehold.co/600x400.png', 4200.00, 1),
        ('Esmalte Rojo Intenso', 'manicuria_unas', 'https://placehold.co/600x400.png', 4300.00, 1),
        ('Top Coat Brillo', 'manicuria_unas', 'https://placehold.co/600x400.png', 3900.00, 1),
        ('Base Fortalecedora', 'manicuria_unas', 'https://placehold.co/600x400.png', 4600.00, 1),
        ('Aceite para Cutículas', 'manicuria_unas', 'https://placehold.co/600x400.png', 5100.00, 1),
        ('Removedor de Esmalte', 'manicuria_unas', 'https://placehold.co/600x400.png', 3500.00, 1),
        ('Lima Profesional', 'manicuria_unas', 'https://placehold.co/600x400.png', 2500.00, 1),
        ('Kit Uñas Press On', 'manicuria_unas', 'https://placehold.co/600x400.png', 9900.00, 1),
        ('Esmalte Blanco Perlado', 'manicuria_unas', 'https://placehold.co/600x400.png', 4400.00, 1),
        ('Gel Constructor Transparente', 'manicuria_unas', 'https://placehold.co/600x400.png', 11800.00, 0)
    `;

    await connection.query(sql);
};

const setupDatabase = async (connection) => {
    await useDatabase(connection);
    await createProductsTableIfNotExists(connection);
    await importProductsIfEmpty(connection);

    console.log("Database creada y datos importados correctamente");
};

export {
    setupDatabase
};
