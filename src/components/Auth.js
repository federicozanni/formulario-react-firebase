import React, {useState} from "react";
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';

export default (props) => {
    
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

   

    const submit = async () => {
     await  firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const logout = async ()=> {
        await firebase.auth().signOut();
    }
    console.log(logout);

    return(
    <div className="container">
        
        
            
            {
                !user &&
                <div>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" id="email" onChange={ 
                    (ev) => setEmail(ev.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={ 
                    (ev) => setPassword(ev.target.value)}/>
                <button onClick={submit}>iniciar sesion</button>
            </div>
            }
        {
            user&& <button onClick={logout}>close</button>
        }
        
    </div>
    );
}