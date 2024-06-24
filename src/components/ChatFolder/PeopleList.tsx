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
  gcname: string
}

export default function PeopleList(props: PeopleListProps) {


  return (
    <div class={(props.gcname == "") ? "people bg-black flex flex-col" : "people-list-mobile people"}>
      <div class="username-box bg-black username-position gap-4" >
        <span class="flex font-bold username justify-center items-center bg-black text-white pt-1 pb-1 pl-3 pr-3  rounded-lg ">trent_fraser</span>
        <input placeholder="Search Chats..." class="p-1 pl-3 rounded-full w-3/5" />
      </div>
      <div class="people-list flex flex-col items-center gap-3 bg-orange-500 overflow-y-auto pt-2 pb-2">
        {props.chats.map(value => {
          return (
            <PeopleItem SetGcname={props.setGcname} SetGroup={props.setGroup} chat_members={value.members} gcname={value.name} />
          )
        })}


      </div>
    </div >
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
    <button onClick={() => change_groupchat(props.SetGcname, props.SetGroup, props.chat_members, props.gcname)} class="people-item-box bg-black text-white flex justify-center items-center p-2 rounded-lg border border-white pop-on-hover hover:border-2 duration-300" >
      {props.gcname}
      {
        props.chat_members.map(people => {
          return <div class=" m-2">{people}</div>
        })
      }
    </button >
  )
}
