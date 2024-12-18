const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server running")
})



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://bodruddozaredoy:redoy1234....6969@cluster0.kjd4b.mongodb.net/?tls=true&retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const productCollection = client.db("productDB").collection("products")
    const categoryCollection = client.db("productDB").collection("category")
    const userCollection = client.db("productDB").collection("users")

    app.post("/user", async (req, res) => {
      const user = req.body
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.post("/products", async (req, res) => {
        const product = req.body
        const result = await productCollection.insertOne(product)
        res.send(result)
    })

    app.post("/products/categories", async (req, res) => {
      const categories = req.body;
      const category = await categoryCollection.findOne({category:categories.category})
      if(category){
        // console.log("already added");
        return
      }else{
        const result = await categoryCollection.insertOne(categories)
        res.send(result)
      }
    })

    app.put("/product/rating/:id", async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const rating = req.body
      const updatedDoc = {
        $set: {
          rating:rating
        }
      }
      const result = await productCollection.updateOne(query, updatedDoc)
      res.send(result)
    })

    app.get("/products/categories", async(req, res) => {
      const cursor = categoryCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/products", async (req, res) => {
      const cursor = productCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await productCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})