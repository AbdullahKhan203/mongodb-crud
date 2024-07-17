"use client"
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <button onClick={openModal}>{props.title}</button>
      <ProductModal product={props.product} isUpdate={props.isUpdate} isOpen={isModalOpen} onClose={closeModal} status={props.status}  />
    </div>
  );
};

export default Modal;
