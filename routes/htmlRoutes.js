// Dependencies
module.exports = function(app) {
    // Main route (simple Hello World Message)
    app.get("/", function(req, res) {
        res.render("index")
    });
};