import { h } from 'hyperapp'
export default (props) => {
  const fullname = props.firstname + ' ' + props.lastname
  return <div className='col-sm-6' key={props.id}>
    <div className='well'>
      <h3 className='title'>
        <p>{fullname}</p>
      </h3>
      <img className='img-responsive' src={props.url} alt={'Photo de ' + fullname} />
      <h4>Ses matières : </h4>
      <ul>
        {props.subjects.map(subject => <li>{subject.title}</li>)}
      </ul>
    </div>
  </div>
}
