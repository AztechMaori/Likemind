import { createSignal, type Setter } from "solid-js";
import Message, { Notification, type MessageProps } from "../Utils/Notification";
import type { ReqReturn } from "../Utils/RouteHandler";

//LOGIN

export interface handleLoginProps {
  email: string,
  password: string,
  setEmail: Setter<string>,
  setPassword: Setter<string>,
  SetNotif: Setter<string>,
}

export async function handleLogin(props: handleLoginProps) {
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
    });
    console.log(`the response was: ${res.status}`);
    props.setEmail("");
    props.setPassword("");

    if (props.SetNotif) {

      switch (res.status) {
        case 200: {
          window.location.href = "http://localhost:4321/"
          break
        }
        case 401: {
          Notification(props.SetNotif, 1750, "Invalid Credentials");
          break
        }
        case 423: {
          Notification(props.SetNotif, 1750, "You are already logged in");
          break
        }
        case 500: {
          Notification(props.SetNotif, 1750, "Sorry, Something Went Wrong");
          break
        }
        default: {
          Notification(props.SetNotif, 1750, "Unknown Status Code");
          break
        }
      }
    }
  } catch (err) {
    console.log(`there was an error: ${err}`);
  }
}


// SIGNUP


export interface handleSignInProps {
  username: string,
  email: string,
  password: string,
  setUsername: Setter<string>,
  setPassword: Setter<string>,
  setEmail: Setter<string>,
  SetNotif: Setter<string>,
}
export async function handleSignIn(props: handleSignInProps) {
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
        window.location.href = "http://localhost:4321/"
        break
      }
      case 500: {
        Notification(props.SetNotif, 1750, "Sorry, Something Went Wrong");
        break
      }
      default: {
        Notification(props.SetNotif, 1750, "Unknown Status Code");
        break
      }
    }
  } catch (err) {
    console.log(err);
  }
}







