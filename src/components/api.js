import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    'Content-Type': 'application/json',
    authorization: 'secretpassword'
  },
});

//http://localhost:3000/api/




/* const http = require("http");

http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {
      authorization: 'secretpassword'
    },
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
); */