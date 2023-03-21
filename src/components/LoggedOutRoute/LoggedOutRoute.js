import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import UserContext from '../../contexts/UserContext.js'


function LoggedOutRoute (props) {
  const user = useContext(UserContext)
  return !user.id ? props.element : <Navigate to='/'/>
}

export default LoggedOutRoute
