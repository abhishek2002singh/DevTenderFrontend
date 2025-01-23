import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest } from "../utils/requstSlice";

const CardRequest = ({ user }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector((store) => store.theme);
    const { firstName, lastName, age, gender, about, skills, photoUrl } = user.fromUserId;

    const reviewRequest = async(status ,_id) =>{
        try{

            const res = await axios.post(BASE_URL + "/request/review/" + status + '/' + _id , {} ,{
                withCredentials:true
            })
            dispatch(removeRequest(_id))
           

        }catch(err){
            console.error(err)
        }
    }
  
    return (
      <div
      className={`carousel carousel-center h-auto w-96 rounded-box max-w-md space-x-4 shadow-md p-4 ${
        theme === "dark"
          ? "bg-gradient-to-l from-[#7DC387] to-[#DBE9EA] text-gray-800"
          : "bg-gray-900 text-white"
      }`}>
        <div className="carousel-item flex flex-col items-center w-96 justify-center">
          <img src={photoUrl} alt={`${firstName} ${lastName}`} className="w-32 h-32 rounded-full object-cover mb-4" />
          
          <div className="text-center">
            <h2 className="text-lg font-semibold">{firstName} {lastName}</h2>
            <p className="text-sm text-gray-600">{age} years old</p>
            <p className="text-sm text-gray-600">Gender: {gender}</p>
            
            <div className="mt-4">
              <h3 className="text-md font-semibold">About</h3>
              <p className="text-gray-700 mt-1">{about}</p>
            </div>
  
            <div className="mt-4">
              <h3 className="text-md font-semibold">Skills</h3>
              {skills && skills.length > 0 ? (
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No skills listed</p>
              )}
            </div>
  
            {/* Accept and Reject Buttons */}
            <div className="flex space-x-4 mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
                onClick={()=>reviewRequest("accepted" ,user._id)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out"
                onClick={()=>reviewRequest("rejected" ,user._id)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardRequest;
  