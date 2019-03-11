import { h } from 'hyperapp'

export default () =>
  h('main', {}, [
    h('header', {class: 'ex1__header'}, ['Trying hyperapp']),
    h('section', {}, [
      h('p', {}, ['Hi !']),
      h('p', {}, [
        'Hyperapp is a JS micro framework intended to be ',
        h('em', {}, ['as barebones as possible.'])
      ])
    ])
  ])
