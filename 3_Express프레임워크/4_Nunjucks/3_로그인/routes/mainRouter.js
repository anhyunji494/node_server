const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("main")
})

// 로그인을 요청했을 때!
router.post("/login",(req,res)=>{
    // 사용자가 입력한 id가 smhrd 이고, pw가 1234 라면 -> 성공페이지 
    // 그게 아니라면 실패페이지 돌려주세요!
    let {id,pw} = req.body;
    console.log(id)
    if(id =="smhrd" && pw == "1234" ){
        res.render("success",{id : id})
    }else{
        res.render("fail")
    }
})
module.exports = router;