"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import ModalLayout from "./ModalLayout";
const ServicePopup = () => {
  const { setServiceModal, serviceModal } = useContext(context);
  console.log('serviceModal', serviceModal);
  return (
    <ModalLayout nullValue={setServiceModal}>
      <div className="service_informations">
        <div className="image">
          <img src="/img/thumbs/4-2.jpg" alt="img" />
          <div className="main" data-img-url={serviceModal.img} />
        </div>
        <div className="title">
          <h3>{serviceModal.title}</h3>
        </div>
        <div className="description">
          {
            serviceModal.desc
          }
        </div>
      </div>
    </ModalLayout>
  );
};
export default ServicePopup;
