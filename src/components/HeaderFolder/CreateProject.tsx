// create fetch function and backend route to create posts -- remember to send credenetials --
import { createEffect, createSignal, type Setter } from "solid-js"
import { number, set } from "zod";
import CreateGroup from "./CreateGroup";
import CreateDescription from "./CreateDescription";
import SetOptions from "./SetOptions";
import "./button.css"
import { createStore } from "solid-js/store";
import Message, { Countdown, Notification } from "../Utils/Notification";


interface ModalProps {
  setModal: Setter<boolean>
  setNotif: Setter<boolean>
  setMessage: Setter<string>
}

interface MemberData {
  username: string,
  id: string,
}

function Modal(props: ModalProps) {
  const [title, setTitle] = createSignal("")
  const [stage, setStage] = createSignal(1);
  const [confirmedPortfolio, setConfirmedPortfolio] = createStore<MemberData[]>([])
  const [description, setDescripton] = createSignal("");
  const [settings, setSettings] = createStore<any>([]);





  return (
    <>

      <div class="  p-2 rounded-lg bg-black w-3/4 h-1/2 fixed top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">

        {stage() === 0 ? (<div class="flex w-full h-full justify-center items-center text-2xl ">loading Innit</div>) : (null)}





        {stage() === 1 ? (
          <>
            <div class="w-full h-full bg-black">
              <h1 class="h-1/6 w-full flex justify-center items-center font-bold bg-black">
                <input value={title()} class="bg-black border border-black border-b-white p-2 w-5/6" onInput={(e) => { setTitle(e.target.value) }} placeholder="Title..." />
              </h1>
              <div class="h-4/6 w-full flex flex-wrap bg-orange-500">
                <button class="bg-pink-500 w-1/3 h-full flex items-center font-bold justify-center btn-pop" onClick={() => { setStage(2) }}>Group</button>
                <button class="bg-purple-500 w-1/3 h-full flex justify-center items-center font-bold btn-pop" onClick={() => { setStage(3) }}> Description</button>
                <button class="bg-pink-500 w-1/3 h-full flex justify-center items-center font-bold btn-pop" onClick={() => { setStage(4) }}>Settings</button>
              </div>
              <button class="w-full h-1/6 bg-black button font-bold hover:text-emerald-500 flex items-center duration-500 justify-center" onClick={() => { UploadProject(setStage, props.setNotif, props.setMessage, description(), confirmedPortfolio, title(), settings, props.setModal) }}>Finish...?</button>
            </div>


          </>
        ) : (null)}

        {
          stage() === 2 ? (<CreateGroup setStage={setStage} ConfirmedPortfolio={confirmedPortfolio} setConfirmedPortfolio={setConfirmedPortfolio} />) : null

        }
        {stage() === 3 ? (<CreateDescription setStage={setStage} setDescription={setDescripton} Description={description} />) : (null)}
        {stage() === 4 ? (<SetOptions setStage={setStage} setSettings={setSettings} settings={settings} />) : (null)}

      </div >
    </>


  )
}

export default function ProjectCreationModal() {
  const [modal, setModal] = createSignal(false)
  const [notif, setNotif] = createSignal(false);
  const [message, setMessage] = createSignal("");


  return (
    <>
      {notif() ? (<Message message={message()} />) : (null)}

      <button onClick={() => setModal(!modal())} class=" border rounded-lg border-blue-500 pr-2 pl-2  min-h-fit min-w-fit text-2xl lg:mr-3 font-bold text-blue-500 hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-300">+</button>
      {modal() ? <Modal setModal={setModal} setMessage={setMessage} setNotif={setNotif} /> : (null)}
    </>
  )

}


async function UploadProject(setStage: Setter<number>, setNotif: Setter<boolean>, setMessage: Setter<string>, description: string, confirmedPortfolio: MemberData[], title: string, settings: any[], setModal: Setter<boolean>) {
  event?.preventDefault();

  if (title === "") {
    console.log("title is empty")
    console.log(`${confirmedPortfolio.length}`)
    setMessage("you must enter a title before posting!")
    Notification(setNotif, 1750)
  }
  else if (confirmedPortfolio.length === 0) {
    setMessage("you must select at least 1 portfolio before posting!")
    Notification(setNotif, 1750)
    console.log("there are no selected members")
  }
  else {



    const confirmedportolios = confirmedPortfolio;
    const confirmedPortfolioIds = confirmedportolios.map(item => item.id)

    const SettingsObject = {
      incognito: settings[0],
      location: settings[1],
      timelimit: parseInt(settings[2]),
      theme: settings[3],
      group_size: parseInt(settings[4]),
    }




    const project_data = {
      title: title,
      portfolio_ids: confirmedPortfolioIds,
      description: description,
      settings: SettingsObject
    }

    const url = "http://localhost:3000/postProject";
    console.log(SettingsObject)

    try {
      setStage(0);
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project_data),
      })
      console.log(`the status code of the response is ${response.status}`)

      if (response.status === 401) {
        setMessage(`UNAUTHORIZED, Rerouting to Auth Page in 5 seconds`);
        Notification(setNotif, 5000)
        setTimeout(() => {
          window.location.href = "http://localhost:4321/auth"
        }, 5000)

      }
      else if (response.status === 201) {
        setMessage(title + " has been succesfully posted")
        Notification(setNotif, 1750);
      }
      else {
        setMessage("unknown status code")
        Notification(setNotif, 1750)
      }
      setStage(1);
      setModal(false)
    }
    catch (error) {
      console.log(`an error occured: ${error}`)
    }
  }
}


