const express = require("express")
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));




app.get("/", (req, res) => {

    res.render('bmi')
})

app.post("/reg", (req, res) => {

    let age = Number(req.body.age)
    let weight = Number(req.body.weight1)
    let height = Number(req.body.height1)

    // console.log(name)
    // console.log(height)

    height = height/100
    
    height = height * height
   
    let bmi = weight/height
    bmi = bmi.toFixed(2)

    res.render("bmi", {bmi : bmi})

    




})




app.listen(3000, () => {
    console.log("server running")
})