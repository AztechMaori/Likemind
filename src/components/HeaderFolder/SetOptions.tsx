import type { Setter } from "solid-js/types/server/reactive.js";
import "./button.css"
import type { SetStoreFunction } from "solid-js/store";
import { any } from "zod";


interface SetOptionsProps {
  setStage: Setter<number>
  setSettings: SetStoreFunction<any>
  settings: any[]
}

export default function SetOptions(props: SetOptionsProps) {
  const array = ["Incognito", "Location", "Time Limit", "Theme"]
  let LocalSettingsArray = [...props.settings];
  return (
    <>
      <div class="w-full h-full bg-black flex flex-col   items-center">
        <h1 class="w-full h-1/6 bg-black flex justify-center items-center text-blue-500 hover:text-yellow-500 duration-500 font-bold text-2xl ">Settings </h1>
        <div class="w-full h-4/6 bg-white rounded-lg flex flex-col items-center ">
          {array.map((item, index) => { return (<Option name={item} optionNumber={index} LocalSettingsArray={LocalSettingsArray} />) })}
        </div>
        <button onClick={() => { FinaliseSettings(LocalSettingsArray, props.setSettings, props.setStage) }} class="w-full h-1/6 bg-black text-white font-bold hover:text-blue-500 duration-500">Done...?</button>
      </div>

    </>
  )



}

interface OptionsProps {
  name: string
  optionNumber: number
  LocalSettingsArray: any[]
}



function Option(props: OptionsProps) {
  return (
    <div class="mt-2 option-sizing bg-purple-400 flex justify-center">
      <div class="w-5/6 h-full bg-pink-300 flex justify-center items-center font-bold">{props.name}</div>
      <div class="w-1/6 h-full flex justify-center items-center bg-green-400">
        {props.name !== "Incognito" ? (
          <input class="w-5/6 h-5/6 rounded-lg text-black pl-2" value={props.LocalSettingsArray[props.optionNumber]} onInput={(e) => { LocalUpdateSettings(props.LocalSettingsArray, e.target.value, props.optionNumber) }} />
        ) : (<input type="checkbox" checked={props.LocalSettingsArray[props.optionNumber]} class="w-5/6 h-5/6 rounded-lg text-black pl-2" onChange={(e) => LocalUpdateSettings(props.LocalSettingsArray, e.target.checked, props.optionNumber)} />)}
      </div>
    </div>
  )
}



function LocalUpdateSettings(settingsArray: any[], input: any, optionNumber: number) {
  settingsArray[optionNumber] = input;

}

function FinaliseSettings(LocalSettingsArray: any[], SetSettings: SetStoreFunction<any>, setStage: Setter<number>) {
  SetSettings(LocalSettingsArray);
  setStage(1);
}
