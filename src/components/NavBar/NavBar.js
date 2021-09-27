import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'


export default function NavBar() {
 return (
    <div>
        <nav className="App-header">
           <Link to="/">React Github Issues</Link>
        </nav>
    </div>
 )}