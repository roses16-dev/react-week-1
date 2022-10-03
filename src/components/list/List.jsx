import './style.css'

import Todo from '../todo/Todo.jsx'

// Todo List를 출력해주는 Component
function List({title, todoList, settodoList}){
    
    function f_action(key, action){
        if(action === 'delete'){
            settodoList(todoList.filter( e => e.key !== key ))
        } else if(action === 'toggle'){
            settodoList(todoList.map( e => {
                if(e.key === key)
                    e.isDone = !e.isDone
                return e
            } ))
        }
    }


    return (
        <div>
            <h4 className="title is-4">{title}</h4>
            <div className="listBox">{todoList.map((todoList) => <Todo todoList={todoList} f_action={f_action} key={todoList.key}/>)}</div>
        </div>   
    )
  }

export default List
