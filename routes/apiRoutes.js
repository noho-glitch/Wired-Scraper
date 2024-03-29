// Dependencies
var db = require("../models");
var express = require("express");

// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Route 1
// =======
// This route will retrieve all of the data

module.exports = function(app) {
  app.get("/articles", function(req, res) {
    db.Article.find({}, function(error, found) {
      if (error) {
        console.log(error);
      }
      // Otherwise, send the result of this query to the browser
      else {
        res.json(found);
      }
    });
  });

  app.get("/scrape", function(req, res) {
    axios.get("https://www.wired.com").then(function(response) {
      var $ = cheerio.load(response.data);

      // Select each element in the HTML body from which you want information.
      $(".card-component__description").each(function(i, element) {
        var results = {};

        results.title = $(element)
          .children()
          .text();
        results.link = $(element)
          .find("a")
          .attr("href");
        results.img = $(element)
            .parent()
            .parent()
            .find(".image-group-component")
            .attr("src")
        // Save these results in an object that we'll push into the results array we defined earlier
        db.Article.create(results).then(function(dbArticle) {
          console.log(results);
        });
      });
    });
  });

  app.get("/remove", function(req, res) {
    res.send("data removed");

    db.Article.remove({}, function(err) {
      console.log("collection removed");
    });
  });
};
