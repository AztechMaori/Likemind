
interface ProjectViewProps {
  name: string
}

export default function ProjectView(props: ProjectViewProps) {

  let groups = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12]
  let events = [1, 2, 3, 4, 5, 6,]
  let bounties = [1, 2, 3, 4, 5]
  let queries = [1, 2, 3, 4, 5]


  return (
    <>
      <div class="box-sizing bg-red-500 flex flex-wrap">
        <div class="name w-full relative bg-black flex justify-center items-center text-3xl text-white font-bold">
          <div class=" absolute left-2 flex gap-4">
            <button class=" text-2xl  pr-4 pl-4 rounded-full border border-white  hover:border-blue-500 duration-300 ">All</button>
            <button class=" text-2xl pr-4 pl-4 rounded-full border border-white hover:border-blue-500 duration-300">Refresh</button>
          </div>
          {props.name}
        </div>
        <div class="central w-full bg-blue-300 flex flex-wrap">
          <div class="h-1/3 w-full bg-sky-500  flex justify-center ">
            <div class="flex flex-wrap justify-evenly p-2 rounded-lg gap-3 h-full overflow-x-auto pt-2 w-full">
              {groups.map(value => {
                return (
                  <div class="top-item flex flex-wrap bg-sky-300 p-2 rounded-lg  ">
                    <div class="h-1/5 w-full flex justify-center items-center bg-black text-white rounded-lg mb-1">Title</div>
                    <div class="h-4/5 w-full bg-white rounded-lg flex"></div>
                  </div>
                )
              })}
            </div>

          </div>
          <div class="h-2/3 w-1/2 bg-green-300 direction">
            <div class="bottom-left-left flex flex-col justify-center items-center  ">
              <div class="bottom-left-right-item bg-purple-500 p-2 rounded-lg">
                <div class="h-1/5 w-full bg-black flex justify-center items-center text-white rounded-lg mb-1">Events</div>
                <div class="h-4/5 w-full overflow-y-auto flex flex-col  gap-2 pt-2 pb-2  ">
                  {events.map(value => {
                    return (
                      <div class=" event-item p-2 rounded-lg flex gap-2 bg-sky-300">
                        <div class="bottom-left-left-photo bg-white rounded-lg"></div>
                        <div class="bottom-left-left-title bg-black rounded-lg">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
            <div class="bottom-left-right bg-pink-200 flex justify-center items-center ">
              <div class="bg-purple-500 bottom-left-right-item p-2 rounded-lg ">
                <div class="h-1/5 w-full bg-black flex justify-center items-center text-white rounded-lg mb-1">Bounties</div>
                <div class="h-4/5 w-full overflow-y-auto flex flex-col  gap-2 pt-2 pb-2  ">
                  {bounties.map(value => {
                    return (
                      <div class=" bounty-item h-1/3 bg-sky-300 p-2 rounded-lg flex gap-2 pb-2 ">
                        <div class="w-1/5 h-full bg-white p-2 rounded-lg flex justify-center items-center"></div>
                        <div class="w-4/5 h-full bg-black rounded-lg ">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
          <div class="h-2/3 w-1/2 bg-orange-500 flex justify-center items-center">
            <div class="bottom-right bg-purple-500 p-2 rounded-lg">
              <div class="h-1/5 bg-black text-white flex justify-center items-center rounded-lg mb-1">Queries</div>
              <div class="h-4/5 flex flex-col overflow-y-auto gap-2 pt-2 pb-2">
                {queries.map(value => {
                  return (
                    <div class="query-item bg-sky-300 p-2 rounded-lg flex gap-2">
                      <div class="w-1/6 h-full bg-white p-2 rounded-lg flex justify-center items-center"></div>
                      <div class="w-5/6 h-full bg-black rounded-lg">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                    </div>
                  )
                })}


              </div>

            </div>
          </div>


        </div>
      </div >
    </>

  )
}
