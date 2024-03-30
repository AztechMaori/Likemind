import type { MemberData } from "./GroupTypes"
import "../../button.css"
import type { SetStoreFunction } from "solid-js/store"
interface FinalisedUserProps {
  ConfirmedUser: MemberData[]
  setConfirmedUsers: SetStoreFunction<MemberData[]>
}

export default function FinalisedUser(props: FinalisedUserProps) {
  return (
    <div class="w-full h-full flex flex-wrap justify-evenly ">
      {props.ConfirmedUser.map((item) => {
        return (
          <div class="ml-2 relative  min-w-fit mr-2 mt-2 p-2 rounded-lg bg-black min-w-40 w-1/3 h-1/4">
            <div class="h-1/5 w-full bg-black border border-black border-b-white flex ">
              <h1 class="w-full h-full flex items-center pb-1 justify-center bg-black">{item.username.toUpperCase()}</h1>
            </div>
            <button class="remove-user h-5 w-5 flex justify-center items-center absolute bg-red-500 rounded-full" onClick={() => remove_user(props.ConfirmedUser, props.setConfirmedUsers, item)}>X</button>

            <div class="flex min-w-fit justify-start mt-1 w-full h-4/5 gap-1 bg-black">
              <div class=" w-1/2 h-full min-w-fit bg-red-500 flex flex-col items-center overflow-y-auto">
                <h2>Skills</h2>
                <SkillDesign />
                <SkillDesign />
              </div>
              <div class=" w-1/2 min-w-fit bg-black flex flex-col items-center overflow-y-auto">
                <h2>Bio</h2>
              </div>
            </div>
          </div>

        )
      })}
    </div >

  )
}




function SkillDesign() {
  return (
    <div class=" min-w-fit rounded-full mt-1  bg-blue-500 p-1">chemical</div>

  )
}

function remove_user(ConfirmedUsers: MemberData[], setConfirmedUsers: SetStoreFunction<MemberData[]>, entry: MemberData) {
  let new_confirmed_members: MemberData[] = []
  new_confirmed_members = ConfirmedUsers.filter(item => item.id !== entry.id)
  setConfirmedUsers(new_confirmed_members)

}
