import React, { useContext, useState } from 'react';
import '../../App.css';
import DeletePopup from './DeletePopup';
import EditPopup from './EditPopup';
import Card from './Card';
import PagesButton from './PagesButton';
import GlobalContext from '../context/GlobalContext';

export default function Grid({ list }) {
  const { hooks } = useContext(GlobalContext);
  
  const {

    deletePopup,
    setDeletePopup,
    showDeletePopup,
    editPopup,
    setEditPopup,
    showEditPopup,
    currentPatient,
    setCurrentPatient,
  } = hooks;

  return <div>
    <div className="grid">
      { typeof list !== "undefined" &&
        list.map((patient) => (
          <Card patient={ patient }/>
          ))
        }
      { deletePopup && <DeletePopup toggle={setDeletePopup} currentPatient={currentPatient} /> }
      { editPopup && <EditPopup toggle={setEditPopup} currentPatient={currentPatient} /> }
    </div>
    <div className="pages-btn-container">
      <PagesButton cardsList={ list }/>
    </div>
  </div>
};