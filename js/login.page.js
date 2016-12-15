/**
 * Jespers Bruun Hansens loginfunktion fra Distribuerede-Systemer-2016/javascript-client.
 */
$(document).ready(function () {

  //log ud funktion
  $("#logOutLink").on("click", function(){
    SDK.logOut();
    window.location.href = "login.html";
  });


  $("#loginButton").on("click", function(e){
    e.preventDefault();
 // variablerne skrives ind på Html siden og gemmes i varablerne email og pw
    var email = $("#inputEmail").val();
    var pw = $("#inputPassword").val();
    console.log("Den når hertil");

    //Henter metoden i SDK klassen og sætter variablerne email og pw
    SDK.login(email, pw, function(err, data){

      //funktion hvis brugernavn og adgangskode ikke matcher
      if(err) {
        console.log(fejl);
        return $("#loginForm").find(".form-group").addClass("has-error");
      }


      //Login var en succes
      $("#loginForm").find(".form-group").addClass("has-success");

      window.location.href = "lectures.html";

    });
  });

});


