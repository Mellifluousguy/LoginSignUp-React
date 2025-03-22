import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './dataContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if both fields are filled
    setIsComplete(formData.email.trim() !== "" && formData.password.trim() !== "");
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    if (!isComplete) return;
    setUser(formData);
    navigate("/profile");
  };

  return (
    <form className='max-w-[375px] gap-6 pt-[40px] h-lvh border-2 flex text-heading px-[20px] flex-col border-gray-300 w-full bg-[#F7F8F9]' onSubmit={sendData}> 
      <h1 className='text-[28px] font-medium w-50'>Sign in to your PopX account</h1>
      <p className='opacity-60 text-justify w-60 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className='border-[#CBCBCB] p-2 flex flex-col relative border rounded-md'>
        <label className='absolute top-[-8px] px-2 bg-[#F7F8F9] text-[#6C25FF] text-[13px]' htmlFor="email">
          Email address<span className='text-[#DD4A3D]'>*</span>
        </label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>

      <div className='border-[#CBCBCB] p-2 flex flex-col relative border rounded-md'>
        <label className='absolute top-[-8px] px-2 bg-[#F7F8F9] text-[#6C25FF] text-[13px]' htmlFor="password">
          Password<span className='text-[#DD4A3D]'>*</span>
        </label>
        <input type="password" name="password" onChange={handleChange} required />
      </div>

      <button 
        type="submit"
        disabled={!isComplete}
        className={`p-[11px] rounded-md text-white font-medium ${
          isComplete ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB] cursor-not-allowed'
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
