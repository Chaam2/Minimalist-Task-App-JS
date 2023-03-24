const todoForm = document.querySelector('#todo-form')
const todoInput = todoForm.querySelector('input')
const todoList = document.querySelector('#todo-list')
let todos = []

const TODOS_KEY = 'todos'
function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  //로컬스토리지는 only save string->JSON.stringify를 통해 배열을 문자열로 저장
}

const savedTodos = localStorage.getItem(TODOS_KEY) //string으로 리턴

if(savedTodos){ //savedTodo에 값이 있다면 => null이 아니라면
const parsedTodos = JSON.parse(savedTodos) // array로 변환
todos = parsedTodos //새로운 newTodo가 들어와도 빈배열로 초기화 되지 않는다!
parsedTodos.forEach(paintTodo)
}

todoForm.addEventListener('submit',handleTodoSubmit)

function handleTodoSubmit(e){
  e.preventDefault()
  const newTodo = todoInput.value //input값 변수에 저장
  todoInput.value=''//form 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  todos.push(newTodoObj) //input값 todos에 배열로 저장
  saveTodos() //로컬스토리지에 저장
  paintTodo(newTodoObj) //리스트로 만들기
}

function paintTodo(newTodoObj){
  const li = document.createElement('li')
  li.id = newTodoObj.id
  const span = document.createElement('span')//삭제 버튼도 넣을거니까 span태그 추가!
  span.innerText = newTodoObj.text
  const button = document.createElement('button')
  button.innerText="❌"
  button.addEventListener('click',deleteTodo)
  
  li.appendChild(span)//<li><span></span></li>
  li.appendChild(button)
  todoList.appendChild(li) 
}

function deleteTodo(e){
  const li = e.target.parentElement //이벤트가 발생한 버튼의 부모!
  li.remove()//delete 아님 주의...
  todos = todos.filter((todo)=>todo.id !== parseInt(li.id))
  //todos배열에 선택된 li를 제외한 나머지를 새로운 배열로 리턴, **li.id는 string타입이므로 num변경해주기!
  saveTodos() //로컬스토리지에 새로운 배열 저장
}
