import Headbar from "../HeaderFolder/Headbar.tsx";
import Footer from "./Footer.tsx"
import "./HomePageStyles.css"
import ChatItem from "./ChatItem.tsx";
import { createSignal } from "solid-js"
import ProjectView from "./ProjectView.tsx";
// ADD FUNCTION TO FETCH POSTS AND PASS THE STATUS CODE AS A PROP TO THE HEADER function to set the login or logout button

//TODO: create the ui in the orange div.
//1 - add a title which is equal to the url's final parameter, if the url's final parameter is empty then its just the base page 


export default function HomepageWrapper() {
  const [title, SetTitle] = createSignal("Home")

  const arr = ["For-YOU", "Trending", "Highest-Rated", "New"]
  const arr_two = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black">
      <div class="w-full h-full bg-purple-500">
        <div class="header-sizing">
          <Headbar authenticated={true} />
        </div>
        <div class="custom-scrollbar overflow-y-auto main-sizing w-full flex-col  bg-orange-500">
          <div class="title font-bold text-4xl flex ">
            <div class="w-1/3 h-full bg-red-600  flex justify-center items-center " ><span class="border-4 border-red-600 pb-1 border-b-white">{title()}</span></div>
            <div class="w-2/3 h-full flex justify-center items-center bg-purple-500 gap-1 ">
              <input placeholder={`Search in ${title()}`} class="w-5/6 h-3/5 p-4 rounded-lg" />
              <button class="portfolio-select p-4 rounded-lg bg-black text-white flex justify-center items-center hover:text-blue-500 duration-300 pop-on-hover ">+</button>
            </div>
          </div>
          {arr.map(value => {
            return (
              <ProjectView name={value} />
            )
          })}
        </div>
        <div class="footer-sizing">
          <Footer SetTitle={SetTitle} />
        </div>
      </div>
    </div >
  )
}
