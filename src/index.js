const express = require('express');
const app = express();

app
.use(express.urlencoded({ extended: true }))

.use(express.static("public"))

.use('/assets', express.static(__dirname + 'public/assets'))
.use('/icons', express.static(__dirname + 'public/icons'))
.use('/scripts', express.static(__dirname + 'public/scripts'))
.use('/styles', express.static(__dirname + 'public/styles'))

.get("/", function(req, res){
    res.sendFile(__dirname + "/src/pages/index.html")
})

app.listen(process.env.PORT || 7995, () => {
    console.log(`Server ir running in port : http://localhost:7995`)
});