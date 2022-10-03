import './style.css'

function Form({todoList, settodoList}){

    const addTodo = (event) => {
        event.preventDefault()
        console.log(event.target.title.value)
        settodoList([...todoList, {key: todoList.length +1, title: event.target.title.value, content: event.target.content.value, isDone: false }])
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
                <input type="submit" className="button" value="추가하기"></input>
            </form>
        </div>
      </div>
    )
  }

  export default Form