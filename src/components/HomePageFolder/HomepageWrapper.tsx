import Headbar from "../HeaderFolder/Headbar.tsx";
import { createSignal } from "solid-js"
import MainHome from "./Home/MainHome.tsx";
import ScrollMode from "./ScrollMode/ScrollMode.tsx";




export default function HomepageWrapper() {
  const [stage, SetStage] = createSignal(1);


  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black">
      <div class="w-full h-full bg-purple-500">
        <div class="header-sizing">
          <Headbar authenticated={true} />
        </div>

        {(stage() == 0) && <MainHome SetStage={SetStage} />}
        {(stage() == 1) && <ScrollMode />}






      </div>
    </div >
  )
}
