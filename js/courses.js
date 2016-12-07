$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getById(function (err, courses) {
        if (err) throw err;

        /*var decrypted = encryptDecrypt(courses);
         decrypted = JSON.parse(decrypted);
         */

        var $courseDropdown = $("#courseDropdown");
        courses.forEach(function (course) {
            $courseDropdown.append(
                "<button data-course=" + course.displaytext + ">" + "<li>" + course.code + "</li>" + "</button>");
               //console.log(course);

        })

        $courseDropdown.on('click', "button", function () {
            var course = $(this).data("course");
            $("#lecturesTableBody tr").remove();
            SDK.Lectures.getById(course, function (err, data) {
                if (err) throw err;

                //console.log(data);

                /* var decrypted = encryptDecrypt(data);
                 decrypted = JSON.parse(decrypted);*/

                var $lecturesTableBody = $("#lecturesTableBody");
                data.forEach(function (lecture) {


                    $lecturesTableBody.append(
                        "<tr>" +
                        "<td>" + lecture.id + "</td>" +
                        "<td>" + lecture.description + "</td>" +
                        "<td>" + lecture.startDate + "</td>" +
                        "<td>" + lecture.endDate + "</td>" +
                        "<td>" + "<button id='reviewsModal_" +lecture.id + "' data-lecture="+ lecture.id + ">  Se alle reviews </button>" + "</td>" +
                        "</tr>")



                    $("#reviewsModal_" + lecture.id).on("click", function(){
                        var lecture = $(this).data("lecture");
                        $("#reviewTableBody tr").remove();
                       // SDK.Storage.persist("lectureId", lecture.id);
                        //console.log("hall");
                        //window.location.href = "review.html";
                        $("#reviewsModal").modal();
                        //reviewModal_.close();


                        SDK.Review.getAll(lecture, function (err, data) {
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

                        $("#createReviewButton").on("click", function(){

                            //Create JSON object
                            var review = {
                                comment: $("#comment").val(),
                                rating: $("#rating").val(),
                                    userId: SDK.Storage.load("userId"),
                                lectureId: lecture

                            };

                            console.log(review);

                            //Create review
                            SDK.Review.create(review, function(err, review){
                                if(err) throw err;

                               // $("#createReviewButton").modal("hide");
                            });
                        });

                        SDK.Review.delete(review, function(err, review) {
                            if (err) throw err;



                            $("#deleteReviewButton").on("click", function(){

                                //Create JSON object
                                var deleteReview = {
                                    userId: SDK.Storage.load("userId"),
                                    reviewId: review
                                };

                                console.log(deleteReview);

                                //Create review
                                SDK.Review.delete(review, function(err, deleteReview){
                                    if(err) throw err;

                                    // $("#createReviewButton").modal("hide");
                                });
                            });
                    });

                });


            });
        });

        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });


    });

});

});