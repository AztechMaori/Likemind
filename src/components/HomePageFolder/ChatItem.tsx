import "./HomePageStyles.css"

interface ChatItemProps {
  Title: string,
}

export default function ChatItem(props: ChatItemProps) {
  return (
    <div class="chatitem-sizing min-w-fit m-2 p-2 rounded-lg mt-1 bg-black ">
      <div class=" custom-scrollbar min-w-fit w-full h-full ">
        <div class=" font-bold  pb-2 flex items-center text-2xl justify-center text-white h-1/5 min-h-fit  border-black border-b-white border-2  w-full min-w-fit">
          {props.Title}
        </div>
        <div class="h-4/5 w-full  flex">

          <div class="w-1/3 h-4/5 text-white  flex justify-center items-center">Avatar</div>


          <div class="w-2/3 h-4/5 mt-2  overflow-y-scroll text-white flex justify-center items-center">
            <div class="preview-style">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</div>

          </div>
        </div>
      </div>

    </div >
  )
}
