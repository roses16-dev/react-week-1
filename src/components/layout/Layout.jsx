
import './style.css'
import Form from  '../form/Form.jsx'
import List from '../list/List.jsx'
import React, { useState } from "react";

// Layout Component
// todoList 객체도 가지고 있음
function Layout() {
    const [todoList, settodoList] = useState([
        {
            key: 1,
            title:'리액트 공부하기',
            content: '리액트 기초를 공부해봅시다.',
            isDone: false
        }, 
        {
            key: 2,
            title:'과제 해결하기',
            content: '레이아웃고장',
            isDone: true
        }])


    function f_addTodo(todo){
        let nextKey = todoList[todoList.length-1].key +1
        todo.key = nextKey
        settodoList([...todoList, todo])
    }

    // 각 Todo를 삭제하거나, isDone 변수를 토글해주는 함수
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
      <div className="layout_section">
          <Form f_addTodo = {f_addTodo}/>
          <List title="Working...🎈" todoList = {todoList.filter( e => !e.isDone )} f_action={f_action}/>
          <List title="Done...✨"    todoList = {todoList.filter( e => e.isDone )} f_action={f_action}/>
      </div>
  )
  }

export default Layout;