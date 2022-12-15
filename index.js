const express = require("express")

const app = express()

app.get("*", (req, res) => {
    res.redirect("https://ellisluke.com")
})

app.listen(process.env.PORT || 3000)