import type { Setter } from "solid-js"
import type { FinaliseTraitsProps, LocalUpdateSettingsArgs, SubmitSettingsProps, Trait } from "./PortfolioTypes";
import type { SetStoreFunction } from "solid-js/store";
import { array } from "zod";

//PortfolioSettings

export function LocalUpdateSettings(args: LocalUpdateSettingsArgs, input: any) {

  args.LocalsettingsArray[args.settingnumber] = input

}

export function SubmitSettings(args: SubmitSettingsProps) {

  args.SetSettings(args.LocalSettingsArray)
  args.SetStage(3)


}




// TraitCreation.tsx

export function go_back(trait_num: number, SetTrait_Num: Setter<number>, SetStage: Setter<number>) {
  if (trait_num !== 0) {
    SetTrait_Num(0)
  }
  else {
    SetStage(2)
  }
}



// TraitCreationModal.tsx
export function UpdateNumberInput(local_trait_data: any[], index: number, input: any) {
  index = index + 1;
  local_trait_data[index] = input;
}

export function UpdateTalentInput(local_trait_data: any[], input: any) {
  local_trait_data[0] = input
}


export function UpdatePastExperience(past_exp: string[], SetPast_Exp: SetStoreFunction<string[]>, input: string, SetExp: Setter<string>) {
  if (input !== "") {
    const past_exp_copy = [...past_exp];
    past_exp_copy.push(input);
    SetPast_Exp(past_exp_copy);
    SetExp("")
  }
}

export function RemovePastExperience(given_index: number, past_exp: string[], SetPast_Exp: SetStoreFunction<string[]>) {
  const past_exp_copy = [...past_exp];
  const new_exp = past_exp.filter((_, index) => index !== given_index)
  SetPast_Exp(new_exp)
}

export function finalise_trait(args: FinaliseTraitsProps) {
  const trait_index = args.trait_number - 1;
  const local_trait_data = args.local_trait_data;

  const new_trait: Trait = {
    talent: local_trait_data[0],
    skilllevel: local_trait_data[1],
    years: local_trait_data[2],
    rando: local_trait_data[3],
    past_exp: args.past_exp
  }


  let local_created_traits = [...args.Created_Traits];
  local_created_traits[trait_index] = new_trait;
  args.SetCreated_Traits(local_created_traits);

  let local_untouched_traits = [...args.untouched_traits]
  local_untouched_traits[trait_index] = 1;
  args.SetUntouched_Traits(local_untouched_traits)

  args.SetTrait_Num(0)
}



