import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import avatar from './avatar.png';
import './App.css';
//import { useSelector, useDispatch } from 'react-redux'
//import { doAuth } from './features/user/authSlice';

function App() {
  //const present = useSelector((state)=> state.authenticate.verified);
 // const dispatch = useDispatch();
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isPresent, setPresent] = useState(false);
  const[isverified,setVerified] = useState(false);
  const [userInfo, setUserInfo] = useState({
      name:"",
      picture:"",
      email:""
  });

  useEffect(()=>{
    const auth = async() => {
      fetch('http://localhost:8080/api/authenticate',{method: "GET"})
      .then((result)=>{
         setVerified(result.valid);
         console.log("verified");
      })
      .catch((err)=>{
        console.log("cannot authenticate");
        console.log(err);
      });
    }
    auth();
    console.log("HI");
  },[])
 
  const getUserInfo = async (access_token) => {
    const url = "https://www.googleapis.com/oauth2/v3/userinfo";
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const {name, email, picture} = data;
      console.log(data);
      setUserInfo({
        name:name,
        email:email,
        picture:picture
      });
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };

  //Funtion to login with google account
  const login = useGoogleLogin({
    onSuccess: async(tokenResponse) => {
      getUserInfo(tokenResponse.access_token);
      setisLoggedIn(false);
      localStorage.setItem("accessToken", tokenResponse.access_token);
      const auth = async() => {
        fetch(`http://localhost:8080/api/checkUser/${userInfo.email}`,{method: "GET"})
        .then((result)=>{
           setPresent(result.valid);
           console.log("verified");
        })
        .catch((err)=>{
          console.log("cannot authenticate");
          console.log(err);
        });
      }
      auth();
    },
  });
  //Funtion to logOut
  const logout = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
      setisLoggedIn(true);
    } else {
      setisLoggedIn(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUserInfo(localStorage.getItem("accessToken"));
      setisLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      {isverified?<p>Already present</p> : 
      <header className="App-header bg-black">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isLoggedIn ? (
              <button
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                onClick={() => {
                  login();
                }}
              >
                Login
              </button>
            ) : (
              <>
                <button
                  className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </button>
                <button
                  className="outline-none m-2 right-10 transition-all duration-200 ease-in-out cursor-pointer"
                  onClick={() => {setisProfileOpen(!isProfileOpen)}}
                >
                  <img src={userInfo.picture?userInfo.picture:avatar} alt="pic" className="w-9 h-9 right-10 rounded-full" />
                </button>
              </>
            )}
        {
          isPresent? <p>secret</p> : <p>register</p>
        }
        {isProfileOpen && !isLoggedIn? (
          <div className="flex items-center justify-center fixed h-full right-5 sm:right-20 z-20">
            <div className="w-50 h-2/3 bg-white p-10 rounded shadow-lg flex flex-col justify-evenly ">
              <div className="flex items-center justify-center w-full">
                <img src={userInfo.picture?userInfo.picture:avatar} alt="pic" className="w-1/2 h-100 rounded-full" />  
              </div>
              <hr />
              <div className="text-0.5rem font-semibold justify-start my-5" v>Name: {userInfo.name}</div>
              <hr />
              <div className="text-0.5rem font-semibold justify-start my-5">Email: {userInfo.email}</div>
              <div className="text-blue-500 text-0.5rem justify-start my-5" onClick={() => {
                logout();
                login();
              }}>switch account</div>
            </div>
          </div>
            ) : (
          <div></div>
          )}
      </header>}
    </div>
  );
}

export default App;
