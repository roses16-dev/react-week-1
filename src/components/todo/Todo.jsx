import './style.css'

function Todo({todoList, f_action}){
    return (
      <div className="card">
        <div className="cardContent">
            <p className="title">
              {todoList.title}
            </p>
            <p className="subtitle">
              {todoList.content}
            </p>
            <div className="buttonbox">
              <button className="button is-danger is-light" onClick={() => f_action(todoList.key, 'delete')}>삭제하기</button>
              <button className="button is-primary is-light"onClick={() => f_action(todoList.key, 'toggle')}>{todoList.isDone ? "취소" : "완료"}</button>
            </div>
          </div>
    </div>
    )
  }

  export default Todo