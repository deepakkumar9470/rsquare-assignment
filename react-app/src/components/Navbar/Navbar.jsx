import React, { useState } from 'react'
import MyModal from '../MyModal/MyModal';

import './navbar.scss'
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>

      <div className='navContainer'>

        <div className="titleHead">
          <h1>Media Library</h1>
          <span>0 images</span>
        </div>

        <div className="buttonUpload">

          <button onClick={() => {
            setModalOpen(true);
          }}>Upload new image</button>

        </div>


      </div>

      {modalOpen && <MyModal setOpenModal={setModalOpen} />}

    </>
  )
}

export default Navbar