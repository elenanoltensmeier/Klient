$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getbyId( function(err, courses){
        if(err) throw err;

        var decrypted = encryptDecrypt(courses);
        decrypted = JSON.parse(decrypted);



        var $courseDropdown = $("#courseDropdown");
        decrypted.forEach(function (course, i) {

            $courseDropdown.append(
            "<button>" + "<ul>" + "<li>" + course.code + "</li>" + "</ul>"+
            "</button>");
        });


            $courseDropdown.on('change',function(){
                SDK.Lectures.getById(function(err, id){
                    if(err) throw err;

                    var decrypted = encryptDecrypt(data);
                    decrypted = JSON.parse(decrypted);


                    var $lecturesTableBody = $("#lecturesTableBody");
                    decrypted.forEach(function (lecture, i) {

                        $lecturesTableBody.append(
                            "<tr>" +
                            "<td>" + lecture.description + "</td>" +
                            "<td>" + lecture.start + "</td>" +
                            "<td>" + lecture.version + "</td>" +
                            "<td>" + lecture.priceAB + "</td>" +
                            "<td>" + user.name + "</td>" +

                            "</tr>");
                    });

                });
            });


        });
});
