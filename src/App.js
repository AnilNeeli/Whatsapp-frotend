import './App.css';
import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from "./axios"
function App() { 

  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
      setdata(response.data)
    })
    
    },[]);

  useEffect(()=>{
    let pusher = new Pusher('caa1075b7b0fb8810565', {
      cluster: 'ap2'
    });

    let Channel = pusher.subscribe('messages');
    Channel.bind('inserted', function(newMessages) {
      
      setdata([...data,newMessages])
    });
    return ()=>{
      Channel.unbind_all();
      Channel.unsubscribe();
    }
  },[data])

  return (
    <div className="app">
      <div className="app_body">
     
      <Sidebar/>
      <Chat data={data}/>
      </div>
    
    </div>
  );
}

export default App;
