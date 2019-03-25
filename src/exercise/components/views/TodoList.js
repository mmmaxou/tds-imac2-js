import { h } from 'hyperapp'
import Todo from '../Todo'

export default (props) =>
  <div className='col s12 m6 l3'>
    <h5>Todo List</h5>
    {
      props.todoList.map(todo =>
        <Todo
          content={todo.content}
          deleteTodo={props.deleteTodo}
          done={todo.done}
          id={todo.id} />)
    }
  </div>
