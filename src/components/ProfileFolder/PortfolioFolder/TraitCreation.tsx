import { createEffect, createSignal, type Setter } from "solid-js"
import TraitCreationModal from "./TraitCreationModal";
import { createStore, type SetStoreFunction } from "solid-js/store";
import "./PortfolioStyles.css"
import type { CreatedTraitProps, Trait, TraitCreationProps, TraitItemProps } from "./PortfolioTypes";
import { go_back } from "./portfolio_utils";


export default function TraitCreation(props: TraitCreationProps) {

  const length = props.Created_Traits.length;


  const starter_array = new Array<number>(4 - length).fill(0);

  const [untouched_traits, SetUntouched_Traits] = createStore(starter_array)




  const [trait_num, setTrait_Num] = createSignal(0)
  const traits_complete = false


  // if any index of Created_Traits_arr is empty, do not let user submit

  return (
    <div class="w-full h-full bg-white ">
      <div class="back-and-forth bg-white flex items-center">
        <div class="w-1/2 h-full flex justify-start items-center">
          <button class="font-bold ml-2" onClick={() => { go_back(trait_num(), setTrait_Num, props.SetStage) }}>back</button>
        </div>
        <div class="w-1/2 h-full flex justify-end items-center ">
          <button class="font-bold mr-2" onClick={() => { props.SetStage(4) }}>done</button>
        </div>
      </div>
      <div class="trait-header bg-red-500 flex justify-center items-center text-3xl text-white font-bold">
        {props.title}
      </div>
      <div class="trait-body bg-green-600 flex gap-2 justify-evenly items-center flex-wrap">

        {trait_num() !== 0 ? (<TraitCreationModal untouched_traits={untouched_traits} Created_Traits={props.Created_Traits} SetUntouched_Traits={SetUntouched_Traits} SetTrait_Num={setTrait_Num} trait_number={trait_num()} SetCreated_Traits={props.SetCreated_Traits} />) : (
          <>
            {props.Created_Traits.map((item, index) => {
              return (
                <CreatedTrait SetTrait_Num={setTrait_Num} Created_Traits={props.Created_Traits} trait_number={index + 1} />
              )
            })}

            {untouched_traits.map((item, index) => {
              return (
                <>
                  {item === 0 ? (
                    <TraitItem setTrait_Num={setTrait_Num} trait_number={index + 1} />
                  ) : (null)}
                </>
              )

            })}
          </>
        )}

      </div>
    </div >
  )
}



function TraitItem(props: TraitItemProps) {

  return (
    <div class="trait-item-body bg-black flex p-2 pop-on-hover justify-center items-center rounded-lg">
      <button onClick={() => {
        props.setTrait_Num(props.trait_number)
      }} class="text-5xl text-white w-1/2 h-1/2 font-bold">+</button>
    </div>
  )
}

function CreatedTrait(props: CreatedTraitProps) {
  const index = props.trait_number - 1

  let trait_object: Trait = props.Created_Traits[index]



  return (
    <div class="trait-item-body bg-blue-500 p-2  rounded-lg">
      <div class="trait-header bg-white w-full rounded-full flex justify-center items-center text-bold text-2xl">Trait {props.trait_number}</div>
      <div>{trait_object.talent}</div>
      <div>{trait_object.skilllevel}</div>
      <div>{trait_object.years}</div>
      <div>{trait_object.rando}</div>
      <div>{trait_object.past_exp}</div>
      <button onClick={() => { props.SetTrait_Num(props.trait_number) }}>Edit</button>
    </div>

  )
}
