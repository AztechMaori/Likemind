import { createEffect, createSignal, type Setter } from "solid-js";
import { createStore, type SetStoreFunction } from "solid-js/store"
import "./PortfolioStyles.css"
import type { FinaliseTraitsProps, SpecialNumberInputProps, Trait, TraitCreationModalProps } from "./PortfolioTypes";
import Datalist from "./DataList";
import SpecialNumberInput from "./SpecialNumInput";
import { finalise_trait, RemovePastExperience, UpdatePastExperience, UpdateTalentInput } from "./portfolio_utils";




export default function TraitCreationModal(props: TraitCreationModalProps) {





  return (
    <div class="w-full h-full bg-purple-400">
      <div class="w-full trait-creation-header  text-blue-500 bg-black flex text-4xl justify-center items-center">
        Trait {props.trait_number}



      </div>
      <div class="w-full trait-creation-body bg-green-500  overflow-y-auto">
        <TraitCreationBody trait_number={props.trait_number} Created_Traits={props.Created_Traits} SetTrait_Num={props.SetTrait_Num} untouched_traits={props.untouched_traits} SetCreated_Traits={props.SetCreated_Traits} SetUntouched_Traits={props.SetUntouched_Traits} />
      </div>
    </div>

  )
}







function TraitCreationBody(props: TraitCreationModalProps) {


  const headers = ["Skill-Level", "Number of Yrs", "rando"]


  //maintaing Trait State for editing
  const created_traits_copy = props.Created_Traits[props.trait_number - 1];

  const local_trait_data: any[] = [created_traits_copy?.talent, created_traits_copy?.skill_level, created_traits_copy?.years, created_traits_copy?.rando];

  let base_exp = created_traits_copy?.past_exp
  base_exp = base_exp ?? []




  //Past_Exp
  const [past_exp, SetPast_Exp] = createStore<string[]>(base_exp);
  const [exp, SetExp] = createSignal("")


  const args: FinaliseTraitsProps = {
    SetUntouched_Traits: props.SetUntouched_Traits,
    SetCreated_Traits: props.SetCreated_Traits,
    untouched_traits: props.untouched_traits,
    SetTrait_Num: props.SetTrait_Num,
    Created_Traits: props.Created_Traits,
    trait_number: props.trait_number,
    local_trait_data: local_trait_data,
    past_exp: past_exp
  }




  return (
    <div class="w-full h-full bg-green ">
      <div class="talent-input-sizing w-full bg-green-200 flex justify-center items-center">
        <input list="talent" value={local_trait_data[0]} class="talent-input rounded-lg pl-2" onInput={(e) => { UpdateTalentInput(local_trait_data, e.target.value) }} placeholder="State a Talent..." />
        <Datalist />
      </div>
      <div class="triple-select w-full triple-select-dir bg-red-900">
        <div class="skill-level bg-orange-500 flex justify-center items-center">
          <div class="triple-select-inner bg-black rounded-lg flex items-center justify-evenly">
            {headers.map((value, index) => {
              return (
                <SpecialNumberInput header={value} local_trait_data={local_trait_data} index={index} />
              )
            })}
          </div>
        </div>
        <div class="skill-level bg-green-900 flex items-center justify-center">
          <div class="triple-select-inner bg-purple-400 rounded-lg p-1 ">
            <h2 class="text-2xl experience-header w-full bg-black text-white flex rounded-lg justify-center items-center">Past Experience</h2>
            <div class="experience-body w-full bg-white rounded-lg  pt-2 mt-1 flex flex-col items-center overflow-y-auto">
              {
                past_exp.map((value, index) => {
                  return (
                    <div class="experience-list-item rounded-lg flex items-center justify-evenly min-h-max mt-1 mb-1 bg-black">
                      <div class="experience-item-input h-5/6 pl-2 bg-white rounded-lg">{value}</div>
                      <button class="w-1/6 bg-red-600 font-bold text-white rounded-full" onClick={() => { RemovePastExperience(index, past_exp, SetPast_Exp) }}>X</button>
                    </div>
                  )
                })
              }
              <div class=" experience-list-item  bg-black rounded-lg flex items-center mt-1 mb-1 justify-evenly ">
                <input placeholder="enter experience..." value={exp()} onInput={(e) => { SetExp(e.target.value) }} class=" rounded-lg pl-2 experience-item-input h-5/6"></input>
                <button class="w-1/6 bg-red-600 font-bold text-white text-xl rounded-full" onClick={() => { UpdatePastExperience(past_exp, SetPast_Exp, exp(), SetExp) }} >+</button>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="finalise-div bg-white flex justify-center  pt-1">
        <button class="bg-green-400 finalise-button rounded-lg font-bold" onClick={() => { finalise_trait(args) }} >Finalise</button>
      </div>
    </div >
  )


}




