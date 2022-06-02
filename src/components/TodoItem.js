/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import { useState, useEffect } from 'react';

function TodoItem({item, onClickBox}) {
  const [check, setCheck] = useState(true);
  const onclick = (key) => {
    setCheck(!check);
    onClickBox(key);
  }
  return (
    <label className="panel-block">
      <input 
        type="checkbox" 
        onClick={() => onclick(item.key)}
      />
      <div className={check ? "" : "has-text-grey-light" }>{item.text}</div>
    </label>
  );
}

export default TodoItem;