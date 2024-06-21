import { createSignal, type Setter } from "solid-js";
import AuthMessage from "../Utils/Notification";
import { handleLogin, type handleLoginProps } from "./auth_utils";

interface Props {
  setModal: Setter<boolean>;
}

export default function Login(props: Props) {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [notif, setNotif] = createSignal("");

  const handle_login_props: handleLoginProps = {
    password: password(),
    email: email(),
    setEmail: setEmail,
    setPassword: setPassword,
    SetNotif: setNotif,
  }




  return (
    <div class="min-h-screen bg-black pb-20  mr-4 flex items-center justify-center bg overflow-auto">

      {(notif() != "") && (<AuthMessage notif={notif()} />)}



      <form
        onSubmit={() => { handleLogin(handle_login_props) }}
        class="bg-black p-8 w-96  rounded-lg shadow-lg "
      >
        <div class="flex justify-center">
          <button
            onClick={() => props.setModal(false)}
            class="text-2xl font-bold mb-4 rounded-full p-2  pl-10 pr-10 bg-blue-400 text-white ease-in-out hover:bg-red-500 transition duration-300  transform hover:scale-105"
          >

            Login
          </button>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full p-2 border border-gray-300 rounded-md"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="w-full p-2 border border-gray-300 rounded-md"
            value={password()}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white p-1 rounded-md w-full ase-in-out hover:bg-red-500 transition duration-300  transform hover:scale-105 "
        >
          Submit
        </button>

      </form>
    </div>
  );
}
