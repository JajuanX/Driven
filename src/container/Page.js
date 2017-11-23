import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from '../presentation/Header'
import About from '../presentation/About'
import Business from '../presentation/Business'
import Home from '../presentation/Home'
import ContactUs from '../presentation/contactUs'
import TechDemo from '../presentation/techDemo'
import '../App.css'

const Page = () => {
    return (

        <Router>
          <div>
            <Route path='/' component={Header} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/business' component={Business} />
            <Route path='/techdemo' component={TechDemo} />
            <Route path='/contact' component={ContactUs} />
          </div>
        </Router>

    )
  }

export default Page
