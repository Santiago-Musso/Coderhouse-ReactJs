# Tienda virtual heladeria

Proyecto realizado para la comision 34775 del curso de React en Coderhouse, se trata de una tienda referida a la venta de postres, palitos y tortas heladas. Cada producto cuenta con una breve descripción, imagen, precio y stock almacenados en la base de datos. A través del carrito se arma la compra que queda realizada una vez verificados y enviados los datos del formulario. A su vez cuenta con un apartado admin para realizar la carga y eliminacion de productos.
## Librerias utilizadas 

- [Firebase](https://firebase.google.com)  
BDD que contiene los productos y las órdenes
- [React-router-dom](https://reactrouter.com)  
Definir rutas de navegación
- [React-toastify](https://fkhadra.github.io/react-toastify)  
Toasts para mejorar la experiencia de usuario
- [React-Booststrap](https://react-bootstrap.netlify.app)  
Para crear cards rapidamente y facilitar el ingreso de nuevos productos y funcionalidades
- [Bootstrap](https://getbootstrap.com)  
Para ajustar la organización de los elementos 
- [Standard](https://standardjs.com)  
Libreria para el linteo y formateo de código

## Funcionalidades del proyecto

- Visualizar todos los productos en el home
- Barra de categorías dinámica para mostrar solo la categoría seleccionada
- Detalle de cada producto con descripción, precio, imagen y limitacion de stock
- Carrito de compras con posibilidad de quitar uno a uno los elementos, y detalle de toda la compra
- Formulario de datos para completar la orden y guardarla en la BDD
- Apartado ADMIN para agregar y quitar los productos a elección
- Sección buscar pedido para introducir el nombre de orden y mostrar el estado del pedido

### Pasos para clonar el repositorio en local

1. Clonar el repositorio
```
  git clone https://github.com/Santiago-Musso/Coderhouse-ReactJs.git
```

2. Abrirlo e instalar dependencias 

```
  npm install
```
3. Correr el proyecto en local 
```
  npm start
```
4. Solicitar acceso a las variables de entorno a santiagomusso@gmail.com