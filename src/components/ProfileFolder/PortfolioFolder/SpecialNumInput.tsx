import type { InputProps, SpecialNumberInputProps } from "./PortfolioTypes";
import { LocalUpdateSettings, UpdateNumberInput } from "./portfolio_utils";

export default function SpecialNumberInput(props: SpecialNumberInputProps) {
  return (
    <div class="special-number-box bg-red-600 p-2 rounded-lg">
      <div class="special-number-header w-full bg-purple-600 flex justify-center items-center">{props.header}</div>
      <input class="special-number-body w-full text-2xl skill-level-center" value={props.local_trait_data[props.index + 1]} onInput={(e) => { UpdateNumberInput(props.local_trait_data, props.index, e.target.value) }} type="number" />
    </div>


  )



}


export function Input(props: InputProps) {
  if (props.type === "checkbox") {
    return (
      <input type={props.type} onInput={(e) => { LocalUpdateSettings(props.args, e.target.checked) }
      } checked={props.args.LocalsettingsArray[props.args.settingnumber]} class=" w-1/2 h-1/2 rounded-lg" />
    )
  }
  else {
    return (
      < input type={props.type} max={props.max} min={props.min} onInput={(e) => { LocalUpdateSettings(props.args, e.target.value) }
      } value={props.args.LocalsettingsArray[props.args.settingnumber]} class="pl-2 portfolio-setting-input rounded-lg" />
    )
  }
}


