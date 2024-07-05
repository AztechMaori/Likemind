import { createSignal, type Setter } from "solid-js"
import SearchModal from "../SearchModal/SearchModal"
import { ProjectType, type Filter, FilterType } from "../AlgoUtils"
import FilterModal from "./FilterModal"
import { createStore, type SetStoreFunction } from "solid-js/store"
import SearchBar from "./SearchBar"


interface ScrollModeProps {
}


export default function ScrollMode(props: ScrollModeProps) {
  const [type, SetType] = createSignal(ProjectType.Queries)
  const [filters, SetFilters] = createStore<Filter[]>([[FilterType.Likemind, "for-you"]])
  const [filter_modal, SetFilterModal] = createSignal(false)
  const [search_modal, SetSearchModal] = createSignal(false)

  return (
    <div class=" main-sizing bg-green-500 flex flex-wrap justify-center ">

      {filter_modal() && <FilterModal SetFilters={SetFilters} SetType={SetType} />}

      {search_modal() ? <SearchModal filters={filters} SetSearchModal={SetSearchModal} SetFilterModal={SetFilterModal} SetType={SetType} type={type()} filter_modal={filter_modal()} /> : (
        <>
          <SearchBar SetType={SetType} SetSearchModal={SetSearchModal} Type={type()} search_modal={search_modal()} SetFilterModal={SetFilterModal} filter_modal={filter_modal()} />
          <div class="central bg-blue-500 flex justify-center items-center">
            <div class="project-sizing bg-black rounded-lg p-2 relative">
            </div >
            <div class="absolute bottom-2 left-2 text-white text-2xl font-bold">#</div>
          </div>
        </>
      )
      }



    </div >
  )
}


////<div class="project-sizing bg-black rounded-lg p-2 relative">
//        </div >
//      <button class="absolute left-2 top-2 text-2xl text-white font-bold">Pin</button>
//    <div class="absolute bottom-2 left-2 text-white text-2xl font-bold">#</div>


