const uniqueId = () => {
  return 'id-' + Math.random().toString(36).substr(2, 16)
}
const makeTodo = content => ({content, done: false, id: uniqueId()})

export default {
  logEvent: (value) => state => {
    console.log(state)
    console.log(value.name, value.event)
    return state
  },
  setInput: value => state => ({...state, input: {...state.input, value}}),
  addTodo: () => state => {
    const list = [...state.todoList, makeTodo(state.input.value)]
    console.log(list)
    return {...state, todoList: list}
  },
  deleteTodo: id => state => {
    const list = state.todoList.filter(todo => todo.id !== id)
    return {...state, todoList: list}
  }
}
