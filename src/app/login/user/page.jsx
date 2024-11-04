'use client'
import { useState } from "react";

import TodoForm from "@/app/Components/TodoForm";
import TodoList from "@/app/Components/TodoList";
import TodoFilter from "@/app/Components/TodoFilter";

export default function IndexApp(){
  const [user,setUser]=useState('false')
      const [filter, setFilter] = useState("All");
     const [form, setForm] = useState("");
   const [todos, setTodos] = useState([
     { id: 1, text: "Doğayı sev", status: "Undone",index:0 },
     { id: 2, text: "Kitap oku", status: "Done",index:1 },
     { id: 3, text: "Spor yap", status: "Undone" ,index:2},
   ]);
const filterList =
  filter === "All" ? todos :todos.filter(item => item.status === filter);
   const statusText = {
     All: "Tümü",
     Done: "Yapıldı",
     Undone: "Yapılacak",
   };
    const handleSubmit = (e) => {
    e.preventDefault();
     
    if (form.trim() === "") {
     <span>Görev alanı boş bırakılamaz.</span>
      
      return;
    }
      setTodos([...todos, { text: form, status: "Done" }]);
       setForm("");
}
  const FilterFn = (newFilter) => {

    setFilter(newFilter);
  
  };
  const loginFn = () => { setUser(!user); };
  return (
  <div className="flex flex-col items-center justify-center mx-auto mt-10 py-5 rounded-md bg-slate-50 w-96"> 
  <h3 className="text-slate-400">{user ? 'Hoşgeldin Berna' : 'Lütfen Giriş Yapın'}</h3> 
  <TodoForm handleSubmit={handleSubmit} form={form} setForm={setForm} />
      <TodoList todos={todos} setTodos={setTodos} statusText={statusText} filter={filter} />
   <TodoFilter todos={todos} filter={filter} FilterFn={FilterFn} filterList={filterList} /> 
   </div>);
}
