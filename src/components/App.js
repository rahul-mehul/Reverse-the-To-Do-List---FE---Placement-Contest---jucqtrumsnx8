import React, { useState } from 'react'
import '../styles/App.css';

function ToDo(props) {
  const [text, setText] = useState([]);
  return (<tr>
    <td>
      <p>{props.todoId}</p>
    </td>
    <td>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </td>
    <td>
      <p> {props.createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  function reverseHandle() {
    const s = [...todos]
    setTodos(s.reverse());
  }

  return (
    <div id="main">
      <button onClick={reverseHandle}>Reverse</button>
      <table>
        <tbody>
          {todos.map((ele) => <ToDo key={ele.id} todoId={ele.id} createdAt={ele.createdAt} />)}
        </tbody>
      </table>
    </div>
  )
}


export default App;
