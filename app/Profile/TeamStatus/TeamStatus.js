import React from 'react'
import "./TeamStatus.css"

export const TeamStatus = () => {
    return (
        <div className="TeamStatus">
            <div className='heading'>Teams Status:</div>
            <div className='event d-flex justify-content-between row w-100 mb-5'>
                    <img src="/arrow.png" className='mr-5' />
                    <div className='title d-flex flex-column'>
                        <div>Event Name:</div>
                        <div>M2M93RM39MR9393JR9</div>
                        <div>(3/5)</div>
                    </div>
                    <div className='names d-flex flex-column'>
                        <div>Nikhil Kumar joined...</div>
                        <div>Gitansh joined...</div>
                        <div>Prashant joined...</div>
                    </div>
            </div>
            <div className='event d-flex justify-content-between row w-100 mb-5'>
                    <img src="/arrow.png" className='mr-5' />
                    <div className='title d-flex flex-column'>
                        <div>Event Name:</div>
                        <div>M2M93RM39MR9393JR9</div>
                        <div>(3/5)</div>
                    </div>
                    <div className='names d-flex flex-column'>
                        <div>Nikhil Kumar joined...</div>
                        <div>Gitansh joined...</div>
                        <div>Prashant joined...</div>
                    </div>
            </div>
        </div>
    )
}
