
import './style.css'
import Header from '../header/Header.jsx'
import Form from  '../form/Form.jsx'
import List from '../list/List.jsx'
import React, { useState } from "react";

// Layout Component
// todoList 객체도 가지고 있음
function Layout() {
    let [todoList, settodoList] = useState([
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
      
    return (
        <div className="layout_section">
            <Header />
            <Form todoList={todoList} settodoList={settodoList} key={todoList.key}/>
            <List title="Working...🎈" todoList={todoList.filter( e => !e.isDone )} settodoList={settodoList} key={todoList.key}/>
            <List title="Done...✨"    todoList={todoList.filter( e => e.isDone )} settodoList={settodoList} key={todoList.key}/>
        </div>
    )
  }

export default Layout;