# Rutas actuales de la API

Base URL: `/api`

| Metodo | Ruta | Uso |
|---|---|---|
| GET | `/products` | Lista productos activos para el frontend. |
| GET | `/admin/products` | Lista productos para administracion. |
| GET | `/admin/products/:id` | Obtiene un producto por ID. |
| POST | `/admin/products` | Crea un producto. |
| PUT | `/admin/products/:id` | Modifica un producto. |
| DELETE | `/admin/products/:id` | Desactiva un producto. |
| POST | `/sales` | Registra una venta. |

Ruta simple del servidor:

| Metodo | Ruta | Uso |
|---|---|---|
| GET | `/` | Prueba basica de que la API esta funcionando. |
