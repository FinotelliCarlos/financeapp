const express = require('express');
const app = express();

app
    .set('view engine','ejs')
    .use(express.static('public'))

    .get('/', (req,res) => {
    res.render('index')
})

    .listen(process.env.PORT || 4000, () => {
    console.log("App is running!")
})