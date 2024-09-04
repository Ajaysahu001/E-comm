import React from 'react'
import { Link } from 'react-router-dom'

export default function Thankyou() {
    return (
        <>
            <div class="jumbotron text-center">
                <h1 class="display-3">Thank You!</h1>
                <hr />
                <p class="lead">
                    <Link to="/" class="btn btn-primary btn-sm">Continue to homepage</Link>
                </p>
            </div>
        </>
    )
}
