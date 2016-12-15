/*function mylittlefunction(review) {
    var review = $(this).data("review");
    console.log(review);

    var $reviewTableBody = $("#reviewTableBody");


    review.forEach(function (review) {

        $reviewTableBody.append(
            "<tr>" +
            "<td>" + review.lectureId + "</td>" +
            "<td>" + review.rating + "</td>" +
            "<td>" + review.comment + "</td>" +
            "<td>" + "<button id='deleteReviewButton" +review.id + "' data-reviewId="+ review.id + ">  Slet review </button>" + "</td>" +

            "</tr>");

    })
};


function count() {
var count = 0;
for(var i = 0; i < $reviewTableBody.length; ++i){
    count++
}

};


      var decrypted = encryptDecrypt(courses);
      decrypted = JSON.parse(decrypted);



    */

function awesomeManlyFunction(inte){
    var inte2 = 2;
    return inte + inte2
}
  //on-pageload funktion
$(document).ready(function () {

    var result = awesomeManlyFunction(3);
    // $('selector').on('click', mylittlefunction());
    //Fires on page-load
    SDK.Course.getById(function (err, courses) {
        if (err) throw err;

         //opretter en dropdown for de kurser der er tilknyttet brugeren
        var $courseDropdown = $("#courseDropdown");
        courses.forEach(function (course) {
            $courseDropdown.append(
                "<button data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>");
        })

              //on click funktion, der fjerner det eksisterende data i tabellen og starter metoden for tableBody
        $courseDropdown.on('click', "button", function () {
            var course = $(this).data("course");
            $("#lecturesTableBody tr").remove();
            SDK.Lectures.getById(course, function (err, data) {
                if (err) throw err;


                var $lecturesTableBody = $("#lecturesTableBody");

                // for-Each funktion som tager dataen på de pågældende lectures, så man på siden kan arrangere dataen korrekt
                data.forEach(function (lecture) {
                    $lecturesTableBody.append(
                        "<tr>" +
                        "<td>" + lecture.id + "</td>" +
                        "<td>" + lecture.description + "</td>" +
                        "<td>" + lecture.startDate + "</td>" +
                        "<td>" + lecture.endDate + "</td>" +
                        "<td>" + "<button id='reviewsModal_" +lecture.id + "' data-lecture="+ lecture.id + ">  Se alle reviews </button>" + "</td>" +
                        "</tr>")


                      //Funktionen knyttet til knappen hvor id= reviewModal_. Åbner en modal med reviews til den pågældende lecture
                    $("#reviewsModal_" + lecture.id).on("click", function(){
                        var lecture = $(this).data("lecture");
                        $("#reviewTableBody tr").remove();
                        $("#reviewsModal").modal();
                        //reviewModal_.close();


                        SDK.Review.getAll(lecture, function (err, data) {
                            if (err) throw err;

                            var $reviewTableBody = $("#reviewTableBody");
                           // var count = 0;

                            data.forEach(function (review) {
                            //count++;
                              /* var btnString;
                                if(SDK.Storage.load(userType) == "teacher" || review.userId == SDK.Storage.load(userId)){
                                    btnString = "<button id='deleteReviewButton" +review.id + "' data-reviewId="+ review.id + ">  Slet review </button>";
                                } else {
                                    btnString = "";
                                }                */
                                $reviewTableBody.append(
                                    "<tr>" +
                                    "<td>" + review.lectureId + "</td>" +
                                    "<td>" + review.rating + "</td>" +
                                    "<td>" + review.comment + "</td>" +
                                   // "<td>" + btnString + "</td>" +
                                    "<td>" +  "</td>" +
                                    "</tr>");



                              //Funktion til at slette reviews. Metoden virker ikke
                                $("#deleteReviewButton" + review.id).on("click", function(){

                                    var reviewId = $(this).data("reviewId");


                                    //Create JSON object
                                    var deleteReview = {
                                        userId: review.userId,
                                        reviewId: review.id
                                    };


                                    //Delete review
                                    SDK.Review.delete(deleteReview, function(err){
                                        if(err) throw err;
                                        //console.log(deleteReview);     //retunerer true, men reviewet er ikke slettet

                                        // $("#createReviewButton").modal("hide");      //bruges til at opdaterer tabel?
                                    });
                                });

                              //  $('#count').append("der er " + count + "reviews");

                            });


                        });
                         //funktion der opretter et review
                        $("#createReviewButton").on("click", function(){

                            //Create JSON object
                            var review = {
                                comment: $("#comment").val(),
                                rating: $("#rating").val(),
                                userId: SDK.Storage.load("userId"),
                                lectureId: lecture

                            };


                            //Create review
                            SDK.Review.create(review, function(err){
                                //mylittlefunction(review); -forsøgte at lave en funktion, som ville opdaterer listen uden at man skulle kører funktionen igen
                                if(err) throw err;

                                // $("#createReviewButton").modal("hide");
                            });
                        });





                    });

                });


            });
        });
                   //log ud funktion
        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "login.html";
        });


    });


});