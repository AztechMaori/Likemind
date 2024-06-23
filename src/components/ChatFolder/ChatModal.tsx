import "./chatstyles.css"

interface ChatModalProps {
  members: string[]
  gc_name: string
}

//TODO: change the styling of the members to have each person seperated by a comma
//2 - implement responsive css which makes the chat take up the screen for mobile devices, (create a state which when toggled only activates a style found in a media query)
// this state should also toggle an optional div - found in the ChatModal component below - to go back to list-people.

export default function ChatModal(props: ChatModalProps) {
  return (
    <div class="chat bg-red-200">
      <div class="members-box bg-black flex justify-start items-center pl-4 text-white font-bold border border-black border-l-white " >
        {props.gc_name}:
        {props.members.map(people => {
          return <span class="m-1">{people}</span>
        })}
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

