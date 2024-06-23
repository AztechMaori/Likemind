import { createSignal } from "solid-js"
import Headbar from "../HeaderFolder/Headbar"
import ChatModal from "./ChatModal"
import PeopleList from "./PeopleList"
import { createStore } from "solid-js/store"
import "./chatstyles.css"
import "./chattypes"


export default function ChatWrapper() {
  const [group, SetGroup] = createStore<string[]>([])
  const [gcname, SetGcname] = createSignal("")
  const people = [,]

  const chat1: Chat = {
    name: "Brown Government",
    members: ["Ash", "Dhyan", "Dani"]
  }

  const chat2: Chat = {
    name: "Italia-Mafia",
    members: ["Vince", "Keegan", "Tom", "Cameron", "Angad"]
  }

  const chats = [chat1, chat2]


  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black">
      <div class="w-full h-full bg-red-200">
        <div class="header-sizing">
          <Headbar authenticated={true} />
        </div>
        <div class="main-sizing bg-blue-500 flex">
          <PeopleList chats={chats} setGroup={SetGroup} setGcname={SetGcname} />
          <ChatModal gc_name={gcname()} members={group} />
        </div>
      </div>
    </div >
  )
}
