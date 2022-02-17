import { TYPESCART } from "./reducers/cart.reducer";
import { TYPESAUTH } from "./reducers/auth.reducer";


const TYPES = { ...TYPESCART, ...TYPESAUTH };


export default TYPES;