$(() => {
  $.get("/api/users", (users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });

$("#register-button").click(function(){
       $(".register-form").slideToggle("slow");
    });

$("#login-button").click(function(){
        $(".login-form").slideToggle("slow");
    });


$("#reveal-new-card").click(function(){
     $("#create-card").slideToggle("slow");
    });

$("#create-new-board").click(function(){
    $("#new-board").slideToggle("slow");
     });

$("#comment-box-open").click(function(){
    $("#comment-box").slideToggle("slow");
     });

$("#comments-display").click(function(){
    $(".comment-container").slideToggle("slow");
     });

});