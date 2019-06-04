//API -- AJAX
$(".eatburger").on("click", function (event) {

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
  $(".create-form").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("newBurger").val().trim(),
      devoured: $("[name=burger]:checked").val().trim()
    };

    //SEND POST REQUEST

    $.ajax("api/burgers" + id, {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("create new burger");
      location.reload();
    });
  });

  //TRASH BURGER
});