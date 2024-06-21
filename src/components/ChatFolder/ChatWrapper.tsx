import Headbar from "../HeaderFolder/Headbar"

import "./chatstyles.css"

export default function ChatWrapper() {
  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black">
      <div class="w-full h-full bg-red-200">
        <div class="header-sizing">
          <Headbar authenticated={true} />
        </div>
        <div class="main-sizing bg-blue-500"></div>
      </div>
    </div >
  )
}
