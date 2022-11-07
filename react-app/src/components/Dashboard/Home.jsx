import React,{useState,useEffect} from 'react'

import './home.scss'
import bg from '../../images/bg.png'
import axios from 'axios'
const url = `http://localhost:5000/api/auth`

const Home = () => {
  const [myFiles,setFiles] = useState([])

  // useEffect(() => {
  //  const fetchData =async  () =>{
  //   try {
  //     const res = await axios.get('http://localhost:5000/api/auth/getfiles')
  //     console.log(res.data)
  //     setFiles(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //  }
  //  fetchData()
  // }, [])

   useEffect(() => {
    const multipleFileUpload = async () =>{
      try {
          const {data} = await axios.get(`${url}/upload/getfiles`)
          // return res.data
          setFiles(data)
      } catch (error) {
       console.log(error)
      }
 }
 multipleFileUpload()
   }, [])
   

  
  return (
    <div className="home">
         <img src={bg} alt="cock" />
         
         <div className="imageContainer">
         {
          myFiles?.map((val,i)=>(
            <div key={val._id}>
              <img src={`http://localhost:5000/${val.fileName}`} width="100px" height="100px" alt="g" />
            </div>
          ))
         } 
         </div>
    </div>
  )
}

export default Home