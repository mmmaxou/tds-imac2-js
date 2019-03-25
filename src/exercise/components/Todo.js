import { h } from 'hyperapp'

export default (props) =>
  <div className='card pink lighten-3' data-id={props.id}>
    <div className='card-content'>
      <p>{props.content}</p>
    </div>
    <div className='card-action'>
      <label>
        <input
          type='checkbox'
          checked={props.done} />
        <span className='white-text'>Complete</span>
      </label>
      <a
        onclick={() => props.deleteTodo(props.id)}
        className='waves-effect waves-light btn right'>Delete</a>
    </div>
  </div>
