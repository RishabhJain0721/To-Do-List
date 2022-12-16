const express=require('express');
const bodyParser=require('body-parser');

const app=express();
let PORT= 3000 || process.env.PORT;

app.listen(PORT,function(){
    console.log('Server started on port 3000');
})

let items=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',function(req,res){

    let today  = new Date();

    let options = { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric' 
    };
    
    let day=(today.toLocaleDateString("en-US", options));
    console.log(today.toLocaleDateString("en-US", options));
    res.render('index',{kindOfDay:day,listItems:items});
})

app.post('/',function(req,res){

    let item=req.body.listItem;
    items.push(item);
    res.redirect('/');
})