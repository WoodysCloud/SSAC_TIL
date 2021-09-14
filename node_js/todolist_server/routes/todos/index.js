const express = require("express");
const router = express.Router();

// db 연동
const con = require("../../modules/mysql");

// db 연동 - 전체 데이터 조회
router.get("/", (req, res) => {
  con.query("select * from ssac_todolist", (err, result, fields) => {
    if (err)
      return res.status(400).json({
        message: "조회 실패",
      });

    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  });
});

// db 연동 - 데이터 생성
router.post("/", (req, res) => {
  const { todoContent } = req.body;

  const sql = `insert into ssac_todolist (todoContent, checked) values(?, ?)`; // 기본값 false

  const params = [todoContent, 0]; // 물음표에 들어갈 변수

  con.query(sql, params, (err, result, fields) => {
    // console.log(result);
    // ResultSetHeader {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 5,
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0
    // }
    if (err)
      return res.status(400).json({
        message: "생성 실패",
      });

    res.status(200).json({
      message: "생성 완료",
    });
  });
});

// db 연동 - 데이터 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = `delete from ssac_todolist where id = "${id}"`;

  con.query(sql, (err, result) => {
    if (err)
      return res.status(400).json({
        message: "삭제 실패",
      });

    res.status(200).json({
      message: "삭제 완료",
    });
  });
});

// db 연동 - 데이터 수정
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { todoContent, checked } = req.body;
  const sql = "update ssac_todolist set todoContent=?, checked=? where id=?";
  const params = [todoContent, checked, id];

  con.query(sql, params, (err, result) => {
    if (err)
      return res.status(400).json({
        message: "수정 실패",
      });

    res.status(200).json({
      message: "수정 완료",
    });
  });
});

// server

// let todolistArr = [
//   // 샘플 데이터 추가
//   // {
//   //   id: 0,
//   //   todoContent: "내일 할일"
//   // },
// ];

// // Create
// router.post("/", (req, res) => {
//   const { id, todoContent } = req.body;

//   const todosIdx = todolistArr.findIndex((item) => item.id === id); // item이란 요소를 찾고 그 요소의 index 값 리턴 => 변수 id에 저장
//   if (todosIdx === -1) {
//     // 리스트 없음 - 추가 가능
//     todolistArr.push({ id, todoContent });
//     res.status(200).json({
//       message: "생성이 완료 되었습니다.",
//       data: todolistArr,
//     });
//   } else {
//     res.status(400).json({
//       message: "생성에 실패했습니다.",
//     });
//   }
// });

// // Read
// router.get("/", (req, res) => {
//   todolistArr = [];
//   res.status(200).json({
//     message: "전체 초기화 완료",
//     data: todolistArr,
//   });
// });

// // Update
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { todoContent } = req.body;

//   const todoIdx = todolistArr.findIndex((item) => item.id === Number(id)); // string -> number

//   if (todoIdx === -1) {
//     // 정보 없음
//     res.status(400).json({
//       message: "수정에 실패 했습니다.",
//     });
//   } else {
//     // 정보 존재
//     todolistArr[todoIdx] = { id: Number(id), todoContent };
//     res.status(200).json({
//       messaage: "수정이 완료 되었습니다.",
//       data: todolistArr,
//     });
//   }
// });

// // Delete
// router.delete("/:id", (req, res) => {
//   const { id } = req.params; // string 값으로 받음

//   const todoIdx = todolistArr.findIndex((item) => item.id === Number(id));

//   if (todolistArr[todoIdx] === -1) {
//     // 정보 없음
//     res.status(400).json({
//       message: "삭제에 실패 했습니다.",
//     });
//   } else {
//     // 정보 존재
//     todolistArr.splice([todoIdx], 1);
//     res.status(200).json({
//       message: "삭제가 완료 되었습니다.",
//       data: todolistArr,
//     });
//   }
// });

module.exports = router;
