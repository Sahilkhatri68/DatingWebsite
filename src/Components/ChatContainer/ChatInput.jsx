import React from 'react'
import { useState } from 'react'
import "./ChatStyles/ChatInput.css"
function ChatInput() {
    const [textarea, setTextarea] = useState(null)
    return (
        <div>
            <div>
                <textarea onChange={(e) => setTextarea(e.target.value)} className="txtarea" style={{ padding: 10 }} placeholder="Do Chat here..." />

            </div>
            <div className='btnsubmitdiv'>
                <button className='submitbtn'>Submit</button>
            </div>
        </div>
    )
}

export default ChatInput