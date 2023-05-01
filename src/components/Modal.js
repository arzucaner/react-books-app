import React from 'react';

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const thumbnail = item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={handleModalClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
            <path
              className="secondary"
              fillRule="evenodd"
              d="M18.2929 5.29289C18.6534 4.93241 19.2206 4.90468 19.6129 5.2097C20.0052 5.51473 
                 20.0329 6.08195 19.6714 6.44243L19.6129 6.4903L13.103 12L19.6129 17.5097C20.0052 
                 17.8147 20.0329 18.3819 19.6714 18.7424C19.3099 19.1028 18.7427 19.1306 18.3515 
                 18.8256L18.2929 18.7777L11.783 12.2678L5.29289 18.7777C4.93241 19.1382 4.36519 
                 19.1659 3.97395 18.8609C3.58272 18.5559 3.555 17.9887 3.91548 17.6282L3.97395 
                 17.5803L10.4838 12.0903L3.97395 6.58031C3.58272 6.22509 3.555 5.65787 3.91548 
                 5.2974C4.27596 4.93692 4.84318 4.9092 5.23442 5.21422L5.29289 5.26212L11.8038 
                 11.7721L18.2929 5.29289Z"
            />
          </svg>
        </button>
        <div className="inner-box">
          {thumbnail && <img src={thumbnail} alt={item.volumeInfo.title} />}
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            {item.volumeInfo.authors && <h3>{item.volumeInfo.authors.join(', ')}</h3>}
            {item.volumeInfo.publisher && item.volumeInfo.publishedDate && (
              <h4>
                {item.volumeInfo.publisher}
                <span>{` - ${item.volumeInfo.publishedDate}`}</span>
              </h4>
            )}
            {item.volumeInfo.previewLink && (
              <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                <button>More</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

   