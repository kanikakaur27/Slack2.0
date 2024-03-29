import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId, chatRef}) {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = (e) =>{
        e.preventDefault(); //Prevents refresh
        // console.log(chatRef);

        if(!channelId){
            return false;
        }
        
        const collectionRef = collection(db, 'rooms');
        const docRef = doc(db, 'rooms', channelId);
        const db2 = collection(docRef, 'messages');
        addDoc(db2, {
            message: input,
            timestamp : serverTimestamp(),
            user: user.displayName,
            userimage: user.photoURL 
        })
        // console.log(chatRef);
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
        
        setInput("");



    }
  return (
      <ChatInputContainer>
          <form>
              <input 
              onChange={e => setInput(e.target.value)}
              value={input} 
              placeholder={`Message #${channelName}`} />

              <Button hidden type='submit' onClick={sendMessage}>
                  SEND
              </Button>

          </form>
      </ChatInputContainer>

  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`