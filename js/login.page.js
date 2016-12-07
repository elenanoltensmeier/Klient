
$(document).ready(function () {

  $("#logOutLink").on("click", function(){
    SDK.logOut();
    window.location.href = "login.html";
  });


  $("#loginButton").on("click", function(e){
    e.preventDefault();

    var email = $("#inputEmail").val();
    var pw = $("#inputPassword").val();

    SDK.login(email, pw, function(err, data){

      //On wrong credentials
      if(err) {
        debugger;
        return $("#loginForm").find(".form-group").addClass("has-error");
      }

      debugger;
      //Login OK!
      $("#loginForm").find(".form-group").addClass("has-success");

      window.location.href = "lectures.html";

    });
  });

});


