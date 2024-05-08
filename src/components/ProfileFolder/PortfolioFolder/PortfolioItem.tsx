import "./PortfolioStyles.css"

interface PortfolioItemProps {

}

export default function PortfolioItem(props: PortfolioItemProps) {
  let Title = "Title for ya";
  ;
  return (

    <div class="portfolio-item-sizing p-2 rounded-lg bg-blue-500 ">
      <div class="portfolio-item-header w-full  text-white  bg-red-500 flex justify-center items-center text-3xl font-bold ">{Title}</div>
      <div class="portfolio-item-body bg-green-500">
        <div class="w-full h-full flex bg-red-700">
          <div class="w-1/2 h-full bg-blue-300">
            <div class="h-1/2 w-full bg-orange-500 flex justify-center items-center">
              <button class="pop-on-hover trait-box bg-black text-white rounded-lg">Traits</button>
            </div>
            <div class="h-1/2 w-full flex justify-center items-center">
              <button class="pop-on-hover trait-box bg-black text-white rounded-lg">Recommended</button>
            </div>
          </div>
          <div class="w-1/2 h-full bg-emerald-500 flex justify-center items-center">
            <button class="pop-on-hover settings-box bg-black text-white rounded-lg"> Settings</button>
          </div>
        </div>
      </div>
    </div>

  )
}



