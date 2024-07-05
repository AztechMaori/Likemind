
import { createSignal, type Setter } from "solid-js"
import { ProjectType, type Filter } from "../AlgoUtils"
import "./SearchModalStyles.css"
import FetchedItem from "./FetchedItem"

interface SearchModalProps {
  filters: Filter[]
  SetSearchModal: Setter<boolean>
  SetFilterModal: Setter<boolean>
  filter_modal: boolean
  type: ProjectType
  SetType: Setter<ProjectType>
}

//TODO: Make alternate format styles and conditionally render them based on format state

export default function SearchModal(props: SearchModalProps) {

  const [format, SetFormat] = createSignal(false)

  const fetched_projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1, 1,]

  return (
    <>
      <div class="h-full w-full bg-orange-500">
        <div class="search-header flex justify-center items-center bg-purple-500 relative gap-2">
          <button class="bg-black text-white w-12 h-1/2 rounded-full absolute font-bold left-3 pop-on-hover hover:text-blue-500 duration-300" onClick={() => props.SetSearchModal(false)}>&lt--</button>
          <input class="w-3/5 h-1/2 rounded-lg p-2" placeholder={`Search ${props.type}...`} />
          <button onClick={() => props.SetFilterModal(!props.filter_modal)} class="bg-black w-14 h-1/2 rounded-lg font-bold text-white text-2xl pop-on-hover hover:text-blue-500 duration-300">+</button>
          <button onClick={() => SetFormat(true)} class="absolute right-4 text-2xl text-white font-bold">Format</button>
        </div>
        <div class="set-project-type bg-red-500 flex">
          <button onClick={() => props.SetType(ProjectType.Queries)} class={(props.type == "Queries") ? "project-class bg-purple-200 text-emerald-500" : "project-class text-white bg-black"}>Queries</button>
          <button onClick={() => props.SetType(ProjectType.Groups)} class={(props.type == "Groups") ? "project-class bg-purple-200 text-emerald-500" : "project-class text-white bg-black"}>Groups</button>
          <button onClick={() => props.SetType(ProjectType.Events)} class={(props.type == "Events") ? "project-class bg-purple-200 text-emerald-500" : "project-class text-white bg-black"}>Events</button>
          <button onClick={() => props.SetType(ProjectType.Bounties)} class={(props.type == "Bounties") ? "project-class bg-purple-200 text-emerald-500" : "project-class text-white bg-black"}>Bounties</button>
        </div>
        <div class="search-body bg-green-500 flex flex-wrap overflow-y-auto gap-4 justify-center pt-4 pb-2">
          {fetched_projects.map(project => {
            return (
              <FetchedItem />
            )
          })}
        </div>

      </div >
    </>
  )
}
