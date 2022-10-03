import './style.css'

import Todo from '../todo/Todo.jsx'

// Todo List를 출력해주는 Component
function List({title, todoList, f_action}){
    


    return (
        <div>
            <h4 className="title is-4">{title}</h4>
            <div className="listBox">{todoList.map((todoList) => <Todo todoList={todoList} f_action={f_action} key={todoList.key}/>)}</div>
        </div>   
    )
  }

export default List
