import { logout } from "./userSlice";

export const logoutUser = (dispatch) => {
    dispatch(logout());
    removeUserFromLocalStorage();
  };
  
  export const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("userInfo-admin", JSON.stringify(user));
    localStorage.setItem("token-admin", token);
    
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token-admin");
    localStorage.removeItem("userInfo-admin");
  };