import React, { useEffect, useState} from 'react'
import { doc,collection, addDoc,getDocs ,deleteDoc,updateDoc} from "firebase/firestore"; 
import { db } from '../firebase';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';


const Todoapp = () => {
  
  const [inputVal, setInputVal] = useState("");
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);
 
const handleSubmit = e => {
    e.preventDefault();
    // setrefresh(!refresh);
    setInputVal("");
}



// add todo
const addTodo = async () => {
  if(inputVal){
  setRefresh(!refresh);
    const todoObj = {
       inputVal,
      };
      try {
        const docRef = await addDoc(collection(db, "todos"),todoObj );
      } catch (e) {
        console.error("Error adding document: ", e);
      }}
      else{
        toast.error('Empty input!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

    //delete todo
    const deleteTodo = async (id)=>{
      

      await deleteDoc(doc(db, "todos", id));
     setRefresh(!refresh);

      }
      const updateTodo = async(id)=>{
        
          const editValue = prompt("Enter Updated Todo");
      
          const userObj = {
            inputVal: editValue,
          };
      
          await updateDoc(doc(db, "todos", id), userObj);
          setRefresh(!refresh);
        
        }
        const readTodo = async ()=>{
          try {
            const arr = [];
            const docSnap = await getDocs(collection(db, "todos"));
      
            docSnap.forEach((doc) => {
              // console.log("doc", doc.data());
              // console.log("id", doc.id);
              arr.push({
                ...doc.data(),
                id: doc.id,
              });
            });
      
            // console.log("arr", arr);
            setUserData([...arr]);
          } catch (error) {
            console.log("error", error);
          }
          }

          useEffect(() => {
            readTodo();
            // console.log(userData);
          }, [refresh])



  return (
    <>
      <div className='grid place-content-center p-10'>
        <div className='shadow-2xl px-20 text-center'>
            <h1 className=' text-3xl p-10 font-mono font-extrabold'>Todo Application</h1>
      <div>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
        
         <input type="text" placeholder='Enter todo here' value={inputVal} onChange={e=>setInputVal(e.target.value)}
  className='p-2 text-2xl rounded-md'/>
        <button className='p-3 bg-blue-600 font-bold text-white rounded-md ' onClick={addTodo}>Add Todo</button>
        </div>
    </form>

    <div className='py-5'>
    {
      userData.map((value,index)=>{
        return (
          <li key={index} className='flex justify-between my-3 p-3 rounded-md text-2xl text-white  bg-blue-600 shadow-2xl'>
          <div className=''>
          {value.inputVal}
          </div>
          <div className="">
            <button  className='mx-2'  onClick={()=>{updateTodo(userData[index].id)}} >  <FaEdit /></button>
            <button  className='mx-2' onClick={()=>{deleteTodo(userData[index].id)}} >   <MdDeleteForever /></button>
           </div> 
        </li>
        )
        
      })
    }
    </div>
      </div>
      </div>
      </div>



    </>
  )
}

export default Todoapp
