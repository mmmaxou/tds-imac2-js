import { h } from 'hyperapp'
export default (props) => {
  const fullname = props.firstname + ' ' + props.lastname
  return <div className='col-sm-6' key={props.id}>
    <div className='well'>
      <h4 className='title'>
        <p>{fullname}</p>
        <p>{console.log('props', props)}</p>
      </h4>
      <img className='img-responsive' src={props.url} alt={'Photo de ' + fullname} />
      <h5>Ses matières : </h5>
      <ul>
        {props.subjects.map(subject => <li>{subject.title + '(' + subject.category + ')'}</li>)}
      </ul>
    </div>
  </div>
}
