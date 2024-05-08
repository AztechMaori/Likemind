import { createSignal, type Setter } from "solid-js";
import "./button.css"
import type { SetStoreFunction } from "solid-js/store";
import { Notification } from "../Utils/Notification";
import Message from "../Utils/Notification";


interface SetOptionsProps {
  setStage: Setter<number>
  setSettings: SetStoreFunction<any>
  settings: any[]
}

export default function SetOptions(props: SetOptionsProps) {
  const [notif, setNotif] = createSignal(false);
  const [message, setMessage] = createSignal("");


  const array = ["Incognito", "Location", "Time Limit (hrs)", "Theme", "Maximum-Group-Size"]
  const LocalSettingsArray = [...props.settings];
  return (
    <>
      {notif() ? <Message message={message()} /> : null}
      <div class="w-full h-full bg-black flex flex-col   items-center">
        <h1 class="w-full h-1/6 bg-black flex justify-center items-center text-blue-500 hover:text-yellow-500 duration-500 font-bold text-2xl ">Settings </h1>
        <div class="w-full h-4/6 bg-white rounded-lg flex flex-col items-center ">
          {array.map((item, index) => { return (<Option name={item} setNotif={setNotif} setMessage={setMessage} optionNumber={index} LocalSettingsArray={LocalSettingsArray} />) })}
        </div>
        <button onClick={() => { FinaliseSettings(LocalSettingsArray, props.setSettings, props.setStage, setMessage, setNotif) }} class="w-full h-1/6 bg-black text-white font-bold hover:text-blue-500 duration-500">Done...?</button>
      </div>

    </>
  )



}

interface OptionsProps {
  name: string
  optionNumber: number
  LocalSettingsArray: any[]
  setNotif: Setter<boolean>
  setMessage: Setter<string>
}


interface InputProps {
  args: LocalUpdateSettingsArgs
  type: string,
  max?: number
  min?: number
}

function Input(props: InputProps) {
  return (
    <input class="w-5/6 h-5/6 rounded-lg text-black pl-2" type={props.type} max={props.max} min={props.min} value={props.args.LocalsettingsArray[props.args.optionNumber]} onInput={(e) => { LocalUpdateSettings(props.args, e.target.value) }} />
  )

}


function Option(props: OptionsProps) {
  let args: LocalUpdateSettingsArgs = { LocalsettingsArray: props.LocalSettingsArray, optionNumber: props.optionNumber, setMessage: props.setMessage, setNotif: props.setNotif };



  return (
    <>
      <div class="mt-2 option-sizing bg-purple-400 flex justify-center">
        <div class="w-5/6 h-full bg-pink-300 flex justify-center items-center font-bold">{props.name}</div>
        <div class="w-1/6 h-full flex justify-center items-center bg-green-400">

          {props.optionNumber === 0 ? (<input type="checkbox" checked={props.LocalSettingsArray[props.optionNumber]} class="w-5/6 h-5/6 rounded-lg text-black pl-2" onChange={(e) => LocalUpdateSettings(args, e.target.checked)} />) : (null)}

          {(props.optionNumber === 1 || props.optionNumber === 3) ? (<Input args={args} type="text" />) : (null)}

          {(props.optionNumber === 2) ? (<Input args={args} type="number" max={24} min={0} />) : (null)}

          {(props.optionNumber === 4) ? (<Input args={args} type="number" min={0} max={8} />) : (null)}

        </div>
      </div>
    </>
  )
}

interface LocalUpdateSettingsArgs {
  LocalsettingsArray: any[]
  optionNumber: number,
  setMessage: Setter<string>,
  setNotif: Setter<boolean>,
}


function LocalUpdateSettings(args: LocalUpdateSettingsArgs, input: any) {
  if (args.optionNumber === 2 && (input > 24 || input < 0)) {
    args.setMessage("Time limit must be between 0 and 24 hours")
    Notification(args.setNotif, 1900);

  }
  else if (args.optionNumber === 4 && (input > 8 || input < 0)) {
    args.setMessage("Group-size must be between 0 and 8");
    Notification(args.setNotif, 1900);
  }

  args.LocalsettingsArray[args.optionNumber] = input;
}

function FinaliseSettings(LocalSettingsArray: any[], SetSettings: SetStoreFunction<any>, setStage: Setter<number>, setMessage: Setter<string>, setNotif: Setter<boolean>) {
  if (LocalSettingsArray[2] > 24 || LocalSettingsArray[2] < 0) {
    setMessage("Time limit must be between 0 and 24 hours");
    Notification(setNotif, 1900);
  }
  else if (LocalSettingsArray[4] > 8 || LocalSettingsArray[4] < 0) {
    setMessage("Group-size must be between 0 and 8");
    Notification(setNotif, 1900);
  }
  else {
    SetSettings(LocalSettingsArray);
    setStage(1);
  }
}
