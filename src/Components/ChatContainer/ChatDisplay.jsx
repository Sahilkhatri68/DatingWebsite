import React from 'react'
import Chat from './Chat'
import ChatInput from './ChatInput'
import "./ChatStyles/ChatDisplay.css"
function ChatDisplay() {
  return (
    <>
      <div className='chatdisplaydiv'>
        <div><Chat /></div>
        <div><ChatInput /></div>
      </div>
    </>
  )
}

export default ChatDisplay