/**
 * Created by Elena on 21/11/2016.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Review.getAll(function(err, data){
        if(err) throw err;

        var decrypted = encryptDecrypt(data);
        decrypted = JSON.parse(decrypted);


        var $reviewsTableBody = $("#reviewsTableBody");
        decrypted.forEach(function (book, i) {

            $reviewsTableBody.append(
                "<tr>" +
                "<td>" + review. + "</td>" +
                "<td>" + review.lectureId + "</td>" +
                "<td>" + review.version + "</td>" +
                "<td>" + review.priceAB + "</td>" +
                "<td>" + book.priceSAXO + "</td>" +
                "<td>" + book.priceCDON + "</td>" +
                "<td>" + book.ISBN + "</td>" +
                "</tr>");
        });

    });
    userId", "lectureId", "rating", "comment","isDele


});

