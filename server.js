const express = require('express');
const path  = require('path');
const port = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

 app.get('/point', (req, res)=>{
    res.sendFile(path.join(__dirname, '../timeoff-project/client/public/index.html'));
}) 
//../timeoff-project/client/public/

app.listen(port, (err)=>{
    if(err){
        console.log("error getting");
    }else{
        console.log(`we are now listening to ${port}`);
    }
})
