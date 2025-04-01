***Titulo:***
Dashboard para la gestion de informacion para distribuidoras de productos de belleza.

***Descripcion breve del problema:***
Las distribuidoras de productos de belleza enfrentan diversas dificultades en la gestión y análisis de su información, lo que impacta en la eficiencia operativa. Los principales problemas incluyen:
-Falta de automatización en el control de inventario.
-Dificultad en la generación de reportes y análisis de datos.
-Ineficiencia en la gestión de pedidos y facturación.
-Seguimiento deficiente de clientes y proveedores.
Este proyecto busca desarrollar un sistema que solucione estos problemas mediante una plataforma digital optimizada.

***Integrantes del equipo:***
Dana Valentina Bernal Leon y Frank Eduardo Cumbe Rojas

***Modulos:***
Autenticacion y gestion de usuarios, procesamiento de pedidos y ventas, reportes y analisis de datos, interfaz de usuario, gestion de clientes y proveedores.

***Tecnologia:***
Lenguaje de programación: JavaScript con Node.js (Backend).
Framework Backend: Express.js.
Base de datos: MySQL alojado en AWS RDS (Amazon Relational Database Service).
ORM:sequelize (para facilitar el manejo de la base de datos y mejorar el rendimiento).
Control de versiones: GitHub
Framework de interfaz: React.js.
Seguridad: Autenticación con JWT, cifrado de contraseñas con bcrypt.

***Base De Datos***
Usaremos el Node.js con Express.js y MySQL
ORM: Sequelize (para facilitar la gestión de datos sin escribir consultas SQL directas).
Alojamiento: AWS RDS (permite acceso remoto, seguridad y escalabilidad).

 ***Flujo de Sistema:***
Inicio de sesión → Usuario accede con credenciales y permisos.
2)Registro de productos (Solo Administrador) → Puede agregar nuevos productos al inventario.
3)Actualización de stock (Solo Administrador) → Ajusta existencias cuando hay ventas o reposición de productos.
4)Registro de pedidos (Vendedor) → Puede ingresar nuevas órdenes de clientes.
5)Gestión de clientes (Administrador y Vendedor) → Ambos pueden actualizar datos y hacer seguimiento a los clientes.
6)Consulta de reportes (Solo Administrador) → Puede generar informes de ventas, clientes e inventario.
7)Cierre de sesión → (Administrador) puede cerrar sesión cuando termine su actividad en el sistema.

***roles de usuario y sus posibles interacciones***
Administrador:
-Gestiona productos, stock, pedidos y clientes.
-Genera reportes de ventas y análisis de datos.
-Administra la seguridad y permisos del sistema.
Vendedor:
-Registra pedidos de clientes.
-Gestiona información de clientes y su propio perfil.
-No puede modificar el inventario ni acceder a reportes.
Supervisor (Nuevo Rol):
-Puede ver reportes de ventas y datos importantes del negocio.
-Analiza tendencias y resultados para ayudar en la toma de decisiones.
Cliente:
-Puede consultar su historial de compras.
-No tiene acceso a la gestión del sistema.

***Seguridad y Control de Accesos***
Autenticación: Implementación de JWT para control de acceso seguro.
Autorización: Definir permisos según roles de usuario.
Restricción de accesos: Cada usuario solo podrá acceder a los módulos permitidos según su rol.
-Administrador: Acceso total al sistema.
-Vendedor: Acceso solo a la gestión de clientes y registro de pedidos y su propio perfil.
-Supervisor: Acceso únicamente a la consulta de reportes y análisis de datos.
-Cliente: Acceso solo a la visualización de su historial de compras.





