// create fetch function and backend route to create posts -- remember to send credenetials --
import { createEffect, createSignal, type Setter } from "solid-js"
import { number, set } from "zod";
import CreateGroup from "./CreateGroup";
import CreateDescription from "./CreateDescription";
import SetOptions from "./SetOptions";
import "./button.css"
import { createStore } from "solid-js/store";
import Message, { Notification } from "../Utils/Notification";


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
  const [confirmedUsers, setConfirmedUsers] = createStore<MemberData[]>([])
  const [description, setDescripton] = createSignal("");
  const [settings, setSettings] = createStore<any>([]);




  return (
    <>

      <div class="  p-2 rounded-lg bg-black w-3/4 h-1/2 fixed top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">





        {stage() === 1 ? (
          <>
            <div class="w-full h-full bg-black">
              <div> {settings}</div>
              <h1 class="h-1/6 w-full flex justify-center items-center font-bold bg-black">
                <input value={title()} class="bg-black border border-black border-b-white p-2 w-5/6" onInput={(e) => { setTitle(e.target.value) }} placeholder="Title..." />
              </h1>
              <div class="h-4/6 w-full flex flex-wrap bg-orange-500">
                <button class="bg-pink-500 w-1/3 h-full flex items-center font-bold justify-center btn-pop" onClick={() => { setStage(2) }}>Group</button>
                <button class="bg-purple-500 w-1/3 h-full flex justify-center items-center font-bold btn-pop" onClick={() => { setStage(3) }}> Description</button>
                <button class="bg-pink-500 w-1/3 h-full flex justify-center items-center font-bold btn-pop" onClick={() => { setStage(4) }}>Settings</button>
              </div>
              <button class="w-full h-1/6 bg-black button font-bold hover:text-emerald-500 flex items-center duration-500 justify-center" onClick={() => { props.setModal(false) }}>Finish...?</button>
            </div>


          </>
        ) : (null)}

        {
          stage() === 2 ? (<CreateGroup setStage={setStage} ConfirmedUsers={confirmedUsers} setConfirmedUsers={setConfirmedUsers} />) : null

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


async function UploadProject(setNotif: Setter<boolean>, setMessage: Setter<string>, description: string[], members: MemberData[], title: string, settings: any[], setModal: Setter<boolean>) {
  event?.preventDefault();

  const project_data = {
    title: title,
    members: members,
    description: description,
    settings: settings,
  }

  const url = "http://localhost:3000/postProject";

  try {
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
      setMessage("UNAUTHORIZED, please login");
      Notification(setNotif)
      window.location.href = "http://localhost:4321/auth"
    }
    else if (response.status === 201) {
      setMessage(title + " has been succesfully posted")
      Notification(setNotif)
    }
    else {
      setMessage("Sorry Something Went Wrong")
      Notification(setNotif)
    }
    setModal(false)
  }
  catch (error) {
    console.log(`an error occured: ${error}`)
  }
}


