import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [tab,setTab] = useState("すべて");
  const itemTab = () => {
      const tabItem = items.filter((item) => {
          if (tab === "すべて")
              return item;
          if (tab === "未完了" && !item.done) {
              return item;
          }
          if (tab === "完了済み" && item.done) {
              return item;
          }
      });
      return tabItem;
  };
  const handleChangeTab = (target) =>{
      setTab(target);
  };
  const onClickBox = (key) => {
    items.map(item => {
      if(item.key === key) {
        item.done = !item.done;
      }
    });
    putItems([...items]);
  }

  const todo = itemTab().map(item => (
    <TodoItem 
         key={item.key}
         item={item}
         onClickBox={onClickBox}
    />
  ));

  
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const onAddTodo = (event) => {
    if(event.key === "Enter") {
      putItems(items => [...items, { key: getKey(), text: event.target.value, done: false }]);
      setInputValue("");
    }
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <input
        className = "input"
        type = "text"
        value = {inputValue}
        onChange = {handleChange}
        onKeyDown = {onAddTodo}
        placeholder = "Enter new to do"
      />
      <Filter onClick={handleChangeTab}/>
      {todo}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;