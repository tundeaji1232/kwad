const app= require("express")()
const PORT = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`server now listening on port ${port}`);
})
