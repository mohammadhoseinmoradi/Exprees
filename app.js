const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req)
    res.send("Hello express")
})
app.get('/a', (req, res) => {
    console.log(req)
    res.send("Hello express A")
})
app.get('/b', (req, res) => {
    console.log(req)
    res.send("Hello express B")
})


app.listen(5005, () => {
    console.log("the server is started 5005 !!");
})