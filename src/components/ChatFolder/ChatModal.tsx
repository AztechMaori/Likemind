import type { Setter } from "solid-js"
import "./chatstyles.css"

interface ChatModalProps {
  members: string[]
  gc_name: string
  SetGcname: Setter<string>
}

//TODO: 
//1 - style the gcname and chatmembers for both mobile and larger screens

export default function ChatModal(props: ChatModalProps) {



  return (
    <div class={(props.gc_name == "") ? "bg-red-200 chat" : "bg-purple-500 chat-mobile  "}>
      <div class="members-box bg-red-400 flex justify-start items-center  text-white font-bold " >
        <button onClick={() => { props.SetGcname("") }} class="back-button justify-center items-center">back</button>
        <div class="display-name bg-black flex justify-start items-center pl-3 overflow-x-auto">
          <span class="mr-2">{props.gc_name}:</span>
          <span >
            {props.members.map(person => {
              return (
                <span class="mr-1">{person},</span>
              )
            })}
          </span>
        </div>

      </div>
      <div class="chat-box bg-blue-500">
        <div class="message-area bg-white overflow-y-scroll"></div>
        <div class="message-input-box bg-sky-400 flex justify-center items-center">
          <div class="p-2 rounded-full message-input border border-white flex" >
            <div class="bg-red-200 emoji"></div>
            <input class="input" />
            <div class="extra bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div >
  )
}

