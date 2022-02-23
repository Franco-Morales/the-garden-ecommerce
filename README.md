# The Garden Ecommerce

Proyecto final para el curso de React.js de CoderHouse.

E-commerce basado en la venta de plantas, macetas y semillas.


## Dependecias del proyecto

#### Estilos
- **Bootstrap** : v5.1.3
    - Librería de estilos.
- **Sass** : v1.45.0 
    - Para optimazar y custumizar Bootstrap.

#### Desarrollo
- **Firebase** : v9.6.6
    - Gestionar colecciones en Firestore y cuentas de usuario con el módulo Auth.
- **React Router Dom** : v6.2.1
    - Mejorar la navegabilidad entre componentes, control de parametros en las url.
- **React** toastify: v8.2.0
    - Mejorar la experiencía del usuario para notificarlo de cambios de estado.



## Rutas del proyecto
Rutas que no requieren de autenticación
* Home
```
/
```
* Categorias por ID
```
/category/:cid
```
* Lista de productos
```
/products
```
* Detalle producto
```
/product/:prodId
```
* Carrito
```
/cart
```
* Inicio de Sesión
```
/login
```
* Registro de usuario
```
/signup
```
* About
```
/about
```
* Terminos y condiciones
```
/policy
```
* Pág. 404
```
*
```

Rutas que requieren autenticación
* Perfil del usuario
```
/profile/:userId
```
* Wishlist
```
/wishlist/:userId
```
* Lista de pedidos
```
/orders/:userId
```
* Detalle del pedido
```
/orders/:userId/order/:orderId
```

## Gestion de estado global

La gestion de estado se realiza mediante `useReducer` y tres `reducers` uno para cada estado, junto a `Context API` ( React ).
```javascript
state: {
    cart: [],
    categories: [],
    aut: {}
}
``` 
## Demo 

Cuenta de prueba :
- **Email** : user@user.com
- **Password** : user1234


Link de la app web : https://cranky-bell-2fefda.netlify.app/