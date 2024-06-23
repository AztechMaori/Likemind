import type { SetStoreFunction } from "solid-js/store"
import "./chatstyles.css"
import "./chattypes"
import type { Setter } from "solid-js"
import "./chatutils"
import { change_groupchat } from "./chatutils"

interface PeopleListProps {
  chats: Chat[],
  setGroup: SetStoreFunction<string[]>
  setGcname: Setter<string>
}

export default function PeopleList(props: PeopleListProps) {


  return (
    <div class="people bg-black flex flex-col">
      <div class="username-box bg-black username-position" ><span class="flex font-bold username justify-center items-center bg-black text-white pt-1 pb-1 pl-3 pr-3  rounded-lg border border-white">trent_fraser</span></div>
      <div class="people-list flex flex-col items-center gap-3 bg-orange-500 overflow-y-auto pt-2 pb-2">
        {props.chats.map(value => {
          return (
            <PeopleItem SetGcname={props.setGcname} SetGroup={props.setGroup} chat_members={value.members} gcname={value.name} />
          )
        })}


      </div>
    </div>
  )
}


interface PeopleItemProps {
  chat_members: string[]
  gcname: string
  SetGcname: Setter<string>
  SetGroup: SetStoreFunction<string[]>
}

function PeopleItem(props: PeopleItemProps) {
  return (
    <button onClick={() => change_groupchat(props.SetGcname, props.SetGroup, props.chat_members, props.gcname)} class="people-item-box bg-black text-white flex justify-center items-center p-2 rounded-lg border border-white hover:text-red-500 duration-300" >
      {props.gcname}
      {
        props.chat_members.map(people => {
          return <div class=" m-2">{people}</div>
        })
      }
    </button >
  )
}
