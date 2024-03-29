import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import UserContext from '../../contexts/UserContext.js'


function LoggedInRoute (props) {
  const user = useContext(UserContext)
  return user._id ? props.element : <Navigate to='/'/>
}

export default LoggedInRoute
