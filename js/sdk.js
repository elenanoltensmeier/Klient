var SDK = {

        serverURL: "http://localhost:5030/api",

        request: function (options, cb) {

            //Perform XHR
            $.ajax({
                url: SDK.serverURL + options.url,
                method: options.method,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(options.data),
                success: function (data, status, xhr) {
                    cb(null, data, status, xhr);
                },
                error: function (xhr, status, errorThrown) {
                    cb({xhr: xhr, status: status, error: errorThrown});
                }
            });
        },

        Book: {
            getAll: function (cb) {
                SDK.request({method: "GET",
                    url: "/book",
                    headers: {filter: {include: ["authors", "publisher"]}}},
                    cb);

            },
            create: function (data, cb) {
                SDK.request({
                    method: "POST",
                    url: "/book",
                    data: data,
                    headers: {authorization: SDK.Storage.load("tokenId")}
                }, cb);
            }
        },

        Review: {
            getAll: function (cb) {
                SDK.request({
                    method: "GET",
                    url: "/review",
                    headers: {filter: {include: ["userId", "lectureId", "rating", "comment", "isDeleted"]}}
                }, cb);
            },
            create: function (data, cb) {
                SDK.request({
                    method: "POST",
                    url: "/review",
                    data: data,
                    headers: {authorization: SDK.Storage.load("tokenId")}
                }, cb);
            }
        },
        current: function () {
            return SDK.Storage.load("user");
        },

        Lectures: {
            getById: function (id, cb) {
                SDK.request({
                    method: "GET",
                    url: "/lecture/" + id
                    //headers: {filter: {include: ["data-course"]}}
                }, cb);
            }
        },

        Course: {
            getById: function (cb) {
                /*this.request({
                    data:{
                        method: "GET",
                        url: "/course/" + SDK.Storage.load("tokenId"),
                   }},

                    function (err, data) {
                        //On login-error
                        if (err) return cb(err);

                        SDK.Storage.persist("courses", data.name);


                        cb(null, data);
                        console.log(data)

                    });*/

                $.ajax({
                    url: SDK.serverURL + "/course/" + SDK.Storage.load("tokenId"),
                    method: "GET",
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        //SDK.Storage.persist("courses", data);
                        cb(null,data)
                    }
                });

            }
        },

        User: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/staffs"}, cb);
            }
            ,
            current: function () {
                return SDK.Storage.load("user");
            }
        }
        ,

        Publisher: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/publishers"}, cb);
            }
        }
        ,

        Author: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/authors"}, cb);
            }
        }
        ,

        logOut: function () {
            SDK.Storage.remove("tokenId");
            SDK.Storage.remove("type");
            SDK.Storage.remove("courseIds");

        }
        ,

        login: function (cbsMail, password, cb) {
            this.request({
                data: {
                    cbsMail: cbsMail,
                    password: password
                },
                url: "/login", //det endpoint
                method: "POST"
            }, function (err, data) {

                //On login-error
                if (err) return cb(err);

                SDK.Storage.persist("tokenId", data.id);
                SDK.Storage.persist("type", data.type);


                cb(null, data);

            });

        }
        ,

        Storage: {
            prefix: "BookStoreSDK",
            persist: function (key, value) {
                window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
            }

            ,
            load: function (key) {
                var val = window.localStorage.getItem(this.prefix + key);
                try {
                    return JSON.parse(val);
                }
                catch (e) {
                    return val;
                }
            }
            ,
            remove: function (key) {
                window.localStorage.removeItem(this.prefix + key);
            }
        }


    }
    ;
function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}