import React from 'react'
import './body.css'

export default function Body() {
    return (
        <div className='body-container'>
            <div className="body-text-wrapper">
                <div className='body-company-logo'></div>
                <div className='body-text'>
                    <h1 className='body-colored-were-text'>
                        WE'RE
                    </h1>
                    <div className='body-colored-soon-text'>
                        <h1 className='body-h1-soon'>
                            coming
                        </h1>
                        <h1 className='body-h1-soon'>
                            soon
                        </h1>
                    </div>
                    <p className='body-p-text'>
                        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                    </p>
                    <div className='input-container'>
                        <input className='body-email' type="email" placeholder='Email Address' />
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
