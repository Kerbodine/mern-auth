import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function UserDetails() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const getUserData = () => {
    Axios.get("http://localhost:3001/api/getUser", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response.data);
      setUserId(response.data.userId);
      setUserName(response.data.userName);
      setUserEmail(response.data.userEmail);
    });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-400 grid place-items-center">
      <div className="w-[300px] rounded-2xl shadow-xl bg-white p-8">
        <p className="font-semibold">
          UserID: <span className="text-gray-700 font-normal">{userId}</span>
        </p>
        <p className="font-semibold">
          Name: <span className="text-gray-700 font-normal">{userName}</span>
        </p>
        <p className="font-semibold">
          Email: <span className="text-gray-700 font-normal">{userEmail}</span>
        </p>
        <div className="mt-4 flex">
          <button className="form-button" onClick={getUserData}>
            Get User Data
          </button>
          <button className="ml-auto form-button" onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
