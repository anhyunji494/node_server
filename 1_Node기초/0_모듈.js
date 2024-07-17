/*
    모듈 -> 필요한 기능들을 모아 놓은 조각 -> 파이썬 라이브러리
    내장모듈 -> 기본적으로 설치가 되어있는 모듈
    자체제작모듈 -> 내가 사용하기 편하게 직접 작성해서 활용하는 모듈
    외장모듈 -> 다른 개발자가 만들어논 모듈 설치해서 사용 (npm)
*/

//변수.js에서 num1과 num2를 받아오기!
// 변수.js 파일을 불러오기! -> 모듈을 불러올때는 require("모듈명") 
let {num1,num2} = require("./0_변수.js");

console.log(num1,num2);

// Node를 실행하는 방법
// 1. ctrl + ` -> 실행할 수 있는 터미널창을 실행
// 2. 명령어를 통해서 서버를 실행한다.
// 3. 가장 중요한 점! -> 반드시 코드의 실행 경로를 확인하기
// 명령어
// 1) 현재 폴더안에 존재하는 파일의 리스트 -> ls
// 2) 폴더를 변경하고 싶은 경우 -> cd
// 3) 노드로 파일을 실행 -> node
// 반드시 경로를 확인하고, 명령어를 확인하고, 파일명을 확인하자, 저장을 습관화하자!!! ★