import { createEffect, onCleanup, type Setter } from "solid-js";
import { createSignal } from "solid-js";


export function Notification(setNotif: Setter<boolean>, time: number) {


  setNotif(true);

  const timeout = setTimeout(() => {
    setNotif(false);
  }, time);

  onCleanup(() => {
    clearTimeout(timeout);
  });

}

interface MessageProps {
  message: string
}


export default function Message(props: MessageProps) {

  return (
    <div class="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-blue-500 min-w-fit min-h-fit h-20 p-2 rounded-lg">
      <div class="w-full h-full flex justify-center items-center min-w-fit min-h-fit font-bold text-2xl ">{props.message}</div>
    </div>
  )
}


export function Countdown(count: number, setCount: Setter<number>) {


  createEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);


}
