//API -- AJAX
$(".eatburger").on("click", function (event) {
  event.preventDefault();

  var id = $(this).data("id");
  var devouredState = {
    devoured: 1

  };
  //SEND PUT REQUEST
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState
  }).then(function () {
    console.log("Burger devoured");
    location.reload();
  });
});

//preventDefault
$(function () {
  $(".change-form").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("newBurger").val().trim(),
      devoured: 0
    };

    //SEND POST REQUEST

    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("create new burger");
      location.reload();
    });
  });

  //TRASH BURGER
});