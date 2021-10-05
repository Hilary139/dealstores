require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require("path");

// database connection 
connectDB();

// initalzing express.js
const app = express();

// picking up react ndex.html file
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/build")));

// my issues is here !!!!
app.get("/", (req, res) => {
 res.json({ message: "API running..." });
 
});

// routes
app.use("/api/products", productRoutes);

// running build on production 
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 8090 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
