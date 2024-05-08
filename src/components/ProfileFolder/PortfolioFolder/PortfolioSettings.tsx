import type { SetStoreFunction } from "solid-js/store";
import "./PortfolioStyles.css"
import { createEffect, createSignal, type Setter } from "solid-js";
import type { InputProps, LocalUpdateSettingsArgs, SettingProps, SubmitSettingsProps } from "./PortfolioTypes";
import { Input } from "./SpecialNumInput";
import { SubmitSettings } from "./portfolio_utils";


interface PortfolioSettingsProps {
  SetSettings: SetStoreFunction<any>
  settings: any[]
  SetStage: Setter<number>
  SetTitle: Setter<string>
  title: string
}

export default function PortfolioSettings(props: PortfolioSettingsProps) {
  const [notif, SetNotif] = createSignal(false);
  const [message, SetMessage] = createSignal("");

  const array = ["Location", "Incognito", "Child-Friendly", "Preferred-group-size", "Tenure"];
  const LocalSettingsArray = [...props.settings];



  const args: SubmitSettingsProps = {
    SetMessage: SetMessage,
    setNotif: SetNotif,
    SetStage: props.SetStage,
    LocalSettingsArray: LocalSettingsArray,
    SetSettings: props.SetSettings
  }


  return (
    <div class="w-full h-full bg-pink-500 overflow-y-auto flex items-center flex-col  ">
      <div class="portfolio-item-header  w-full bg-green-500 flex justify-center items-center font-bold text-2xl">
        <input placeholder="Enter Title of Portfolio..." value={props.title} onInput={(e) => { props.SetTitle(e.target.value) }} class=" h-3/4 portfolio-title-input rounded-lg pl-2" />
      </div>
      <div class="portfolio-creation-body w-full flex flex-col items-center">
        {array.map((value, index) => {
          return (
            <Setting SetNotif={SetNotif} SetMessage={SetMessage} LocalSettingsArray={LocalSettingsArray} setting_number={index} name={value} />
          )
        })}
      </div>
      <div class="submit-settings w-full bg-red-600 flex justify-center items-center">
        <button onClick={() => { SubmitSettings(args) }} class="w-4/6 h-1/2 bg-black rounded-lg pl-2 text-white">Submit</button>
      </div>
    </div>

  )
}










function Setting(props: SettingProps) {

  const args: LocalUpdateSettingsArgs = {
    settingnumber: props.setting_number,
    LocalsettingsArray: props.LocalSettingsArray,
    SetMessage: props.SetMessage,
    SetNotif: props.SetNotif,
  }


  const [checked, SetChecked] = createSignal(false);

  if (props.LocalSettingsArray[props.setting_number] !== undefined) {
    SetChecked(true)
  }

  let s_number = props.setting_number;



  return (
    <>

      <div class=" mt-2 mb-2 p-2  rounded-lg w-full min-h-fit portfolio-setting-sizing bg-red-500 ">
        <div class="portfolio-setting-title pl-1 bg-green-500 flex items-center justify-center text-white text-xl font-semibold"> {props.name}</div>
        <div class="portfolio-setting-body flex  bg-purple-500">
          <div class="w-1/4 h-full bg-green-100 flex justify-center items-center">
            <input type="checkbox" checked={checked()} onClick={() => { SetChecked(!checked()) }} class="w-1/2 h-3/6 rounded-lg bg-black text-white font-bold hover:text-red-600 duration-300">?</input>
          </div>
          <div class="w-3/4 h-full bg-pink-500 flex justify-center items-center">


            {(checked() === false && (s_number === 0 || s_number === 3 || s_number === 4)) && (<input disabled class="pl-2 rounded-lg portfolio-setting-input" />)}

            {(checked() === false && (s_number === 1 || s_number === 2)) && (<input disabled type='checkbox' class="p-4 rounded-lg w-1/2 h-1/2" />)}



            {(checked() === true && s_number === 0) && (<Input args={args} type="text" />)}

            {(checked() === true && s_number === 1) && (<Input args={args} type="checkbox" />)}

            {(checked() === true && s_number === 2) && (<Input args={args} type="checkbox" />)}

            {(checked() === true && s_number === 3) && (<Input args={args} type="number" min={0} max={8} />)}

            {(checked() === true && s_number === 4) && (<Input args={args} type="number" min={0} max={24} />)}

          </div>
        </div>
      </div >
    </>
  )
}





