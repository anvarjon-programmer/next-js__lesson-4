'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(""); 
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      localStorage.setItem('username', username);
      router.push("/car")
    } else {

      alert("Noto'g'ri foydalanuvchi nomi yoki parol");
    }
  };

  return (
    <div className='' style={{ width: "400px", marginTop: "100px" ,marginLeft:'40%'}}>
      <form onSubmit={handleLogin}>
        <label>
          Foydalanuvchi nomi:
          <input className="form-control form-control-lg" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Parol:
          <input className="form-control form-control-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit " className=' btn btn-success'>Kirish</button>
      </form>
    </div>
  );
};

export default Login;
