// 실시간 시계
function realTime(){
 var today = new Date();
 var year = today.getFullYear();
 var month = today.getMonth(); 
 var dt = today.getDate(); 
 var dw = today.getDay(); //요일
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 
 // 분,초가 10보다 작으면 0을 붙여준다.
 m = addzero(m);
 s = addzero(s);
 
 //월 처리; 자바스크립트에서는 "0" 이 1월이다..
 month = month +1;
 
 //요일처리 
 var dayweek = new Array(7);
 
 dayweek[0] = "일"
 dayweek[1] = "월"
 dayweek[2] = "화"
 dayweek[3] = "수"
 dayweek[4] = "목"
 dayweek[5] = "금"
 dayweek[6] = "토" 
 
 d = dayweek[dw];
 
 // 출력
 var clock = document.getElementById('clock');
 clock.innerHTML = year + '년 ' + month +'월 ' + dt + '일 ' + d + '요일 ' + h +'시 '+ m + '분 ' + s +'초';
 
 // 업데이트 주기(0.5초)
 setTimeout(function(){
     realTime();
     },500);
}
function addzero(i){ // 분,초가 10보다 작으면 0을 붙여준다.
 if(i<10){
  i = "0" + i;
 }
 
 return i;
}