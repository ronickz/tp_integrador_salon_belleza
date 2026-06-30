## EJS
1. Instalar extension ejs
2. Crear src/public en backend y copiar archivos de backend_dashboard quedaria src/api y src/public
3. Crear src/api/utils y dentro un index.js
4. Ver ese archivo y analizarlo
5. Configurar el index el static
6. npm i ejs
7. app.set("view engine","ejs") para setear ejs como motor.
8. app.set("views",join(_dirname,"src/views")) para saber donde buscar las vistas y servirlas con res.render.
9. Crear endpoint /dashboard que apunte al router view.routes.js /index, indexView (controller)


## LOGIN

1. Instalar express-session e importarlo
2. Definir una session_key en .env SESSION_KEY= e importarlo al codigo con environments.js
3. app.use(session({secret:session_key,resave:false,saveUnininialized:true}))
