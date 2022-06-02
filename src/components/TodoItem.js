/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import { useState, useEffect } from 'react';

function TodoItem({item}) {
  const [check, setCheck] = useState(true);
  const handleChange = () => {
    setCheck(!check);
  }
  return (
    <label className="panel-block">
      <input 
        type="checkbox" 
        onChange = {handleChange}
      />
      <div className={check ? "" : "has-text-grey-light" }>{item.text}</div>
    </label>
  );
}

export default TodoItem;