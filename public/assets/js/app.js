$("#scrape").on("click", function(event) {
    $.ajax("/scrape", {
      type: "GET"
    }).then(function() {
      console.log("scraping");
      location.reload();
    });
  });

  $.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append( "<a href='https://www.wired.com" + data[i].link + "'>" + "<div class='col-sm'>" + "<div class='card' style='width: 18rem;'>" + "<div class='card-body'>" + "<h5 class='card-title'>" + data[i].title + "</h5>" +"<p class='card-text'>" + data[i].link + "</p>" +
      "</div>" + "</a>");
    }
  });