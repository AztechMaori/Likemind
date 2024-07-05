import "./ScrollModeStyles.css"
import { ProjectType } from "../AlgoUtils"
import { createSignal, type Setter } from "solid-js"
import FilterModal from "./FilterModal"


interface SearchBarProps {
  SetType: Setter<ProjectType>
  Type: ProjectType
  SetSearchModal: Setter<boolean>
  SetFilterModal: Setter<boolean>
  search_modal: boolean
  filter_modal: boolean
}


export default function SearchBar(props: SearchBarProps) {



  return (
    <>
      <div class="searchbar  bg-red-300 flex">
        <div class="project-select bg-sky-200 flex justify-evenly items-center ">
          <button onClick={() => props.SetType(ProjectType.Queries)} class={(props.Type != "Queries") ? "button_class" : "button_toggled"}>Queries</button>
          <button onClick={() => props.SetType(ProjectType.Groups)} class={(props.Type != "Groups") ? "button_class" : "button_toggled"}>Groups</button>
          <button onClick={() => props.SetType(ProjectType.Events)} class={(props.Type != "Events") ? "button_class" : "button_toggled"}>Events</button>
          <button onClick={() => props.SetType(ProjectType.Bounties)} class={(props.Type != "Bounties") ? "button_class" : "button_toggled"}>Bounties</ button>
        </div >
        <div class="search bg-sky-200  relative flex items-center gap-1">
          <button onClick={() => props.SetSearchModal(!props.search_modal)} class={(props.search_modal) ? "search_toggled" : "search_class"}>Search</button>
          <button onClick={() => props.SetFilterModal(!props.filter_modal)} class={(props.filter_modal) ? "filter_toggled" : "filter_class"}>Filter</button>
        </div>
      </div >
    </>
  )

}
