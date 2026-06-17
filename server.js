var express = require("express");
var server = express();

var bodyparser = require("body-parser");
server.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
server.use(bodyparser.json({ limit: "100mb" }));

server.use(express.static(__dirname + "/public"));

var DB = require("nedb-promises");
var Games = new DB({ filename: "game.db", autoload: true });

server.get("/", (req, res) => {
    res.send("Home page");
});

// GDevelop 用 GET 上傳成績
server.get("/hiscore", async (req, res) => {
    try {
        console.log(req.query);

        await Games.insert({
            name: req.query.name || "玩家",
            clearTime: Number(req.query.clearTime || req.query.score || 0),
            createdAt: new Date()
        });

        res.send("OK");
    } catch (err) {
        console.log(err);
        res.status(500).send("ERROR");
    }
});

// 查詢排行榜
server.get("/ranking", async (req, res) => {
    try {

        var data = await Games.find({})
            .sort({ clearTime: 1 });

        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).send("ERROR");
    }
});

server.listen(80, () => {
    console.log("Server running on port 80");
});