
import ProjectCreationModal from "./CreateProject";

interface HeadbarProps {
  authenticated: boolean;
}



export default function Headbar(props: HeadbarProps) {

  return (
    <>
      <header class="bg-black w-full min-w-fit h-full flex items-center text-white p-4">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="text-2xl font-bold text-blue-500 hover:text-yellow-500 transition-colors duration-300"
            >
              LIKEMIND
            </a>
            <nav class="space-x-4">
              <ProjectCreationModal />

              <a
                href="/"
                class="text-1xl font-bold text-blue-500 hover:text-yellow-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/trendingpage/"
                class="text-1xl font-bold text-blue-500 hover:text-yellow-500 transition-colors duration-300"
              >
                Statistics
              </a>

              <a
                href="/profilepage/"
                class="text-1xl font-bold text-blue-500 hover:text-yellow-500 transition-colors duration-300"
              >
                Profile
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
