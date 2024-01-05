import React, { useContext } from 'react';
import '../../App.css';
import GlobalContext from '../context/GlobalContext';
import previousPage from "../images/previousPageBtn.png";
import nextPage from "../images/nextPageBtn.png";

const PagesButton = ({ totalPages }) => {
  const { hooks } = useContext(GlobalContext);
  const { currentPage, handleNextPage, handlePrevPage } = hooks;

  return (
    <div>
      {totalPages > 1 && (
        <div>
          <button
            className="pages-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <img src={previousPage} width="24px" alt="logo" />
          </button>
          <span> {currentPage}/{totalPages} </span>
          <button
            className="pages-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <img src={nextPage} width="24px" alt="logo" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PagesButton;
