import { createSignal, type Setter } from "solid-js"
import "./MainHomeStyles.css"

interface MainHomeProps {
  SetStage: Setter<number>
}

//TODO: Set up button in top right to go to Scroll-Mode
//TODO: find magnifying glass icon which expands into searchbar

export default function MainHome(props: MainHomeProps) {
  const [search_modal, SetSearchModal] = createSignal(false)
  return (
    <div class="main-sizing bg-red-400">


    </div>
  )
}
