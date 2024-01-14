"use client";
import axios from "axios";

export const userRegister = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
      { formData },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      }
    );
    const res = response.data;
    if (response.status === 400) {
      return { error: "Already registered!" };
    } else if (response.status === 500) {
      return { error: "Some error occurred" };
    } else {
      return { success: true, message: "Registered successfully!" };
    }
  }
  catch (error) {
    return { error: "error" };
  }
};

export const checkUser = async (email) => {
  try {
    if(!email){
      return {error: "email not present"};
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkUser`,
      { email: email },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = response.data;
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res;
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getEventStatus`,
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = response.data.event;
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res;
  } catch (error) {
    return { error: "some error occured" };
  }
};


export const getUserTeams = async () => {
  try {
    const { response } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getUserTeams`,{
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = await response.json();
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res.team;
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const getRegisteredEvents = async () => {
  try {
    const { response } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/society-events/registered-events`,{
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = await response.json();
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res;
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const getRegisteredUsers = async () => {
  try {
    const { response } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/society-events/registered-users?Id=${id}`,{
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = await response.json();
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res;
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const eventRegisteration = async (formData) => {
  try {
    const { response } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/society-events/registeration`,
      { formData },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = await response.json();
    if (response.status === 400) {
      return { error: res.error };
    }
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return res.message;
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const joinTeam = async (teamId, type, event) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/team/join`,
      { teamId, type, event },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );
    const res = response.data;

    if (response.status === 400 || response.status === 500) {
      return { error: res.error };
    } else {
      return { message: res.message };
    }
  } catch (err) {
    return { error: "some error occured" };
  }
};

export const createTeam = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/team/create`,
      { formData },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );

    const res = response.data;

    if (response.status === 400) {
      return { error: res.error };
    }
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return { message: res.message };
  } catch (error) {
    return { error: "some error occured" };
  }
};

export const submitTeam = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/team/submit`,
      { formData },
      {
        validateStatus: (status) => status >= 200 && status <= 500,
      },
    );

    const res = response.data;
    if (response.status === 400) {
      return { error: res.error };
    }
    if (response.status === 500) {
      return { error: "some error occured" };
    }
    return { message: res.message };
  } catch (error) {
    return { error: "some error occured" };
  }
};
