import React from 'react'
import { mount } from 'react-mounter'
import { Home } from './components/areas/home.jsx'

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Home)
  }
})
