
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AttachFile, InsertEmoticon, SearchOutlined} from "@material-ui/icons"
import {Avatar,IconButton} from "@material-ui/core"
import MicIcon from '@material-ui/icons/Mic';
import React,{useState} from 'react'
import "./chat.css"
import axios from "./axios"

function Chat({data}) {

    const [msg,newmsg]=useState("")
    const sendmsg=async (e)=>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message:msg,
            name:"test",
            timestamp:"just now",
            recieved:false,
        })
        newmsg("")
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chatheader__info">
                    <h3>Room name</h3>
                    <p>Lat seen at.....</p>
                </div>
                <div className="chartHeaderRight">
                <IconButton>
                <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                       <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon>
                        </MoreVertIcon>
                    </IconButton>

                </div>

            </div>
            <div className="chat_body">
                {data.map((message)=>{
                    return (
                <p className={`chat_message ${message.recieved && "chat_receiver"}`}><span className="chat_name">
                    {message.name}</span>{message.message}
                    <span className="chat_Timestamp">{message.timestamp}</span>
                    </p>)})}




                  
                    

            </div>
            <div className="chart__footer">
                <InsertEmoticon/>
                <form>
                    <input value={msg} onChange={(e)=>newmsg(e.target.value)}placeholder="Type a message" type="text"></input>
                    <button onClick={sendmsg} type="submit">send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
