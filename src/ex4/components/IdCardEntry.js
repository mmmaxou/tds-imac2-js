import { h } from 'hyperapp'

export default ({key, value}) =>
  h('p', null, ['' + key, ' : ', '' + value])
