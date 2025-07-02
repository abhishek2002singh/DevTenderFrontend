// import { Navigate } from 'react-router-dom';
 import { setUserPresentTrue, setToken } from './checkLogin';
 import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
  //  const dispatch = useDispatch();

 
//     if (token) {
//       dispatch(setUserPresentTrue());
//       dispatch(setToken(token));
//     }
  

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import { Navigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import PreLoginHandle from '../component/PreLoginHandle';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  
  if (token) {
      dispatch(setUserPresentTrue());
       dispatch(setToken(token));

    return <Navigate to="/app"  />;
  }
  toast("please login again your session end")
  return <PreLoginHandle />;
};

export default ProtectedRoute;