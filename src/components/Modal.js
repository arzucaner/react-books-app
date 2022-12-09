import react from 'react';
const Modal=()=>{
    return(
        <>
             <div className="overlay">
                  <div className="overlay-inner">
                  <button className="close"><i class="fa-solid fa-timer"></i></button>
                    </div>
             </div>
        </>
    )
}
export default Modal;