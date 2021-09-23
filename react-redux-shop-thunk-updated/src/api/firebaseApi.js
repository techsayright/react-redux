import axios from "axios";

export default axios.create({
    baseURL:'https://cart-products-d39f6-default-rtdb.firebaseio.com'
});