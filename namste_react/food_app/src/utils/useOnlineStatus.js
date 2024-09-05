import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      console.log("You are now not connected to the network.");
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
      console.log("You are now not connected to the network.");
      setOnlineStatus(true);
    });
  }, []);

  // boolean
  return onlineStatus;
};

export default useOnlineStatus;
