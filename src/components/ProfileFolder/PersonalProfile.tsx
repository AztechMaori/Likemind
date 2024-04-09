import "./ProfileStyles.css"
import Logout from "../HeaderFolder/logout"

export default function PersonalProfile() {
  const name = "John"
  return (
    <div class="w-full h-full bg-red-500">
      <h1 class="w-full h-1/6 bg-green-500 flex justify-center  items-center font-bold text-6xl">Welcome {name}...</h1>

      <div class="w-full flex  h-3/6 bg-pink-500 custom-scrollbar">
        <div class="w-1/2 h-full bg-black">
          <h2 class="font-bold w-full avatar-header-sizing items-center  bg-black flex justify-center">
            <span class="border-2 border-black border-b-white text-white">Avatar</span>
          </h2>
          <div class=" w-full avatar-body-sizing  bg-purple-800">
            <div class="w-full h-5/6 bg-green-700 "></div>
            <div class="w-full flex items-center justify-evenly h-1/6 bg-black ">
              <Logout />
            </div>
          </div>
        </div>
        <div class="w-1/2 h-full bg-orange-600">
          <h2 class="font-bold w-full avatar-header-sizing items-center  bg-orange-600 flex justify-center">
            <span class="border-2 border-orange-600 border-b-white text-white">Bio</span>
          </h2>
          <div class="  w-full avatar-body-sizing bg-red-700 overflow-y-auto p-2"> Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis..Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</div>
        </div>
      </div>
      <div class="w-full h-2/6 bg-black">
        <h2 class="font-bold w-full portfolio-header-sizing items-center  bg-black flex justify-center">
          <span class="border-2 border-black border-b-white text-white">Portfolio Editor</span>
        </h2>
        <div class="w-full portfolio-body-sizing bg-purple-800 "></div>

      </div>
    </div >
  )
}
