import { createEffect, createSignal, type Setter } from "solid-js"
import PortfolioSettings from "./PortfolioSettings";
import { createStore } from "solid-js/store";
import TraitCreation from "./TraitCreation";
import type { Trait } from "./PortfolioTypes";


export default function CreatePortfolio() {
  const [stage, SetStage] = createSignal(3);
  const [settings, SetSettings] = createStore<any>([]);
  const [title, SetTitle] = createSignal("");
  const [Created_Traits, SetCreated_Traits] = createStore<Trait[]>([])




  createEffect(() => {
    console.log(settings)
  })

  return (


    <div class="portfolio-item-sizing p-2 rounded-lg bg-black flex justify-center items-center overflow-y-auto">
      {stage() === 1 ? (
        <button onClick={() => { SetStage(2) }}><h1 class="text-white text-8xl hover:text-blue-500 duration-300">+</h1></button>
      ) : null}

      {stage() === 2 ? (<PortfolioSettings title={title()} SetTitle={SetTitle} settings={settings} SetSettings={SetSettings} SetStage={SetStage} />) : (null)}
      {stage() === 3 ? (<TraitCreation title={title()} SetStage={SetStage} SetCreated_Traits={SetCreated_Traits} Created_Traits={Created_Traits} />) : (null)}

      {stage() === 4 ? (
        <div class="w-full h-full bg-white flex">
          <div class="final-stage-header w-full flex bg-black text-white">
            <button class="w-1/2 h-full text-white flex justify-center items-center font-bold p-2 bg-blue-500" onClick={() => { SetStage(2) }}>Settings</button>
            <button class="w-1/2 h-full text-white flex justify-center items-center font-bold p-2 bg-red-500" onClick={() => { SetStage(3) }} >Traits</button>
          </div>
        </div>
      ) : (null)
      }
    </div >

  )
}



