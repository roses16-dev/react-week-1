import './style.css'

// 새로운 Todo 입력 받는 Component
function Form({todoList, settodoList}){

    // 새로운 Todo 입력 및 Form에 남아있는 Value 값을 초기화 시키는 함수
    let nextKey = todoList[todoList.length-1].key +1
    console.log(nextKey)
    const addTodo = (event) => {
        event.preventDefault()
        settodoList([...todoList, {key: nextKey, title: event.target.title.value || 'notitle', content: event.target.content.value || 'nocontent', isDone: false }])
        event.target.title.value = ""
        event.target.content.value = ""
    }

    return (
      <div className="inputSection">
        <div className="inputBox">
            <form onSubmit={addTodo}>
                <label>제목</label>
                <input className="input is-warning resize" type="text" name="title"></input>
                <label>내용</label>
                <input className="input is-warning resize" type="text" name="content"></input>
                <input type="submit" className="button is-warning" value="추가하기"></input>
            </form>
        </div>
      </div>
    )
  }

  export default Form