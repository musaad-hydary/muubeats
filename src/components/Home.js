import Art from "../assets/prexplore.png";
import radioCover from "../assets/radioCover.png";
import beatsCover from "../assets/beats.png";


const Home = () => {
  return (
    <div className="w-full h-screen bg-[#f2f2f2] px-12">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <h1 className="sm:py-40 px-12 text-7xl font-extrabold inline sm:text-[#303030] lg:text-transparent bg-clip-text bg-gradient-to-r from-[#5468B6] to-[#E29334]">
            <a href="https://distrokid.com/hyperfollow/musaad/preexplore">NEW MUSIC OUT NOW</a>
          </h1>
          <br className="sm:hidden" />
          <a className="sm:hidden" href="https://distrokid.com/hyperfollow/musaad/preexplore">

          <button className="mx-12 sm:hidden bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition ease-in-out">
            LISTEN
          </button>
          </a>
          <a href="https://distrokid.com/hyperfollow/musaad/preexplore">

          <img
            className="hidden sm:block sm:py-12 sm:m-8 max-w-sm h-auto"
            src={Art}
            alt="Album cover"
          />
          </a>
        </div>
      </div>

      <div class="m-4 inline-block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#f2f2f2] dark:border-gray-700">
        <a href="https://distrokid.com/hyperfollow/musaad/preexplore">
          <img class="rounded-t-lg" src={Art} alt="" />
        </a>
        <div class="p-5">
          <a href="https://distrokid.com/hyperfollow/musaad/preexplore">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#121212] ">
              PRE//EXPLORE
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">BEAT TAPE</p>
          <a
            href="https://distrokid.com/hyperfollow/musaad/preexplore"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LISTEN
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="m-4 inline-block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#f2f2f2] dark:border-gray-700">
        <a href="/radio">
          <img class="rounded-t-lg" src={radioCover} alt="" />
        </a>
        <div class="p-5">
          <a href="/radio">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#121212] ">
              muubeats RADIO
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MUSIC</p>
          <a
            href="/radio"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LISTEN
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="m-4 inline-block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#f2f2f2] dark:border-gray-700">
        <a href="/beats">
          <img class="rounded-t-lg" src={beatsCover} alt="" />
        </a>
        <div class="p-5">
          <a href="/beats">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#121212] ">
              ALL BEATS
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MUSIC</p>
          <a
            href="/beats"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LISTEN
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;
