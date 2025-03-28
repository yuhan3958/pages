function sayhi(i){
  if (i==1) {
    alert('Hi!')
  }
  else if (i==2) {
    alert('아니면 버그거나')
  }
  else {
    alert("뭐야 님 개발자도구 뜯어봤죠")
    sayhi(2)
  }
}