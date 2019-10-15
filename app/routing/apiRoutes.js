
var friendInfo = require("../data/friend.js");


module.exports = function (app) {
    // app.post("/api/userdata", function (req, res) {
    //     console.log(req.body);
    //     userInfo.push(req.body);
    //     console.log("yes post is working");
    //     res.json(req.body)

    // });

    app.get("/api/frienddata", function (req, res) {
        res.json(friendInfo)
    })

    app.post("/api/frienddata",  function (req, res) {
        //res.json(friendInfo)
        console.log(req.body)
        res.json({"backend data": "data"})
    })


};
