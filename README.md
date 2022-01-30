# The Garden Ecommerce

Proyecto final para el curso de React.js de CoderHouse


### Rutas del proyecto

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
/product/:uid
```
* About
```
/about
```
* Terminos y condiciones
```
/policy
```

### Service

La ejecución del método `resolve` de la `Promise` está sujeto a un número aleatorio ([Ver](https://github.com/Franco-Morales/the-garden-ecommerce/blob/main/src/services/mockData.js)). Para los casos en que se ejecute `reject` se mostrará un componente con un spinner para simular la carga. Caso contrario se verá la lista o item solicitado.

### useReducer

Documentación utilizada: [React useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer)
* state
```
{
    cart: []
}
```
El componente `Item.jsx` realiza la accion de agregar elementos al carrito, en la vista `/cart`, se puede ver el estado de carrito.