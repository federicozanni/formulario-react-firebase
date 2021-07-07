import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

export const useLogin = () => {

  let guardarUsers = JSON.parse(localStorage.getItem('userlogin'));
  if(!guardarUsers) {
    guardarUsers = [];
  }
 

  const [userlogin, setUserlogin] = useState(guardarUsers);

  
  useEffect( () => {
    localStorage.setItem('userlogin', JSON.stringify(userlogin));
    }, [userlogin]);
    

  const addUser = (userRegister) => {
    userRegister.id = uuidv4()
    setUserlogin([...userlogin, userRegister])
  }


  const {register, handleSubmit} = useForm();


  const onSubmit = (data) => {
  addUser(data);
  }


  const delateUsers = id => {
    setUserlogin(userlogin.filter(userRegister => userRegister.id !== id))
  }

  return {
    userlogin,
    register,
    onSubmit,
    handleSubmit,
    delateUsers,
  }

}