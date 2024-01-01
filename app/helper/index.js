'use client'
import axios from 'axios';
require("dotenv").config();

//axios.defaults.baseURL = process.env.BASE_URL;
export const userRegister = async(formData) => {
    try{
        console.log(formData);
        const  response  = await axios.post("http://localhost:3000/api/addUser",{formData},{
            validateStatus: (status) => status >= 200 && status <= 500
        });
        if(response.status === 400){
            return { error: "Already registered!" };
        }
        else if(response.status === 500){
            return { error: "Some error occurred" };
        }
        else{
            return { success: true, message: "Registered successfully!" };
        }
        return;
    } catch (error) {
        return { error: "error" };
    }
}

export const checkUser = async(email) => {
    try{
        const response  = await axios.post(`http://localhost:3000/api/checkUser`,{email: email},{
            validateStatus: (status) => status >= 200 && status <= 500
        });
        const res = response.data;
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const getEvents = async() => {
    try{
        const { response } = await axios.get("http://localhost:3000/api/getEventStatus",{
            validateStatus: (status) => status >= 200 && status <= 500
        });
        const res = await response.json();
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.event;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const getUserEvents = async() => {
    try{
        const { response } = await axios.get("/getUserEvents");
        const res = await response.json();
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.event;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const getUserTeams = async() => {
    try{
        const { response } = await axios.get("/getUserTeams");
        const res = await response.json();
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.team;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const getRegisteredEvents = async() =>{
    try{
        const { response } = await axios.get("/society-events/registered-events");
        const res = await response.json();
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const getRegisteredUsers = async() =>{
    try{
        const { response } = await axios.get(`/society-events/registered-users?Id=${id}`);
        const res = await response.json();
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const eventRegisteration = async(formData) =>{
    try{
        const { response } = await axios.post(`/society-events/registeration`,{formData});
        const res = await response.json();
        if(response.status === 400){
            return { error: res.error};
        }
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.message;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const createTeam = async(formData) =>{
    try{
        const { response } = await axios.post(`/team/create`,{formData});
        const res = await response.json();
        if(response.status === 400){
            return { error: res.error};
        }
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.message;
    } catch (error) {
        return { error: "some error occured" };
    }
}

export const submitTeam = async(formData) =>{
    try{
        const { response } = await axios.post(`/team/submit`,{formData});
        const res = await response.json();
        if(response.status === 400){
            return { error: res.error};
        }
        if(response.status === 500){
            return { error: "some error occured" };
        }
        return res.message;
    } catch (error) {
        return { error: "some error occured" };
    }
}







