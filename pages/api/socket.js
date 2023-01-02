import { Server } from 'Socket.IO'

const Handler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {    
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {


      socket.on('connected', ids => {
        socket.join(ids);        
      })
      
      socket.on('input-change', msg => {
        socket.emit('schange', msg);
      })

    })

  }
  res.end()

}

export default Handler