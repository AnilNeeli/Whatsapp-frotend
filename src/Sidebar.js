import React from 'react'
import "./sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons"
import {Avatar,IconButton} from "@material-ui/core"
import Sidebarchart from "./Sidebarchart"
function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="https://avatars0.githubusercontent.com/u/60547220?s=60&v=4"></Avatar>
                <div className="sidebar_headerright">
                    <IconButton>
                        <DonutLargeIcon>
                        </DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon>
                        </ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon>
                        </MoreVertIcon>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcontainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chart" type="text"></input>

                </div>
            </div>
            <div className="sidebar_chart">
                <Sidebarchart/>
                <Sidebarchart/>
                <Sidebarchart/>
            </div>
        </div>
    )
}

export default Sidebar
