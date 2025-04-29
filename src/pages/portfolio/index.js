import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Modal from "../../components/Modal"; // Importation de la modale

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    console.log("Modale ouverte avec le projet :", project); // Debug log
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item" onClick={() => openModal(data)}>
              <img src={data.img} alt={data.description || "Projet portfolio"} />
              <div className="content">
                <p>{data.description}</p>
                <span className="view-project-label">Voir Plus</span>
              </div>
            </div>  
            );
          })}
        </div>
        {/* Modale */}
        <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      </Container>
    </HelmetProvider>
  );
};