import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const url = "https://my-json-server.typicode.com/Debjitdolui/dummyData";
  const [recentjob, setRecentJob] = useState([]);
  const [companiesdata, setCompaniesData] = useState([]);

  // fatching home data which user will see
  useEffect(() => {
    const fetchRecentJobs = async () => {
      try {
        const api = await axios.get(`${url}/recentpostedjobs`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // Assuming your API response is an array of recent job objects

        setRecentJob(api.data);
      } catch (error) {
        console.error("Error fetching recent jobs:", error);
      }
    };

    fetchRecentJobs();
    companies();
  }, []);
  // console.log(recentjob);

  //fatching companies data
  const companies = async () => {
    try {
      const api = await axios.get(`${url}/companies`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setCompaniesData(api.data);
    } catch (error) {
      console.error("Error fetching recent companies:", error);
    }
  };

  console.log(companiesdata);

  // register user
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    return api.data;
    // console.log("user register ",api)
  };

  return (
    <AppContext.Provider
      value={{
        recentjob,
        companiesdata,
        register,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
