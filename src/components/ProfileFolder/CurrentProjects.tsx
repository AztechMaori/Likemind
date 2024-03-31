import "./ProfileStyles.css"

export default function CurrentProjects() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div class="w-full h-full bg-white custom-scrollbar">
      <h1 class="w-full projects-header-sizing bg-black items-center justify-center flex ">
        <span class="border-2 border-black border-b-white text-white">Current Projects</span>
      </h1>
      <div class="w-full projects-body-sizing bg-orange-400 overflow-y-auto flex-col items-center ">
        {array.map(item => {
          return (
            <ProjectItem />
          )
        })}
      </div>

    </div>
  )

}

function ProjectItem() {
  return (
    <div class="project-item-sizing min-w-fit  p-1 rounded-lg mt-2 m-2 bg-black">
      <h2 class="w-full project-item-header-sizing bg-black flex justify-center">
        <span class="border-2 border-black border-b-white  text-white">Title</span>
      </h2>
      <div class="w-full project-item-body-sizing bg-white"></div>

    </div >
  )
}
