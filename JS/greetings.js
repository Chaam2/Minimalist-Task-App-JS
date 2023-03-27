const loginForm= document.querySelector("#login-form");
const input=document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
//문자열만 선언할땐 대문자로 사용
const HIDDNE_CLASSNAME="hidden"
const USERNAME_KEY="userName"

function paintGreetings(username){
  greeting.classList.remove(HIDDNE_CLASSNAME);//greeting 노출
  const now = new Date().getHours()
  if(now>=6 && now<=12){
    greeting.innerText=`GOOD MORNING, ${username} :)`;
  }else if(now>=13 && now<=18){
    greeting.innerText=`Good afternoon, ${username} :)`;
  }else{
    greeting.innerText=`GOOD NIGHT, ${username} :)`;
  }
}

function loginSubmit(event){
  event.preventDefault();//새로고침 막기
  loginForm.classList.add(HIDDNE_CLASSNAME);//폼 숨기기
  const userName=input.value;
  localStorage.setItem(USERNAME_KEY,userName);//유저네임 저장(key, value)
  paintGreetings(userName);
}

loginForm.addEventListener('submit',loginSubmit);
const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName===null){
  loginForm.classList.remove(HIDDNE_CLASSNAME);
}else{
  paintGreetings(savedUserName);
}
