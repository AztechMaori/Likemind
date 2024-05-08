import type { Setter } from "solid-js"
import "./button.css"
import { createSignal, type Accessor } from "solid-js"

interface CreateDescriptionProps {
  setStage: Setter<number>
  setDescription: Setter<string>
  Description: Accessor<string>
}








export default function CreateDescription(props: CreateDescriptionProps) {
  return (
    <>
      <div class="h-full w-full bg-black flex flex-col items-center custom-scrollbar">
        <span class="absolute top-0 right-0 h-1/6 w-1/6 flex justify-center items-center ">
          <h1 class="border-2 border-black border-b-white">{200 - props.Description().length}</h1>
        </span>
        <h1 class="w-4/5 h-1/6 bg-black flex justify-center items-center text-blue-500 hover:text-yellow-500 duration-500 font-bold text-2xl ">Enter A Description </h1>
        <div class="w-full h-4/6 bg-black flex justify-center items-center">
          <textarea maxlength="200" value={props.Description()} onInput={(e) => { ChangeDescription(e.target.value, props.setDescription) }} class=" w-3/4 h-full  rounded-lg pl-2 overflow-auto text-black" placeholder="200 characters max"></textarea>
        </div >
        <button onClick={() => { props.setStage(1) }} class="w-full h-1/6 bg-black text-white font-bold hover:text-blue-500 duration-500">Done...?</button>
      </div >

    </>
  )
}


function ChangeDescription(input: string, setDescription: Setter<string>) {
  const text = input;

  setDescription(text.slice(0, 200))
}


