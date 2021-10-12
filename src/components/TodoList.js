// todo 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 이용해 여러개의 TodoListItem 컴포넌트로 변환해 보여줌
import React from 'react';
import TodoListItem from './TodoListIetm';
import './TodoList.scss';

const TodoList = ({todos, onRemove}) => {
  return(
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default TodoList;