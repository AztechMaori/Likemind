import Headbar from "../HeaderFolder/Headbar"
import "./ProfileStyles.css"
import CurrentProjects from "./CurrentProjects"
import PersonalProfile from "./PersonalProfile"

export default function ProfilePageWrapper() {
  return (
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-black">
      <div class="headbar-sizing w-full" >
        <Headbar authenticated={true} />
      </div>
      <div class="main-sizing w-full bg-red-500 flex">
        <div class="w-3/4 h-full bg-black">
          <PersonalProfile />

        </div>
        <div class="w-1/4 h-full min-w-fit bg-pink-500">
          <CurrentProjects />
        </div>

      </div>
    </div>
  )
}
