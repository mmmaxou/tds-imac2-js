import { h } from 'hyperapp'
import Subject from '../Subject'
export default (props) =>
  <div className='row'>
    <h2>Les matières</h2>
    {
      props.categories.map(
        (category) => {
          const subjects = props.subjects.filter(s => s.categoryID === category.id)
          return <div>
            <h3>{category.name}</h3>
            <div className='row'>
              {
                subjects.map(subject => {
                  const teachers = props.teachers
                    .filter(t => subject.teacherIDs.includes(t.id))
                    .map(t => t.firstname + ' ' + t.lastname)
                    .join(', ')
                  return <Subject
                    teachers={teachers}
                    description={subject.description}
                    semester={subject.semester.join(', ')}
                    hourAmount={subject.hourAmount}
                    title={subject.title}/>
                })
              }
            </div>
          </div>
        }
      )
    }
  </div>
// {id, title, categoryId, hourAmount, semester, description, teacherId}
