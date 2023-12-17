import {useState} from 'react'
import { useRouter } from 'next/router';
import axios from "axios"

const Camera = () => {
    const router = useRouter();
    const setId = typeof window !== "undefined" && localStorage.getItem("id");
    
    const [data, setData] = useState({
      email: "",
    });
  
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      setIsLoading(true)
      e.preventDefault();
      console.log(data);
      if (data.email) {
        axios
          .post(`https://api-cliqpod.koyeb.app/event/${setId}`, {email:data.email})
          .then((response) => {
            setIsLoading(false)
            toast.success(response.data.success)
            router.push("/camera")
          })
          .catch((error) => {
            setIsLoading(false)
            toast.warning(error);
          });
      }}
  return (
    <>Camera</>
  )
}

export  {Camera}