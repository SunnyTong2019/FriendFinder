var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/:page", function (req, res) {
        var page = req.params.page;

        if (page === "survey") { res.sendFile(path.join(__dirname, "../public/survey.html")); }
        else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });
    
};

