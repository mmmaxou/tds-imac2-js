import { h } from 'hyperapp'

export default (props) =>
  <div className='col s12 m6 l9'>
    <div className='card whtie'>
      <div className='card-content'>
        <h5 className='card-title'> Add a Todo item</h5>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              id='todo_text'
              className='validate'
              oninput={ (e) => {
                props.setInput(e.target.value)
                // props.logEvent({name: 'input', event: e})
              }}/>
            <label for='todo_text'>Todo text</label>
          </div>
        </div>
      </div>
      <div className='card-action white-text'>
        <button
          className='waves-effect waves-light btn'
          onclick={() => props.addTodo('ad')}>Add the TODO</button>
      </div>
    </div>
  </div>
