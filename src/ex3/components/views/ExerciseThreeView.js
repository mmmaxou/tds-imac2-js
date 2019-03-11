import { h } from 'hyperapp'

export default (state, actions) =>
  h('main', null, [
    h('p', null, [
      '><' + ')^'.repeat(state.fishSize) + ',°>']),
    h('button', {class: 'sub', onclick: actions.decreaseFishSize}, '-'),
    h('button', {class: 'add', onclick: actions.increaseFishSize}, '+')
  ])
