/**
 * Created by Elena on 21/11/2016.
 */
$(document).ready(function () {

//Fires on page-load
    SDK.Review.getAll(lecture.id, function (err, data) {
        if (err) throw err;

        //console.log(data);

        /* var decrypted = encryptDecrypt(data);
         decrypted = JSON.parse(decrypted);*/

        var $reviewTableBody = $("#reviewTableBody");
        data.forEach(function (review) {

            $reviewTableBody.append(
                "<tr>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + review.comment + "</td>" +
                "</tr>");

        });


    });


    $("#newReview").on("click", function(){

        //Create JSON object
        var review = {
            comment: $("#comment").val(),
            rating: $("#rating").val(),
            userId:$("#userId").val(SDK.Storage.load("userId")),
            lectureId:$("#lectureId").val(lecture),

        };

        //Create review
        SDK.Review.create(review, function(err, data){
            if(err) throw err;

            $("#createReviewButton").modal("hide");
        });


        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });

    });



});







