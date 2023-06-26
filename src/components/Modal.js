import React from 'react';

const Modal = ({ show, item: { volumeInfo }, onClose }) => {
  if (!show) {
    return null;
  }

  const thumbnail = volumeInfo?.imageLinks?.smallThumbnail;

  const handleModalClose = () => {
    onClose();
  };

  return (
    <>
      <div className={`overlay ${show ? 'show' : ''}`}>
        <div className="overlay-inner">
          <button className="close" onClick={handleModalClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
              {/* Close button SVG path */}
            </svg>
          </button>
          <div className="inner-box">
            {thumbnail && <img src={thumbnail} alt={volumeInfo.title} />}
            <div className="info">
              <h1>{volumeInfo.title}</h1>
              {volumeInfo.authors && <h3>{volumeInfo.authors.join(', ')}</h3>}
              {volumeInfo.publisher && volumeInfo.publishedDate && (
                <h4>
                  {volumeInfo.publisher}
                  <span>{` - ${volumeInfo.publishedDate}`}</span>
                </h4>
              )}
              {volumeInfo.previewLink && (
                <a href={volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                  <button>More</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
