let express     = require("express"),
    app         = express(),
    port        = 3000,
    bodyParser  = require("body-parser");

app.set("view engine", "ejs");      // don't need .ejs extention
app.use(express.static("public"));      // tell express to serve the content of the public directory
app.use(bodyParser.urlencoded({extended: true}));   // to get form data

// store data
let friends = [];

//==============    Routes  ================
app.get("/", (req, res) => {
    res.render("home");
});

// Index Routes
app.get("/index", (req, res) => {
    res.render("index", {friends: friends});
});

// New Routes
app.get("/index/new", (req, res) => {
    res.render("new");
});

// Create Routes
app.post("/index", (req, res) => {
    let newName = req.body.name;
    friends.push(newName);
    res.redirect("/index");
})

// Show Routes
app.get("/index/:id", (req, res) => {
    res.render("show", {friends: friends});
});

// Edit Routes
app.get("/index/:id/edit", (req, res) => {
    res.render("edit");
});

// Update Routes
app.put("/index/:id", (req, res) => {
    res.redirect("/index");
})

// Delete Routes
app.delete("/index/:id", (req, res) => {
    res.redirect("/index")
})


// listening at port 3000
app.listen(port, (req, res) => {
    console.log("Starting Server");
});
