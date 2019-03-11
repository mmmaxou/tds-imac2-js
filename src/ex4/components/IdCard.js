import { h } from 'hyperapp'
import IdCardEntry from './IdCardEntry'

export default (props) => {
  console.log(props)
  return h('div', null, [
    h('img', {src: props.picture}),
    ...Object.entries(props.listEntries)
      .map(([key, value]) => {
        return IdCardEntry({key, value})
      })
  ])
}
