import { toggleDrawer } from './modules/toggleDrawer'
import { toggleTheme } from './modules/toggleTheme'
import AOS from 'aos'
import 'aos/dist/aos.css'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'
  AOS.init()
  toggleDrawer({
    drawerSelector: '#my-drawer',
    drawerLinkSelector: '.drawer-link',
    parentSelector: '#parent-list'
  })
  toggleTheme({
    toggleSelector: '#toggle-theme',
    lightTheme: 'bumblebee',
    darkTheme: 'luxury'
  })
})
