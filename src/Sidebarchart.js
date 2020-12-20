import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarchat.css"

function Sidebarchart() {
    return (
        <div className="sidebarchart">
                <Avatar></Avatar>
            <div className="sidebarchart_info">
                <h2>Room 1</h2>
                <p>The last message in the chat</p>
            </div>
        </div>
    )
}

export default Sidebarchart
