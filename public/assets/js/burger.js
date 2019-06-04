//API -- AJAX

$(function () {
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

  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("Burger devoured");
      location.reload();
    });
  });

  $(".create-form").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("newburger").val().trim(),
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

});