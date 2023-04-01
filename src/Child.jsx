import React from "react";

import {AppContext} from 
'./components/useContext/UseContext'
import { useContext } from "react";
const Child = () => {
  const userData = useContext(AppContext);


  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}.{" "}
    </div>
  );
};

export default Child;