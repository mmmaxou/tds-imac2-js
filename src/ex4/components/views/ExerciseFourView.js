import { h } from 'hyperapp'
import IdCard from '../IdCard'

export default (state) =>
  h('main', null, [
    IdCard({picture: 'URL.jpg', listEntries: state.person})
  ])
