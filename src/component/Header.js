import React from 'react'
import '../header.css';
import Button from '@material-ui/core/Button'

function Header() {
    return (
        <div className="header">
            <p className="brand-name">Gourmet</p>
            <div className="logIn">
                <Button>Sign up</Button>
                <Button >Log In</Button>
            </div>
        </div>
    )
}

export default Header
