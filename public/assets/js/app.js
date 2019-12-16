$(document).ready(function() {
  $("#scrape").on("click", function(event) {
    $.ajax("/scrape", {
      type: "GET"
    }).then(function() {
        console.log("scraping new articles")
        // setTimeout(location.reload(), 1000);

    });
    setTimeout(location.reload(), 1000);
  });

  $.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append(
        
          "<div class='col-sm'>" +
          "<div class='card' style='width: 18rem;'>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" +
          data[i].title +
          "</h5>" + "<a href='https://www.wired.com" +
          data[i].link +
          "'>" +
          "<p class='card-text'>" + "wired.com" +
          data[i].link +
          "</a>" +
          "</p>" +
          "<button id='modal" + data[i]._id + "'type='button' class='btn btn-primary comments' data-toggle='modal' data-target='#exampleModal'>Comments</button>" +
          "</div>" 
      );

      $("#modal" + data[i]._id).on("click", function(event) {
          console.log("Your clicked this modal id#" + this.id)
          $(".modal").modal("show")
      })
    }
  });

  $("#clear").on("click", function(event) {
    $.getJSON("/remove", {}).then(function() {
      console.log("clearing");

    });
    location.reload();

  });
});
