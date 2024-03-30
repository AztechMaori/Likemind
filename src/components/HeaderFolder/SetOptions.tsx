import type { Setter } from "solid-js/types/server/reactive.js";
import "./button.css"

interface SetOptionsProps {
  setStage: Setter<number>
}

export default function SetOptions(props: SetOptionsProps) {
  return (
    <>

      <div class="col-span-2 row-span-6">Options</div>
      <button onClick={() => { props.setStage(1) }} class="col-span-2 row-span-1 rounded-b bg-purple-300 flex justify-center items-center button hover:bg-black hover:text-blue-500 duration-500">Done?</button>
    </>
  )

}
