



export default function Logout() {

  async function logoutSession() {
    event?.preventDefault()

    const url = "http://localhost:3000/logout";
    try {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include"
      })
      console.log(`succesfull response:${res}`);
    } catch (err) {
      console.log(`there was an error: ${err}`)

    }

  }

  async function trial() {
    const url = "http://localhost:3000/check";
    try {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
      console.log(`succesfull operation ${res.status}`);
    } catch (err) {
      console.log(`there was an error, ${err}`);
    }
  }

  return (
    <>
      <button onClick={logoutSession} class="text-1xl font-bold border rounded-full w-20 h-10 pr-2 pl-2 min-h-fit min-w-fit bg-black  text-blue-500 hover:text-yellow-500 transition-colors duration-300">
        Logout
      </button>

    </>
  )
}

