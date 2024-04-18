import express from "express";
import axios from "axios";

const app = express();
const port = 3000; 
const API_URL = "https://randomuser.me/api/" ;
app.use(express.static("public"));

const options = {

}

app.get("/", async(req,res) => {
    try{
        
    const response = await axios.get( API_URL );
    const result = response.data.results[0];
    const seedy = response.data.info.seed;
    

    res.render("index.ejs", {seed: seedy, person: result}); 
    } catch(err) {
        console.log(`They really just said "${err.errors}"`);
    }
})

app.listen(port, () => {
    console.log(`your mother huge and lives in http://localhost:${port}`);
})
