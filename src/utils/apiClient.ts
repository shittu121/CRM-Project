import axios, { AxiosRequestConfig } from "axios";
// import { getSession } from "next-auth/react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

// axiosInstance.interceptors.request.use(async (request) => {
//   if (!isAccessTokenAttachedToAxiosDefaults())
//     await setAccessTokenOnRequestAndAsAxiosDefaults(request);
//   return request;
// });

// const isAccessTokenAttachedToAxiosDefaults = () => {
//   const authHeader = axiosInstance.defaults.headers.common["Authorization"];
//   if (authHeader === null || authHeader === undefined || authHeader === "")
//     return false;
//   else return true;
// };

// const setAccessTokenOnRequestAndAsAxiosDefaults = async (
//   request: AxiosRequestConfig
// ) => {
//   const session = await getSession();
//   if (session) {

//     console.log(session);
    
//     const AuthHeaderValue = `Bearer ${session.accessToken}`;
//     if (!request.headers) request.headers = {};
//     request.headers.Authorization = AuthHeaderValue;

//     axiosInstance.defaults.headers.common["Authorization"] =
//       AuthHeaderValue; /* NOTE - This is to prevent calling getSession() again and again for each request. 
//                                   Because getSession() internally calls api/auth/session, which would be very expensive to do
//                                   for each request to our backend [Call to this API was consuming around 10% of our bandwidth provided to us by vercel]. 
                                  
//                                   It will not only lead to increase in costs but also increase time to perform each request as 
//                                   we have to every-time make a remote call to /api/auth/session. */
//   }
// };

// export const unsetAccessTokenAttachedToAxiosDefaults = () => {
//   delete axiosInstance.defaults.headers.common["Authorization"];
// };

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
});

export const get = async (url: string) => {
  const res = await axiosInstance.get(url);

  return res.data;
};

export const post = async (url: string, data?: {}) => {
  const res = await axiosInstance
    .post(url, data)
    return res.data
};


export const patch = async (url: string, data: {}) => {
 const res = await axiosInstance
    .patch(url, data)
 
    return res.data
};


