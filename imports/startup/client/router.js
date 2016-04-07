import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import { Home } from '../../ui/pages/home.jsx'

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Home)
  }
})
