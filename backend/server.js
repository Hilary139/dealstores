require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require("path");

connectDB();

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, "frontend", "build")));

// my issues is here !!!!
app.get("/", (req, res, next) => {
 //res.json({ message: "API running..." });
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
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
