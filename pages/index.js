import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;

const Home = () => {
  const [input, setInput] = useState('')
  const [inputa, setInputa] = useState();


useEffect(() => {
  
  socketInitializer();
},[])



 


const socketInitializer = () => {
    fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')





      socket.on('schange', msg => {
        setInputa(msg);
      })


    })
 


    }
 

const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }



  return (
  <>

   <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />


{inputa}
  
  </> 
  )
}

export default Home;