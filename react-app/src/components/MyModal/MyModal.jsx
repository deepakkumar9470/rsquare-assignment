import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './mymodal.scss'

const url = `http://localhost:5000/api/auth`

const MyModal = ({setOpenModal}) => {

  
  const [myfiles,setMyfiles] = useState('')
  const [title,setTitle] = useState('')

  // const navigate = useNavigate()

  const multipleFileUpload = async () =>{

  }  
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>

            <div className="title">
              <h1>Upload Files</h1>
            </div>
            <div className="body">
              <label htmlFor="file">Choose File from media</label>
              <input 
                type="text"  
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                placeholder="Enter Title"/>
              <input 
                 type="file"
                 multiple 
                 onChange={(e)=>setMyfiles(e.target.files)}
                 />
              <button onClick={()=>multipleFileUpload()}>Upload</button> 
            </div>
           
            
          </div>
        </div>
      );
}

export default MyModal