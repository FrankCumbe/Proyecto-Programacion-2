***Titulo:***
Dashboard para la gestion de informacion para distribuidoras de productos de belleza.

***Descripcion breve del problema:***
la mala eficacia en la gestion y analisis en negocios de productos para la belleza actualmente.

***Integrantes del equipo:***
Dana Valentina Bernal Leon y Frank Eduardo Cumbe Rojas

***Modulos:***
Autenticacion y gestion de usuarios, procesamiento de pedidos y ventas, reportes y analisis de datos, interfaz de usuario, gestion de clientes y proveedores, y gestion de facturacion de pagos

***Tecnologia:***
Lenguaje de programacion:(javaScript) con Node.js para el (backend) del desarrolo del proyecto.
Control de Version: GitHub.

***Base De Datos**
Usaremos el Node.js con Express.js y MySQL

 ***Flujo de Sistema:***
Inicio de sesión → Usuario accede con credenciales y permisos.
2)Registro de productos (Solo Administrador) → Puede agregar nuevos productos al inventario.
3)Actualización de stock (Solo Administrador) → Ajusta existencias cuando hay ventas o reposición de productos.
4)Registro de pedidos (Vendedor) → Puede ingresar nuevas órdenes de clientes.
5)Gestión de clientes (Administrador y Vendedor) → Ambos pueden actualizar datos y hacer seguimiento a los clientes.
6)Consulta de reportes (Solo Administrador) → Puede generar informes de ventas, clientes e inventario.
7)Cierre de sesión → Cualquier usuario puede cerrar sesión cuando termine su actividad en el sistema.

*** roles de usuario y sus posibles interacciones***

🔹 Administrador:
- Gestiona productos, stock, pedidos y clientes.
- Genera reportes de ventas.
🔹 Vendedor:
- Registra pedidos de clientes.
- Gestiona información de clientes.
- No puede modificar el inventario ni acceder a reportes.
🔹 Cliente (opcional):
- Puede ver su historial de compras.
- No tiene acceso a la gestión del sistema.
