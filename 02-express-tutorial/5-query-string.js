const express = require("express");
const app = express();
const { products } = require("./data")

// Home page
app.get("/", (req, res) => {
    res.send("<h1>home page</h1><a href='api/products'>products</a>")
})

// List all products
app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

// For searching products using product ID
app.get("/api/products/:productID", (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send("product does not exitst!")
    }
    console.log(singleProduct)

    return res.json(singleProduct)
})

// Going deeper into product. Ex: prodcut reviews
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params)
    res.send("hello world")
})

// Searching products using the query function
// (/api/v1) custom name
// Limit:
// If you want two products (/query?limit=2), four products (/query?limit=4)
//
// Search:
// If you want to search products using a string. Ex: (/query?search=a) returns products starting with the letter "a",
//                                                    (/query?search=albany) returs products that has the word "albany"
//
// Both together: (/query?search=a&limit=2) returns 2 products starting with the letter "a"
app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts < 1) {
        res.status(200).send("no products matched your search")
    }
    res.status(200).json(sortedProducts)
})

app.listen(5001, () => {
    console.log("server is listening on port 5001");
})