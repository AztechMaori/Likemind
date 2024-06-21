import { createEffect, onCleanup, type Setter } from "solid-js";
import { createSignal } from "solid-js";
import "./FastAuthStyles.css"
import { handleSignIn, type handleLoginProps, type handleSignInProps, handleLogin } from "../Auth/auth_utils";
import { set } from "zod";


export function Notification(setNotif: Setter<string>, time: number, message: string) {


  setNotif(message);

  const timeout = setTimeout(() => {
    setNotif("");
  }, time);

  onCleanup(() => {
    clearTimeout(timeout);
  });

}

export interface MessageProps {
  notif: string,
  SetNotif: Setter<string>,
}


// Used for any general request that will return a Notification;
export default function Message(props: MessageProps) {

  if (props.notif == 'X') {
    return (
      <FastAuth SetNotif={props.SetNotif} />
    )
  }
  else {
    return (
      <div class="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-blue-500 min-w-fit min-h-fit h-20 p-2 rounded-lg">
        <div class="w-full h-full flex justify-center items-center min-w-fit min-h-fit font-bold text-2xl">{props.notif}</div>
      </div>
    )
  }
}

interface AuthMessageProps {
  notif: string
}

// only to be used for the 2 auth functions Login AND Signup;
export function AuthMessage(props: AuthMessageProps) {
  return (
    <div class="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-blue-500 min-w-fit min-h-fit h-20 p-2 rounded-lg">
      <div class="w-full h-full flex justify-center items-center min-w-fit min-h-fit font-bold text-2xl">{props.notif}</div>
    </div>
  )
}



interface FastAuthProps {
  SetNotif: Setter<string>,
}


function FastAuth(props: FastAuthProps) {
  const [stage, SetStage] = createSignal(true);



  return (
    <div class=" fixed top-0 right-0 left-0 bottom-0">
      <div class=" h-full w-full  flex justify-center items-center">
        <div class="bg-black fast_auth_sizing p-2 rounded-lg">
          <div class="h-1/6 w-full rounded-lg bg-black flex items-center justify-evenly mb-4">
            <button class={`text-2xl h-3/4 w-1/4 rounded-lg font-bold pop-on-hover ${stage() ? ("on_login") : ("off_login")} `} onClick={() => { SetStage(true) }} > Login</button>
            <button class={`text-2xl h-3/4 w-1/4 rounded-lg font-bold pop-on-hover ${stage() ? ("off_login") : ("on_login")}`} onClick={() => { SetStage(false) }} >Signup</button>
          </div>
          <div class="h-5/6 w-full">
            {stage() ? (<FastAuthLogin SetNotif={props.SetNotif} />) : (<FastAuthSignUp SetNotif={props.SetNotif} />)}
          </div>
        </div>
      </div>
    </div >
  )
}

// FastAuth components;

interface LoginSignUp_Args {
  SetNotif: Setter<string>,
}

function FastAuthLogin(args: LoginSignUp_Args) {
  const [email, SetEmail] = createSignal("");
  const [password, SetPassword] = createSignal("");
  const [message, SetMessage] = createSignal("");

  const route_props: HandleFastAuthLoginProps = {
    SetNotif: args.SetNotif,
    password: password(),
    email: email(),
    setPassword: SetPassword,
    setEmail: SetEmail,
    SetMessage: SetMessage,
  }

  return (
    <div class="h-full w-full">
      <div class="w-full h-1/6 flex items-center gap-4 ">
        <span class="text-2xl email_title  flex justify-center ml-2 font-bold text-white border-2 border-black border-b-white">Email</span>
        <input type="email" value={email()} onInput={(e) => { SetEmail(e.target.value) }} placeholder="enter email" class="pl-2 h-3/4 input_sizing rounded-lg " />
      </div>
      <div class="w-full h-1/6  flex items-center gap-4 ">
        <span class="text-2xl email_title flex justify-center ml-2 font-bold text-white border-2 border-black border-b-white">Password</span>
        <input type="password" value={password()} onInput={(e) => { SetPassword(e.target.value) }} placeholder="enter password" class="pl-2 h-3/4 input_sizing rounded-lg " />
      </div>
      {(message() != "") && <div class="h-1/6 flex justify-center items-center text-white text-2xl font-bold">{message()}</div>}
      <div class="w-full h-1/6 flex justify-center items-center">
        <button onClick={() => { handle_fastauth_login(route_props) }} class="w-2/4 h-3/4 bg-black text-white font-bold rounded-lg hover:text-blue-500 duration-300">Submit</button>
      </div>
      <div class="h-1/6 w-full "></div>
    </div>
  )
}

function FastAuthSignUp(args: LoginSignUp_Args) {
  const [email, SetEmail] = createSignal("");
  const [username, SetUsername] = createSignal("");
  const [password, SetPassword] = createSignal("");
  const [message, SetMessage] = createSignal("");

  const route_props: HandleFastAuthSignUpProps = {
    SetNotif: args.SetNotif,
    email: email(),
    password: password(),
    username: username(),
    setEmail: SetEmail,
    setPassword: SetPassword,
    setUsername: SetUsername,
    SetMessage: SetMessage,
  }
  return (
    <div class="h-full w-full">
      <div class="w-full h-1/6  flex items-center gap-4 ">
        <span class="text-2xl email_title  flex justify-center ml-2 font-bold text-white border-2 border-black border-b-white">Username</span>
        <input type="text" value={username()} onInput={(e) => { SetUsername(e.target.value) }} placeholder="enter username" class="pl-2 h-3/4 input_sizing rounded-lg " />
      </div>
      <div class="w-full h-1/6 flex items-center gap-4 ">
        <span class="text-2xl email_title  flex justify-center ml-2 font-bold text-white border-2 border-black border-b-white">Email</span>
        <input type="email" value={email()} onInput={(e) => { SetEmail(e.target.value) }} placeholder="enter email" class="pl-2 h-3/4 input_sizing rounded-lg " />
      </div>
      <div class="w-full h-1/6 flex items-center gap-4 ">
        <span class="text-2xl email_title flex justify-center ml-2 font-bold text-white border-2 border-black border-b-white">Password</span>
        <input type="password" value={password()} onInput={(e) => { SetPassword(e.target.value) }} placeholder="enter password" class="pl-2 h-3/4 input_sizing rounded-lg " />
      </div>
      {(message() != "") && <div class="h-1/6 flex justify-center items-center text-white text-2xl font-bold">{message()}</div>}
      <div class="w-full h-1/6 flex justify-center items-center">
        <button onClick={() => { handle_fastauth_signup(route_props) }} class="w-2/4 h-3/4 bg-black text-white font-bold rounded-lg hover:text-blue-500 duration-300">Submit</button>
      </div>
      <div class="h-1/6 w-full"></div>
    </div>
  )
}

// FastAuth RouteHandlers & Interfaces;

interface HandleFastAuthLoginProps extends handleLoginProps {
  SetMessage: Setter<string>,
}

async function handle_fastauth_login(props: HandleFastAuthLoginProps) {
  event?.preventDefault();

  const user_data = {
    email: props.email,
    password: props.password,
  };

  const url = "http://localhost:3000/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    })
    props.setPassword("")
    props.setEmail("")

    switch (res.status) {
      case 200: {
        props.SetMessage("Successfully Logged in")
        props.SetNotif("")
        break
      }
      case 401: {
        props.SetMessage("Invalid Username or Password")
        break
      }
      case 423: {
        props.SetMessage("You are already Logged in!")
        props.SetNotif("")
        break
      }
      case 500: {
        props.SetMessage("Internal Server Error")
        break
      }
      default: {
        props.SetMessage("Unknown Status Code")
        break
      }
    }
  } catch (err) {
    console.log(`there was an error: ${err}`);
  }
}

interface HandleFastAuthSignUpProps extends handleSignInProps {
  SetMessage: Setter<string>
}

async function handle_fastauth_signup(props: HandleFastAuthSignUpProps) {
  event?.preventDefault();

  const user_data = {
    username: props.username,
    email: props.email,
    password: props.password,
  };

  const url = "http://localhost:3000/signup";

  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    });
    props.setUsername("");
    props.setPassword("");
    props.setEmail("");

    switch (res.status) {
      case 200: {
        props.SetMessage("Successfully Created Account")
        props.SetNotif("")
        break
      }
      case 423: {
        props.SetMessage("You are already Logged in!")
        props.SetNotif("")
        break
      }
      case 500: {
        props.SetMessage("Internal Server Error")
        break
      }
      default: {
        props.SetMessage("Unknown Status Code")
        break
      }
    }
  }
  catch (err) {
    console.log(err)
  }
}







