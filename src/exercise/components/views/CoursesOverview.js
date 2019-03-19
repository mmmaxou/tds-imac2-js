import { h } from 'hyperapp'
import Header from './Header'
import ListTeacher from './ListTeacher'
import ListCategories from './ListCategories'

export default (state) =>
  <div>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous' />
    <Header />
    <div className='container'>
      <ListTeacher teachers={state.teachers} subjects={state.subjects}/>
      <ListCategories teachers={state.teachers} categories={state.categories} subjects={state.subjects}/>
    </div>
  </div>
