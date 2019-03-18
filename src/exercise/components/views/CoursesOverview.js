import { h } from 'hyperapp'
import Header from './Header'
import ListTeacher from './ListTeacher'
import ListSubject from './ListSubject'

export default (state) =>
  <div>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous' />
    <Header />
    <div className='container'>
      <ListTeacher teachers={state.teachers} subjects={state.subjects}/>
      <ListSubject />
    </div>
  </div>
