const { createContext } = require("react");

const userContext = createContext({
  loggedIn: "Default User",
});

export default userContext;
