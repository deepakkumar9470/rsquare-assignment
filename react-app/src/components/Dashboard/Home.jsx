import React, { useState, useEffect } from 'react'

import './home.scss'
import bg from '../../images/bg.png'
import { getMultipleFiles } from '../../services/api'


const Home = () => {
  const [myFiles, setFiles] = useState([])

  useEffect(() => {
    const getFilesData = async () => {
      try {
        const fileLists = await getMultipleFiles()
        setFiles(fileLists)
      } catch (error) {
        console.log(error)
      }
    }
    getFilesData()
  }, [])


  return (
    <div className="home">
      <img src={bg} alt="cock" />

      <div className="imageContainer">
        {
          myFiles?.map((val, i) => (
            <div key={val._id}>
              <div className="row">
                {
                  val.files.map((item, i) => (
                    <div>
                      <img src='https://images.pexels.com/photos/11757303/pexels-photo-11757303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="myImage" />

                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home