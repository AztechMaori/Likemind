import Headbar from "../HeaderFolder/Headbar";
import Footer from "./Footer.tsx"
import "./HomePageStyles.css"
import ChatItem from "./ChatItem.tsx";
// ADD FUNCTION TO FETCH POSTS AND PASS THE STATUS CODE AS A PROP TO THE HEADER function to set the login or logout button

export default function HomepageWrapper() {
  const title = "Title"
  const array = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9]

  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black">
      <div class="w-full h-full bg-red-200">
        <div class="header-sizing">
          <Headbar authenticated={true} />
        </div>
        <div class="custom-scrollbar main-sizing w-full flex bg-orange-500">
          <div class=" flex flex-col  items-center messaging-sizing h-full bg-green-500 overflow-y-auto ">
            <h1 class="font-bold text-blue-500 text-3xl  border-b-blue-500 border-2 border-green-500 mb-2 mt-2">Chats</h1>
            {array.map(() => {
              return (
                <ChatItem Title={title} />
              )
            })}


          </div>
          <div class="foryou-sizing flex flex-col items-center min-w-fit h-full bg-purple-500 overflow-y-auto" >
            <h1 class="font-bold text-blue-500 border-b-blue-500 border-2 border-purple-500 text-3xl mt-2">For You</h1>
          </div>
          <div class="flex flex-col items-center challenges-sizing min-w-fit h-full bg-red-600">
            <h1 class="text-3xl font-bold text-blue-500 border-b-blue-500 border-2 border-red-600 mt-2">Challenges</h1>
          </div>
        </div>
        <div class="footer-sizing">
          <Footer />
        </div>





      </div>
    </div>
  )
}
