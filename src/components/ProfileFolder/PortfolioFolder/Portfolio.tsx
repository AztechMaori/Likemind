
import "../ProfileStyles.css"
import PortfolioItem from "./PortfolioItem";
import "./PortfolioStyles.css"
import CreatePortfolio from "./CreatePortfolio";

export default function Portfolio() {
  const fetched_portfolios = [0, 1];
  const create_portfolio = new Array<number>(3 - fetched_portfolios.length).fill(0)
  return (
    <div class="absolute top-0 bottom-0 right-0 left-0 bg-red-400">
      <div class="w-full h-full">
        <div class="portfolio-header-sizing bg-black flex justify-center items-center">
          <button onClick={() => { window.location.href = "http://localhost:4321/profilepage" }} class="absolute top-2 left-3 text-white text-2xl">Back</button>
          <h1 class="text-blue-500 text-4xl font-bold  border-black border-b-blue-500 border-2">Profile Editor</h1>
        </div>
        <div class="portfolio-body-sizing bg-black">
          <div class="portfolio-header-sizing flex justify-start items-center"><span class="ml-6 text-blue-500 text-3xl">Your Portfolio's</span></div>
          <div class="portfolio-body-sizing bg-red-500 flex justify-center items-center">
            <div class="portfolio-triple-sizing bg-purple-500  justify-evenly items-center gap-2 ">
              {fetched_portfolios.map(() => {
                return (
                  <PortfolioItem />
                )
              })}
              {create_portfolio.map(() => {
                return (
                  <CreatePortfolio />
                )
              })}




            </div>
          </div>
        </div>
      </div>


    </div>


  )
}
