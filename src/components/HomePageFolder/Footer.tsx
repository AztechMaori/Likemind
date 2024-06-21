import type { Setter } from "solid-js"
interface FooterProps {
  SetTitle: Setter<string>
}

export default function Footer(props: FooterProps) {
  return (
    <div class="flex  items-center justify-evenly h-full w-full bg-black text-white">
      <button onClick={() => change_filter(props.SetTitle, "Social")} class="font-bold text-lg border rounded-full w-20 h-10 pr-2 pl-2 min-h-fit min-w-fit  hover:text-emerald-500 duration-300"> Social </button>
      <button onClick={() => change_filter(props.SetTitle, "Business")} class="font-bold text-lg border rounded-full w-20 h-10 pr-2 pl-2 min-h-fit min-w-fit  hover:text-emerald-500 duration-300"> Business </button>
      <button onClick={() => change_filter(props.SetTitle, "Gaming")} class="font-bold text-lg border rounded-full w-20 h-10 pr-2 pl-2 min-w-fit min-h-fit hover:text-emerald-500 duration-300"> Gaming </button>
      <button onClick={() => change_filter(props.SetTitle, "Sport")} class="font-bold text-lg border rounded-full w-20 h-10 pr-2 pl-2 min-w fit min-h-fit  hover:text-emerald-500 duration-300"> Sport </button>
      <button onClick={() => change_filter(props.SetTitle, "Trending")} class="font-bold text-lg border rounded-full w-20 h-10 pr-2 pl-2 min-h-fit min-w-fit hover:text-emerald-500 duration-300"> ? </button>
    </div>
  )
}

function change_filter(SetTitle: Setter<string>, name: string) {
  SetTitle(name)


}


