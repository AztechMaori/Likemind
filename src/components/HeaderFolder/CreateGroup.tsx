import { createSignal, type Setter } from "solid-js/types/server/reactive.js"
import "./button.css"
import Search from "./ModalStageUtils/GroupUtils/Search"
import SearchedUser from "./ModalStageUtils/GroupUtils/SearchedUser"
import { createStore, type SetStoreFunction } from "solid-js/store"
import { type MemberData } from "./ModalStageUtils/GroupUtils/GroupTypes"
import FinalisedUser from "./ModalStageUtils/GroupUtils/FinalisedUser"

interface CreateGroupProps {
  setStage: Setter<number>
  setConfirmedUsers: SetStoreFunction<MemberData[]>
  ConfirmedUsers: MemberData[]
}






export default function CreateGroup(props: CreateGroupProps) {

  const [memberdata, SetMemberData] = createStore<MemberData[]>([]);



  return (
    <>

      <div class="h-full w-full bg-purple-600 grid grid-cols-5 overflow-y-auto  custom-scrollbar ">
        <div class="col-span-2 h-5/6 bg-rose-500 overflow-y-auto w-full overflow-x-visible">
          <Search SetMemberData={SetMemberData} />
          <SearchedUser MemberData={memberdata} setConfirmedUsers={props.setConfirmedUsers} ConfirmedUsers={props.ConfirmedUsers} />
        </div>
        <div class="col-span-3 h-5/6 bg-green-600 overflow-y-auto">
          <FinalisedUser ConfirmedUser={props.ConfirmedUsers} setConfirmedUsers={props.setConfirmedUsers} />
        </div>
        <button onClick={() => { props.setStage(1) }} class=" bg-black col-span-5 row-span-2  font-bold button hover:text-blue-500  duration-500 h-1/6 absolute bottom-0 right-0 left-0">
          Done...?
        </button>
      </div>









    </>

  )
}
