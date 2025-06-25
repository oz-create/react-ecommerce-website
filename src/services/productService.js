import api from "./api"

const ProductService = {
    getProduct : async() => {
       return api.get("/products")
    }
}

export default ProductService