import React from "react";

/* 
    We have established the context store over here, this store will be storing all the states for me which
    provided by the provider, the consumer also have the access to this store, and hence it can take the
    props/data from here. 
*/


const MyContext = React.createContext();
export default MyContext;