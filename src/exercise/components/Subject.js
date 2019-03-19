import { h } from 'hyperapp'
export default (props) =>
  <div className='col-xs-12 col-sm-6 col-lg-4'>
    <div className='well'>
      <h4>{props.title} ( {props.hourAmount}h )</h4>
      <p>Aux semestres {props.semester}</p>
      <p>{props.description}</p>
      <p>Enseigné par <strong>{props.teachers}</strong></p>
      {console.log(props.teachers)}
    </div>
  </div>
// {id, title, category, hourAmount, semester, description, teacherId}
