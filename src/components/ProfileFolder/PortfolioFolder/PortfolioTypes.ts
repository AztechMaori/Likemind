import type { Setter } from "solid-js"
import type { SetStoreFunction } from "solid-js/store"

export interface SettingProps {
  setting_number: number
  LocalSettingsArray: any[]
  name: string
  SetMessage: Setter<string>
  SetNotif: Setter<boolean>
}


export interface LocalUpdateSettingsArgs {
  LocalsettingsArray: any[]
  settingnumber: number,
  SetMessage: Setter<string>,
  SetNotif: Setter<boolean>,
}

export interface SubmitSettingsProps {
  LocalSettingsArray: any[]
  SetSettings: SetStoreFunction<any>
  SetStage: Setter<number>
  SetMessage: Setter<string>
  setNotif: Setter<boolean>

}


export interface InputProps {
  args: LocalUpdateSettingsArgs
  type: string
  max?: number
  min?: number
}


export interface Trait {
  talent: string,
  skilllevel: number,
  years: number,
  rando: number,
  past_exp: string[],
}

//TraitCreation

export interface TraitCreationProps {
  Created_Traits: Trait[]
  SetCreated_Traits: SetStoreFunction<Trait[]>
  SetStage: Setter<number>
  title: string;
}

export interface TraitItemProps {
  setTrait_Num: Setter<number>
  trait_number: number
}

export interface CreatedTraitProps {
  trait_number: number
  Created_Traits: Trait[]
  SetTrait_Num: Setter<number>
}





//TraitCreationModal
export interface TraitCreationModalProps {
  SetCreated_Traits: SetStoreFunction<Trait[]>
  Created_Traits: Trait[]
  SetTrait_Num: Setter<number>
  trait_number: number
  SetUntouched_Traits: SetStoreFunction<any>
  untouched_traits: any[]
}

export interface TraitCreationBodyProps {
  args: TraitCreationModalProps
}

export interface FinaliseTraitsProps extends TraitCreationModalProps {
  local_trait_data: any[]
  past_exp: string[]
}

export interface SpecialNumberInputProps {
  header: string
  local_trait_data: any[]
  index: number

}



