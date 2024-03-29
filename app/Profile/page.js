'use client'
import {useEffect, useState} from 'react';
import { TeamStatus } from '../Components/TeamStatus/TeamStatus';
import InputForm from "../InputForm/inputForm";
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import EventButton from '../Components/Buttons/eventButton';

const Profile = () => {
  const [user, setuser] = useState({
    _id: "",
    username: "",
    email: "",
    college: "",
    phone: 0,
  });
  const [team,setTeam] = useState([]);
  const {data:session} = useSession();
  
  useEffect(() => {
    if(!session) return ;
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getUser`,{
          validateStatus: (status) => status >= 200 && status <= 500,
        });
        const teams = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getUserTeams`,{
          validateStatus: (status) => status >= 200 && status <= 500,
        });

        if(response.error || teams.error){
          return;
        }
        setTeam(teams.data.team);
        setuser({
          _id: response.data._id,
          username: response.data.username,
          email: response.data.email,
          college: response.data.college,
          phone: response.data.phone,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [session]);

  async function deleteSession() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`
      );
      const res = response.data;
      if (res.error) {
        toast.error(res.error);
      } else {
        await signOut();
        if (!session) {
          toast.success(res.message);
          window.location.href = "/";
        }
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <div className="h-[300vh] bg-[#05063f] relative">
      <img
        src="/bg2.png"
        className="w-full absolute h-[300vh] top-0 left-0 shrink-0 object-cover opacity-30 z-2"
      />
      <div className="h-[100px]"></div>
      <div className="flex flex-col items-center w-full h-[300vh] absolute z-1">
        <InputForm user={user} />
        <TeamStatus teams={team} />
        {session ? (
          <div className="flex items-center justify-center mt-5 w-[50%]">
            <EventButton action={deleteSession} title="Log Out" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Profile;
