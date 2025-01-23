import {useSelector } from 'react-redux'

const Message = () => {
  const { theme } = useSelector((store) => store.theme);
    return (
      <div className={`flex items-center justify-center min-h-screen bg-gray-100 text-gray-800 ${
        theme === 'dark'
          ? "bg-gradient-to-l to left from-[#7DC387] to-[#DBE9EA] text-gray-800"
          : "bg-gray-900 text-white"
      }`}>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Message Feature</h2>
          <p className="text-gray-500 mb-4">
            This feature is not available at the moment, but we plan to introduce it in the future. Stay tuned for updates!
          </p>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Other Features
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;
  