import type { SetStoreFunction } from "solid-js/store"
import { type MemberData } from "./GroupTypes"



interface SearchedUserProps {
  MemberData: MemberData[]
  setConfirmedUsers: SetStoreFunction<MemberData[]>
  ConfirmedUsers: MemberData[]
}

export default function SearchedUser(props: SearchedUserProps) {
  return (
    <>
      <div class=" w-full bg-orange-500 flex flex-col  justify-center ">
        {props.MemberData.map((item) => {
          return (
            <>

              <div class="border bg-black rounded-lg mt-2 mb-2 mr-2 ml-2 p-2 h-20  ">
                <div class=" grid grid-cols-3 grid-rows-2">
                  <div class="col-span-1 row-span-2  flex   justify-center items-center ">pic</div>
                  <div class="col-span-2 row-span-1 flex justify-center font-bold">{item.username.toUpperCase()}</div>
                  <div class=" col-span-2 row-span-1 flex justify-center bg-black rounded-lg gap-1">
                    <button class="font-bold p-1  rounded-lg bg-blue-500">details</button>
                    <button class="font-bold p-1 rounded-lg bg-emerald-500" onClick={() => confirm_user(props.setConfirmedUsers, props.ConfirmedUsers, item)}>confirm</button>


                  </div>
                </div>
              </div >


            </>
          )
        })}

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
