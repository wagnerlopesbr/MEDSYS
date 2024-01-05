import React, { useContext } from 'react';
import '../../App.css';
import Card from './Card';
import PagesButton from './PagesButton';
import GlobalContext from '../context/GlobalContext';
import DeletePopup from './DeletePopup';
import EditPopup from './EditPopup';

export default function Grid({ list, role }) {
  const { hooks } = useContext(GlobalContext);
  
  const { currentPage, deletePopup, setDeletePopup, currentPerson, editPopup, setEditPopup } = hooks;

  const maxColumns = 5;
  const maxRows = 2;

  const totalColumns = list.length;
  const totalPages = Math.ceil(totalColumns / (maxColumns * maxRows));

  const startIndex = (currentPage - 1) * maxColumns * maxRows;
  const endIndex = startIndex + (maxColumns * maxRows);
  const people = list.slice(startIndex, endIndex);

  const numColumns = totalColumns < maxColumns ? totalColumns : maxColumns;

  return (
    <div>
      { deletePopup &&
        <DeletePopup
          toggle={ setDeletePopup }
          currentPerson={ currentPerson }
          entityType={ role }
        />
      }
      { editPopup &&
        <EditPopup
          toggle={ setEditPopup }
          currentPerson={ currentPerson }
          entityType={ role }
        />
      }
      <div
        className="grid"
        style={
          {
            gridTemplateColumns: `
              repeat(${numColumns},
              minmax(min-content, 1fr))
            `
          }
        }
      >
        {typeof list !== "undefined" &&
          people.map((person) => (
            <Card key={ person.id } person={ person } />
          ))}
      </div>
      <div className="pages-btn-container">
        <PagesButton totalPages={ totalPages } />
      </div>
    </div>
  );
};