const app= require("express")()
const port = 8080;
app.listen(port,()=>{
  console.log(`server now listening on port ${port}`);
})