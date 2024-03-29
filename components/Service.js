import { context } from "@/context/context";
import { useContext, useEffect } from "react";

const Service = () => {
  const { modalToggle, setServiceModal, serviceData } = useContext(context);
   return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Service</span>
        <h3>Never compromise with quality</h3>
      </div>
      <div className="service_list">
        <ul>
          {serviceData.map((service) => (
            <li key={service.id}>
              <div className="list_inner">
                <span className="icon">
                  <img
                    className="svg"
                    src={service.img}
                    alt="image"
                  />
                </span>
                <h3 className="title">{service.name}</h3>
                {service.charge && <h4 style={{marginBottom : "10px",  border : "1px solid"}}>{service.charge}</h4>}
                <p className="text">{service.desc}</p>
                <a
                  className="iknow_tm_full_link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Service;
