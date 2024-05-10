import React from "react";
import Modal from "react-modal";
import styles from "./RightDrawer.module.css"; // Create a CSS module file

const RightDrawer = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Drawer Modal"
      className={styles.RightDrawer} // Apply styles from the module
      overlayClassName={styles.overlay} // Apply styles for the overlay
    >
      <button className={styles.cancelButton} onClick={onRequestClose}>
        X
      </button>
      <div>
        <h2>Your Modal Content</h2>
        <p>This is the content of your modal.</p>
      </div>
      {children}
    </Modal>
  );
};

export default RightDrawer;
