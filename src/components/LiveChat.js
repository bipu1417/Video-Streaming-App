import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateNames } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);
    
    useEffect(() => {
        const i = setInterval(() => {
            // console.log("PAI polling");

            dispatch(addMessage({
                name: generateNames(),
                message: generateNames()+" "+generateNames()+" "+generateNames(),
                // message: makeRandomMsg(3)+" "+makeRandomMsg(3)+" "+makeRandomMsg(6),
            }));
        },1500);

        return () => clearInterval(i);

    },[]);

  return (
    <>
    <div className='ml-2 p-2 w-full h-[500px] border border-blue-700 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
    </div>
    <form className='w-full p-2 ml-2 border border-black'
    onSubmit={(e) => {
        e.preventDefault();
        console.log("Form Submit"+ liveMessage);
        dispatch(addMessage({
            name: "Biplab Mahato",
            message: liveMessage,
        }));
        setLiveMessage("");
    }}
    >
        <input className='w-86 px-2' type='text' value={liveMessage} onChange={(e) => {
            setLiveMessage(e.target.value)
        }}></input>
        <button className='px-2 mx-2 bg-green-400'>Send</button>
    </form>
    </>
  )
}

export default LiveChat