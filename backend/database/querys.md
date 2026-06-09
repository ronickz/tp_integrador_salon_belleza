```js
CREATE DATABASE salon_belleza

use salon_belleza;

//tabla productos

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    categoria ENUM('cuidado_capilar', 'manicuria_unas') NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad_stock INT NOT NULL,
    activo BOOL NOT NULL DEFAULT TRUE
);


// Insert de productos

INSERT INTO productos 
(nombre, marca, categoria, imagen, precio, cantidad_stock, activo)
VALUES
('Shampoo Reparador Keratina', 'Aura Beauty', 'cuidado_capilar', 'https://placehold.co/600x400.png', 8500.00, 20, 1),
('Acondicionador Hidratante', 'Aura Beauty', 'cuidado_capilar', 'https://placehold.co/600x400.png', 7900.00, 18, 1),
('Máscara Capilar Nutritiva', 'Luminé', 'cuidado_capilar', 'https://placehold.co/600x400.png', 12500.00, 12, 1),
('Protector Térmico Capilar', 'Luminé', 'cuidado_capilar', 'https://placehold.co/600x400.png', 9700.00, 15, 1),
('Óleo Capilar Reparador', 'Bella Pro', 'cuidado_capilar', 'https://placehold.co/600x400.png', 6900.00, 10, 1),
('Crema para Peinar Rizos', 'Curl Studio', 'cuidado_capilar', 'https://placehold.co/600x400.png', 8800.00, 14, 1),
('Sérum Anti Frizz', 'Bella Pro', 'cuidado_capilar', 'https://placehold.co/600x400.png', 7600.00, 16, 1),
('Ampolla Reparadora Capilar', 'Aura Beauty', 'cuidado_capilar', 'https://placehold.co/600x400.png', 5200.00, 25, 1),
('Spray Brillo Capilar', 'Luminé', 'cuidado_capilar', 'https://placehold.co/600x400.png', 6100.00, 13, 1),
('Tratamiento Capilar Argán', 'Natural Glow', 'cuidado_capilar', 'https://placehold.co/600x400.png', 14200.00, 8, 0),
('Esmalte Gel Nude Rose', 'Aura Beauty', 'manicuria_unas', 'https://placehold.co/600x400.png', 4200.00, 30, 1),
('Esmalte Rojo Intenso', 'Aura Beauty', 'manicuria_unas', 'https://placehold.co/600x400.png', 4300.00, 25, 1),
('Top Coat Brillo', 'Bella Pro', 'manicuria_unas', 'https://placehold.co/600x400.png', 3900.00, 22, 1),
('Base Fortalecedora', 'Bella Pro', 'manicuria_unas', 'https://placehold.co/600x400.png', 4600.00, 16, 1),
('Aceite para Cutículas', 'Luminé', 'manicuria_unas', 'https://placehold.co/600x400.png', 5100.00, 14, 1),
('Removedor de Esmalte', 'Nail Care', 'manicuria_unas', 'https://placehold.co/600x400.png', 3500.00, 28, 1),
('Lima Profesional', 'Nail Care', 'manicuria_unas', 'https://placehold.co/600x400.png', 2500.00, 40, 1),
('Kit Uñas Press On', 'Aura Beauty', 'manicuria_unas', 'https://placehold.co/600x400.png', 9900.00, 11, 1),
('Esmalte Blanco Perlado', 'Luminé', 'manicuria_unas', 'https://placehold.co/600x400.png', 4400.00, 19, 1),
('Gel Constructor Transparente', 'Nail Studio', 'manicuria_unas', 'https://placehold.co/600x400.png', 11800.00, 7, 0);

```