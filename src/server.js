const app = require("./index");
const connect = require("./configs/db");

app.listen(4080, async function(){
    try{
        await connect();
        console.log("listening to port 4080");
    }catch(err){
        console.log(err.message);
    }
});