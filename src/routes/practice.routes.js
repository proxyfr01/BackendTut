app.get("/" , (req ,res) => {
    res.send("we got a  get request");
})

app.post("/updation", (req, res) => {
    res.send("thee is a post reques has been made")
})