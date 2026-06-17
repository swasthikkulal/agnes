import React, { use, useContext, useEffect, useState } from "react";
import { MyContext } from "../context/CreateContext";

const Profile = () => {
  const { data, getUserData, handleSubmit } = useContext(MyContext);
  const [user, setuser] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (data) {
      setuser({
        name: data.name,
        email: data.email,
      });
    }
  }, [data]);

  const handleChange = (e)=>{
    setuser({...user,[e.target.name]: e.target.value})
  }

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <button onClick={()=> handleSubmit(user)}>submit</button>
    </div>
  );
};

export default Profile;
