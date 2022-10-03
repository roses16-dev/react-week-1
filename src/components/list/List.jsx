import './style.css'

import Todo from '../todo/Todo.jsx'

function List({todoList, settodoList}){
    
    const f_action = (key, action) => {
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
            <h4 className="title is-4">Working</h4>
            <div className="listBox">{todoList.filter(e => !e.isDone).map((todoList) => <Todo todoList={todoList} f_action={f_action} key={todoList.key}/>)}</div>
            <h4 className="title is-4">Done</h4>
            <div className="listBox">{todoList.filter(e => e.isDone).map((todoList) => <Todo todoList={todoList} f_action={f_action} key={todoList.key}/>)}</div>
        </div>   
    )
  }

export default List
