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
               console.log(course);

        });

        $courseDropdown.on('click', "button", function () {
            var course = $(this).data("course");
            console.log(course)
            // console.log(event);
            SDK.Lectures.getById(course, function (err, data) {
                if (err) throw err;

                console.log(data);

                /* var decrypted = encryptDecrypt(data);
                 decrypted = JSON.parse(decrypted);*/

                var $lecturesTableBody = $("#lecturesTableBody");
                data.forEach(function (lecture) {

                    $lecturesTableBody.append(
                        "<tr>" +
                        "<td>" + lecture.description + "</td>" +
                        "<td>" + lecture.startDate + "</td>" +
                        "<td>" + lecture.endDate + "</td>" +
                        "<td>" + "<button> </button>" + "</td>" +
                        "</tr>");


                });


            });
        });


    });

});
