import React from 'react'
import {Button} from 'semantic-ui-react'

const SummaryModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <Button onClick={handleClose}>Exit without saving</Button>
        </section>
      </div>
    );
  };

  export default SummaryModal


















// import React, {useState} from 'react'
// import Modal from 'react-modal';
 

// const SummaryModal = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false)
//     return (
//         <div>
//             <Modal isOpen={modalIsOpen}>
//                 HELLO
//             </Modal>
//         </div>
//     )
// }

// export default SummaryModal