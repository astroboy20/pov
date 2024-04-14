import React, { useState, useEffect } from "react";
import styles from "./GalleryModal.module.css";
import ReactDOM from "react-dom";
import { ImCancelCircle } from "react-icons/im";
const GalleryModal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const modalContent = show ? (
    <>
      <div className={styles.overlay}>
        <div onClick={handleClose} className={styles.modal}>
          <div className={styles.header}>
            <ImCancelCircle size={"30px"} onClick={handleClose} color="white"/>
          </div>
          <div onClick={handleClose} className={styles.body}>{children}</div>
        </div>
      </div>
    </>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }
};

export { GalleryModal };
