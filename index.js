const express = require("express")

const app = express()

app.get("*", (req, res) => {
    res.redirect("https://ellisluke.com")
})

app.listen(5000)