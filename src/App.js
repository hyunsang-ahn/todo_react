import React, { useRef, useState, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초를 알아보자',
      checked: true,
    },
    {
      id: 2,
      text: '출근하자',
      checked: true,
    },
    {
      id: 3,
      text: '밥먹자',
      checked: false,
    },
    {
      id: 4,
      text: '놀자',
      checked: false,
    },
    {
      id: 5,
      text: '잠자자',
      checked: true,
    },
    {
      id: 6,
      text: '퇴근하자',
      checked: true,
    },
  ]);
  // 고윳값으로 사용될 아이디임
  // ref를 사용하여 변수담기
  const nextId = useRef(7);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextID에 1씩더해주는 함수임)
    },
    [todos],
  );

  //삭제 기능 추가

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id))
    },
    [todos],
  );



  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
};
export default App;
