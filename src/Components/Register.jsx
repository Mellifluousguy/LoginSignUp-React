import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './dataContext';

const Register = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");
    setIsComplete(allFieldsFilled);
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
    <form onSubmit={sendData} className='max-w-[375px] gap-6 pt-[40px] h-lvh border-2 flex text-heading px-[20px] flex-col border-gray-300  w-full bg-[#F7F8F9]'>
      <h1 className='text-[28px] font-medium w-50'>Create your PopX account</h1>

      {["name", "phone", "email", "password", "company"].map((field, index) => (
        <div key={index} className='border-[#CBCBCB] p-2 flex flex-col relative border rounded-md'>
          <label className='absolute top-[-8px] px-2 text-[#6C25FF] bg-[#F7F8F9] text-[13px]' htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)} <span className='text-[#DD4A3D]'>*</span>
          </label>
          <input type={field === "email" ? "email" : "text"} id={field} name={field} onChange={handleChange} required />
        </div>
      ))}

      <div className='text-[13px] flex flex-col gap-2'>
        <span>Are you an Agency?<span className='text-[#DD4A3D]'>*</span></span>
        <div className='flex gap-3'>
          <input type="radio" className='accent-[#6C25FF] scale-120' name='YesNo' id='Yes' />
          <label htmlFor="Yes">Yes</label>
          <input type="radio" name='YesNo' className='accent-[#6C25FF] scale-120' id='No' />
          <label htmlFor="No">No</label>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={!isComplete}
        className={`text-base mb-[30px] rounded-md mt-auto py-[11px] font-medium text-white 
        ${isComplete ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB] cursor-not-allowed'}`}
      >
        Create Account
      </button>
    </form>
  )
}

export default Register;
