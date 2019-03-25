import { h } from 'hyperapp'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default (state, actions) =>
  <div className='container'>
    <div className='row'>
      <TodoList
        deleteTodo={actions.deleteTodo}
        todoList={state.todoList}/>
      <AddTodo
        addTodo={actions.addTodo}
        logEvent={actions.logEvent}
        setInput={actions.setInput}
        todoList={state.todoList}/>
    </div>
  </div>
