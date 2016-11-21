/**
 * Created by Elena on 21/11/2016.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Course.getbyId(function(err, data){
        if(err) throw err;

        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $booksTableBody = $("#booksTableBody");
        decrypted.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + course.id + "</td>" +
                "<td>" + course.code + "</td>" +
                "<td>" + course.name + "</td>" +
                "<td>" + course.studyId + "</td>" +
                "</tr>");
        });

    });

});

