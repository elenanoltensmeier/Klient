var SDK = {

        serverURL: "http://localhost:5044/api",

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

        Review: {
            getAll: function (id, cb) {
                SDK.request({
                    method: "GET",
                    url: "/student/review/" + id
                }, cb);
            },
            create: function (data, cb) {
                SDK.request({
                    method: "POST",
                    url: "/student/review/",
                    data: data
                }, cb);
            },
            delete: function (data, cb) {
                SDK.request({
                    method: "DELETE",
                    url: "/student/deletereview/",
                    data: data
                }, cb);
            }
        },

         current: function () {
             return SDK.Storage.load("reviewId");
         },

        Lectures: {
            getById: function (id, cb) {
                SDK.request({
                    method: "GET",
                    url: "/lecture/" + id
                }, cb);
            }
        },

        Course: {
            getById: function (cb) {
                $.ajax({
                    url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
                    method: "GET",
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                      //  SDK.Storage.persist("courses", data.setDisplaytext);
                        cb(null,data)
                    }
                });

            }
        },



        logOut: function () {
            SDK.Storage.remove("userId");
            SDK.Storage.remove("type");

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

                SDK.Storage.persist("userId", data.id);
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