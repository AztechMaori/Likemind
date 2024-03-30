import Headbar from "../HeaderFolder/Headbar";
import Bio from "./Bio";
import UserBounties from "./UserBounties";


export default function ProfileWrapper() {
  return (
    <>

      <div class="grid grid-cols-4  gap-4 ">

        <div class=" col-span-4 ">
          <Headbar authenticated={true} />
        </div>

        <div class="col-span-3 rounded-lg shadow-lg">
          <Bio />

        </div>
        <div class="col-span-1 row-span-5  rounded-lg shadow-md">
          <UserBounties />
        </div>
      </div>
    </>
  )

}

