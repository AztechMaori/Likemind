import { type Setter } from "solid-js";
import { Notification } from "./Notification";



export interface ReqReturn<V> {
  data?: V,
  code: number,
}

export interface HandleRequestProps<T, V> {
  req: (args: T) => Promise<ReqReturn<V> | undefined>,
  body: T,
  StateSetter?: Setter<V>,
  NotificationSetter: Setter<string>,
}

// T is the data sent from the request, V is the type returned from the response;

export async function HandleRequest<T, V>(args: HandleRequestProps<T, V>) {
  const api_res = await args.req(args.body);

  if (api_res != undefined) {


    if (api_res.data && args.StateSetter) {
      let data = api_res.data as (Exclude<V, Function> | ((prev: V) => V))
      args.StateSetter(data)
    }


    console.log(api_res.code);
    switch (api_res.code) {
      case 401: {
        args.NotificationSetter("X");
        break
      }
      case 200: {
        Notification(args.NotificationSetter, 1750, "Request Succesfull");
        break
      }
      case 500: {
        Notification(args.NotificationSetter, 1750, "Sorry, Something Went Wrong");
        break
      }
      default: {
        Notification(args.NotificationSetter, 1750, "Unknown Status Code");
        break
      }
    }
  }

}


export async function trial(): Promise<ReqReturn<null>> {

  let url = "http://localhost:3000/trial";

  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
  })


  let req_return: ReqReturn<null> = { code: res.status }

  return req_return

}

