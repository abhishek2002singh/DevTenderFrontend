import axios from "axios"
import { BASE_URL } from '../utils/Constant'
import { useDispatch, useSelector } from "react-redux"
import{addFeed} from '../utils/feedSlice'
import { useEffect } from "react"
import UserCard from "./UserCard"


const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store)=>store.feed)
  const { theme } = useSelector((store) => store.theme);
  console.log(feed)

  const getfeed = async()=>{
    if(feed)return
    try{
      
         const res = await axios.get(BASE_URL+"/feed",{withCredentials:true});
         dispatch(addFeed(res.data))
    }catch(err){
      console.error(err)
    }
  
  }

  useEffect(()=>{
        getfeed()
  } ,[])

  if(!feed) return

  if (feed.length <= 0) {
    return (
      <div className={`flex items-center justify-center h-screen ${
        theme === 'dark'
          ? "bg-gradient-to-l to left from-[#7DC387] to-[#DBE9EA] text-gray-800"
          : "bg-gray-900 text-white"
      }`}>
        <div className="bg-base-100 p-12 rounded-xl shadow-xl flex flex-col items-center">
          <svg
            className="w-20 h-20 text-blue-400 mb-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m0-2a6 6 0 10-12 0v1a2 2 0 002 2h8a2 2 0 002-2v-1m-4-4v1m0-4v.01M13 13h1v1m-4-4h.01"
            />
          </svg>
          <h1 className="text-3xl font-bold text-gray-400 mb-4">No New Users Found</h1>
        <p className="text-gray-400 mb-6">
          It looks like there are currently no new users in your feed.
        </p>
        <p className="text-gray-400 mb-6">
          Refresh the page or check back later to see updates!
        </p>
        <button
          className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 transition duration-300 ease-in-out"
          onClick={() => window.location.reload()} // Reloads the page
        >
          Refresh
        </button>
        </div>
      </div>
    );
  }

  

  return feed && (
    <div >
      <UserCard user={feed[0]}/>
    </div>
  )
}

export default Feed