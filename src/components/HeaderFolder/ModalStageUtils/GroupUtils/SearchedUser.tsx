import type { SetStoreFunction } from "solid-js/store"
import { type MemberData } from "./GroupTypes"
import "../../button.css"


interface SearchedUserProps {
  MemberData: MemberData[]
  setConfirmedUsers: SetStoreFunction<MemberData[]>
  ConfirmedUsers: MemberData[]
  loading: boolean
}

export default function SearchedUser(props: SearchedUserProps) {
  return (
    <>
      <div class=" w-full bg-orange-500 flex flex-col  justify-center ">
        {props.MemberData === null ? (<div class="pt-5 font-bold text-blue-500">loading...</div>) : (null)}

        {
          props.MemberData.map((item) => {
            return (
              <>

                <div class="border bg-black rounded-lg flex mt-2 mb-2 mr-2 ml-2 p-2 h-20  ">
                  <div class="avatar-sizing flex justify-center h-full bg-red-500">
                    <section class="font-bold">Avatar</section>
                  </div>
                  <div class="body-sizing h-full flex flex-col bg-black">
                    <div class="w-full flex justify-center h-1/2 bg-black">
                      <h2 class="font-bold text-white">{item.username.toUpperCase()}</h2>
                    </div>
                    <div class="w-full h-1/2 flex gap-2 justify-center bg-black">
                      <button class=" w-20 rounded-full bg-pink-500 hover:bg-emerald-500 duration-300">Traits</button>
                      <button class="text-white w-20 rounded-full bg-blue-300 hover:bg-emerald-500 duration-300" onClick={() => { confirm_user(props.setConfirmedUsers, props.ConfirmedUsers, item) }}>Select</button>
                    </div>
                  </div>
                  <div class="availability h-full flex flex-col bg-yellow-50">
                    <div class="w-full h-1/3 bg-blue-300"></div>
                    <div class="w-full h-1/3 bg-yellow-500"></div>
                    <div class="w-full h-1/3 bg-red-600"></div>
                  </div>

                </div >


              </>
            )
          })
        }

      </div >
    </>
  )
}

function confirm_user(setConfirmedUsers: SetStoreFunction<MemberData[]>, ConfirmedUsers: MemberData[], entry: MemberData) {
  if (ConfirmedUsers.some(item => item.id === entry.id)) {
    console.log(`${entry.username} has already been confirmed`)
  }
  else {
    setConfirmedUsers((prevdata) => [...prevdata, entry])





  }



}
