import type { Setter } from "solid-js/types/server/reactive.js"
import "./button.css"
import type { Accessor } from "solid-js"

interface CreateDescriptionProps {
  setStage: Setter<number>
  setDescription: Setter<string>
  Description: Accessor<string>
}








export default function CreateDescription(props: CreateDescriptionProps) {
  return (
    <>
      <div class="h-full w-full bg-black flex flex-col items-center custom-scrollbar">
        <h1 class="w-4/5 h-1/6 bg-black flex justify-center items-center text-blue-500 hover:text-yellow-500 duration-500 font-bold text-2xl ">Enter A Description </h1>
        <div class="w-full h-4/6 bg-black flex justify-center items-center">
          <textarea value={props.Description()} onInput={(e) => { props.setDescription(e.target.value) }} class=" w-3/4 h-full  rounded-lg pl-2 overflow-auto text-black" placeholder="150 words max"></textarea>
        </div >
        <button onClick={() => { props.setStage(1) }} class="w-full h-1/6 bg-black text-white font-bold hover:text-blue-500 duration-500">Done...?</button>
      </div >

    </>
  )
}


