import type { InputProps, LocalUpdateSettingsArgs } from "./PortfolioTypes"

interface InputCheckProps {
  checked: boolean
  args: LocalUpdateSettingsArgs
}

export default function InputCheck(props: InputCheckProps) {
  const s_number = props.args.settingnumber;
  const args = props.args;








  if (props.checked === false) {
    switch (s_number) {
      case 0:
      case 3:
      case 4:
        return (
          <input disabled class="pl-2 rounded-lg portfolio-setting-input" />
        )
      case 1:
      case 2:
        return (
          <input disabled type='checkbox' class="p-4 rounded-lg w-1/2 h-1/2" />
        )
    }
  }
  else {
    switch (s_number) {
      case 0:
        return (
          <Input args={args} type="text" />

        )
      case 1:
      case 2:
        return (
          <Input args={args} type="checkbox" />
        )
      case 3:
        return (
          <Input args={args} type="number" min={0} max={8} />
        )
      case 4:
        return (
          <Input args={args} type="number" min={0} max={24} />
        )
    }

  }



}


function Input(props: InputProps) {
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

function LocalUpdateSettings(args: LocalUpdateSettingsArgs, input: any) {

  args.LocalsettingsArray[args.settingnumber] = input

}
