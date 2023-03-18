import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider'
import config from './config'
import MessageParser from './MessageParser'


const ChatBot = () => {
  return (
    <>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
    </>
  )
}

export default ChatBot