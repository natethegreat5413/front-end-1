import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Link to='/'>How-To</Link>
            <div>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
        </div>
    )
}

export default NavigationBar