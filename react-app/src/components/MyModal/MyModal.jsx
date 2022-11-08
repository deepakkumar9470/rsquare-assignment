import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { multipleFilesUpload } from '../../services/api'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './mymodal.scss'



const MyModal = ({ setOpenModal }) => {

  const [myfiles, setMyfiles] = useState('')
  const [title, setTitle] = useState('')

  const [progressBar, setProgressBar] = useState(0)

  const navigate = useNavigate()

  const multipleProgressOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent
      const percentage = Math.floor(((loaded / 100) * 100) / (total / 100))
      setProgressBar(percentage)
    }
  }
  const multipleFileUpload = async () => {
    const formData = new FormData()
    formData.append('title', title)
    for (let i = 0; i < myfiles.length; i++) {
      formData.append('files', myfiles[i])

    }

    await multipleFilesUpload(formData, multipleProgressOptions)
    setProgressBar(0)
    navigate('/')

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
          <CircularProgressbar
            value={progressBar}
            text={`${progressBar}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '18px',
              pathTransition: 0.5,
              pathColor: `rgba(62, 152, 199, ${progressBar / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7'
            })}
          />
        </div>
        <div className="body">
          <label htmlFor="file">Choose File from media</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title" />
          <input
            type="file"
            multiple
            onChange={(e) => setMyfiles(e.target.files)}
          />
          <button onClick={() => multipleFileUpload()}>Upload</button>
        </div>


      </div>
    </div>
  );
}

export default MyModal