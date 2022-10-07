import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = ReactDOM.createRoot(document.getElementById('modal'));
// modalRoot.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const Modal = props => {
    return ReactDOM.createPortal(
        <div>jjjjjjjj</div>,
        document.getElementById('modal')
    );
}
export default Modal;