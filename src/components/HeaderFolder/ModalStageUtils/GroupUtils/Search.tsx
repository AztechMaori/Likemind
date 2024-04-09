import { createSignal, type Setter } from "solid-js"
import type { SetStoreFunction } from "solid-js/store"
import { type MemberData } from "./GroupTypes"

interface SearchProps {
  SetMemberData: SetStoreFunction<MemberData[]>
  SetLoading: Setter<boolean>
}


export default function Search(props: SearchProps) {
  const [search, setSearch] = createSignal("")
  return (
    <>
      <div class=" w-full bg-black flex justify-center items-center border border-black border-b-white">
        <input onInput={(e) => { setSearch(e.target.value) }} placeholder="search " type="text" value={search()} class=" pl-2 rounded-lg  mt-2 mb-2 text-black w-3/4  "></input>
        <button onClick={() => { FetchSearchResults() }} class=" pl-1 text-white font-bold ">yes</button>
      </div>
    </>

  )



  async function FetchSearchResults() {
    event?.preventDefault()

    const searchparams = {
      name: search()
    }



    let url = "http://localhost:3000/search";
    try {
      props.SetLoading(true)

      let res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchparams),
      });
      const data = await res.json();
      console.log(data)
      props.SetMemberData([data]);
      props.SetLoading(false);
      setSearch("");



    } catch (error) {
      console.log(`there was an error: ${error}`)
    }
  }




}




