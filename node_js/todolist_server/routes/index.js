var express = require("express");
const con = require("../modules/mysql");
var router = express.Router();

const todosRouter = require("./todos/index");

// createConnection
// router.get("/", (req, res) => {
//   // 단일연결이므로 새로고침하면 error
//   con.connect(); // 연결
//   con.query("select * from ssac_todolist", (error, rows, fields) => {
//     // ssac_todolist table 전체조회
//     if (error) throw error;
//     res.json({
//       data: rows,
//     });
//   });
//   con.end(); // 연결 끊기
// });

// createPool
router.get("/", (req, res) => {
  res.json({
    message: "접속완료 ~!!!",
  });
});

router.use("/todos", todosRouter);

module.exports = router;
