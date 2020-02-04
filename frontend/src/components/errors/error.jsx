import React from 'react'
import { Link } from 'react-router-dom'


class ErrorPage extends React.Component {

    render() {
        return (
            <div>
                Error Page
                <div>
                    <Link to='/home' className="test">
                        Go home!  
                    </Link>
                </div>
            </div>
        )
    }
}

export default ErrorPage
