import type { SetStoreFunction } from "solid-js/store"
import "./ScrollModeStyles.css"
import type { Filter, ProjectType } from "../AlgoUtils"
import type { Setter } from "solid-js"

interface FilterModalProps {
  SetFilters: SetStoreFunction<Filter[]>
  SetType: Setter<ProjectType>
}

export default function FilterModal(props: FilterModalProps) {
  return (
    <div class=" top-1/4 rounded-lg  p-2 flex justify-center items-center z-10 bg-red-500 filter-modal-box ">hi</div>
  )
}


