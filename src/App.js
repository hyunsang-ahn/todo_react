import React, { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};
export default App;
