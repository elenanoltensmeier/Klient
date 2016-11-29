$(document).ready(function () {

  //Fires on page-load
  SDK.Lectures.getById(function(err, data){
    if(err) throw err;


    var $booksTableBody = $("#¢");
    data.forEach(function (lecture) {

      $booksTableBody.append(
        "<tr>" +
          "<td>" + lecture.description + "</td>" +
          "<td>" + lecture.startDate + "</td>" +
          "<td>" + lecture.endDate + "</td>" +
        "<td>" + "<button> </button>" + "</td>" +
        "</tr>");
    });

  });

});


/*$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getById( function(err, courses){
        if(err) throw err;

        */

        /*var decrypted = encryptDecrypt(courses);
         decrypted = JSON.parse(decrypted);
         */

   /*     var $courseDropdown = $("#courseDropdown");
        courses.forEach(function (course, i) {

            $courseDropdown.append(
                "<button>" + "<li>" + course.code + "</li>"+
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

                        "</tr>");
                });

            });
        });


    });
});
*/