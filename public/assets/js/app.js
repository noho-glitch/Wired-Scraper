$("#scrape").on("click", function(event) {
    $.ajax("/scrape", {
      type: "GET"
    }).then(function() {
      console.log("scraping");
      location.reload();
    });
  });