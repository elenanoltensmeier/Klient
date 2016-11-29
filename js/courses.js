$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getById( function(err, courses){
        if(err) throw err;

        /*var decrypted = encryptDecrypt(courses);
        decrypted = JSON.parse(decrypted);
*/

        var $courseDropdown = $("#courseDropdown");
        courses.forEach(function (course) {

         /*   $courseDropdown.append(
            "<button>" + "<ul>" + "<li>" + course.code + "</li>" + "</ul>"+
            "</button>");
        });
        */

        $courseDropdown.append(
           "<button data-course=" + course.name + ">"+ "<li>" + course.code + "</li>" +"</button>");
        //    console.log(course);

        });

            $courseDropdown.on('click',function(){
           // console.log(event);
                SDK.Lectures.getById(function(err, data){
                    if(err) throw err;

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
