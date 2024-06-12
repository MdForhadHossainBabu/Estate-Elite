import { useEffect, useState } from "react";

const Modal = () => {
  
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/properties`)
      .then(res => res.json())
    .then(data => setProperties(data))
  }, [])
  console.log(properties);
  return (
    <>
      <div
        className="border-2 h-64 w-full mx-auto px-4 bg-slate-400 absolute top-1/4 duration-1000">
       
    </div>
    </>
  );
};

 
export default Modal;