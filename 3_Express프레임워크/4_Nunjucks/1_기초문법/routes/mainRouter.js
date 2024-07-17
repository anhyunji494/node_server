const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // 넉적스 파일을 생성할 때는, render 함수 사용하기!
    res.render("main",{name : "임명진"});
})

module.exports = router;