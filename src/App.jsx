

import { IconLogo } from "./assets/svg/Icons"
import Markets from "./components/Markets"
import MatrixEffect from "./components/MatrixEffect"
import Trending from "./components/Trending"




function App () {

  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <MatrixEffect />
        <div className="flex justify-center items-center">
          <IconLogo className={"h-12 text-yellow-500 relative z-20"} />
          <h1 className="text-5xl font-bold ml-1 py-4 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"><span className="text-yellow-500">C</span>rypto <span className="text-yellow-500">U</span>pdate</h1>
        </div>
        <div className="w-full min-h-screen relative flex justify-center items-center">

          <div className="flex flex-col justify-center items-center relative z-10  w-3/4  rounded-lg ">

            <div className="flex flex-col w-full">



              <div className="flex gap-4 my-12">
                <Markets />
                <Trending />
              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
