import type { Setter } from "solid-js";
import type { SetStoreFunction } from "solid-js/store";


export function change_groupchat(setGcname: Setter<string>, SetGroup: SetStoreFunction<string[]>, chat_members: string[], Gcname: string) {
  SetGroup(chat_members)
  setGcname(Gcname)

}
