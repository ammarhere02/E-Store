const express = require('express');
const mainRoute = require('./routes/mainroute');
const port = process.env.PORT || 3008;
const app = express();

app.use(express.json());


app.use('/', mainRoute);
app.use('/categories' , mainRoute);
app.use('/categories/:id' , mainRoute);
app.use('/categories/:id/subcategories' , mainRoute)
app.use("/categories/:id/subcategories/:subid" , mainRoute);

app.get('/' , (req, res) => {

  res.redirect('/home')
  console.log("redirected to home sucessfully")
})

app.get("/home", (req, res) => {
  res.status(200).json("Welcome to home")
  console.log("Welcome to the home :)")
});


app.listen(port , ()=>
{
  console.log(`server running at http://localhost:${port}/`)
})