$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getbyId(function(err, course){
        if(err) throw err;

        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $courseDropdown = $("#courseDropdown");
        decrypted.forEach(function (id, i) {

            $courseDropdown.append(
            "<select id='course-select'>
            "<option value= "course.id">"+ course.displaytext"</option>"
                "</select>");

            $courseDropdown.on('change',function(){
                SDK.Lectures.getById(function(err, id){
                    if(err) throw err;

                    var decrypted = encryptDecrypt(data);
                    decrypted = JSON.parse(decrypted);


                    var $lecturesTableBody = $("#lecturesTableBody");
                    decrypted.forEach(function (lecture, i) {

                        $lecturesTableBody.append(
                            "<tr>" +
                            "<td>" + lecture.title + "</td>" +
                            "<td>" + lecture.author + "</td>" +
                            "<td>" + lecture.version + "</td>" +
                            "<td>" + lecture.priceAB + "</td>" +
                            "<td>" + user.name + "</td>" +

                            "</tr>");
                    });

                });

            });
            });
        });

    });

});

