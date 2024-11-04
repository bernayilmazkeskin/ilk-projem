'use client'
import Link from 'next/link';
import { useState } from 'react';


export default function LoginPage() {
    const [username, setUsername] = useState('Berna');
    const [password, setPassword] = useState('1234');
    const [error,setError] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Giriş yapıldı:', username, password);
    };

    return (
        <form onSubmit={handleSubmit} className=" p-7 rounded-md flex items-center justify-center flex-col bg-slate-20 w-60  bg-slate-200"  >
            <label className="flex flex-col text-gray-400 text-sm font-bold mb-2" >
                Kullanıcı Adı
                <input 
                type="text"
                 value={username}
              className="shadow appearance-none border rounded  py-2 px-3 w-32 text-orange-600 leading-tight
                focus:outline-none focus:shadow-outline"
                 id="name"
                  placeholder="Adınız"
               onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label className="flex flex-col  text-slate-400 text-sm font-bold mb-2"
               >
                Parola
                <input type="password"
                 value={password}
                 className="shadow appearance-none border rounded w-32 py-2 px-3 text-orange-600 leading-tight
                 focus:outline-none focus:shadow-outline"
                  id="password"
                    placeholder="Parola"   
 onChange={(e) => setPassword(e.target.value)} />

            </label>
            {error && <p className="text-red-600">{error}</p>}
            <Link href={username === 'Berna' && password ==='1234'? '/login/user': setError('KULLANICI ADI VEYA PAROLA YANLIŞ.')}> 
             <button type="submit" className="bg-orange-600 shadow hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> 
                Giriş Yap 
                </button>
                </Link> 
            
         
        </form>
    );
}

