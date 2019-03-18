import { h } from 'hyperapp'
import Teacher from '../Teacher'
export default (props) =>
  <div className='row'>
    <h1>Liste des professeurs</h1>
    {
      props.teachers.map(teacher => {
        const formatedSubject = props.subjects.filter(s => {
          return teacher.subjects.includes(s.id)
        })
        return <Teacher id={teacher.id}
          firstname={teacher.firstname}
          lastname={teacher.lastname}
          url={teacher.url}
          subjects={formatedSubject}/>
      })
    }
  </div>
// url, firstname, lastname, subjects
