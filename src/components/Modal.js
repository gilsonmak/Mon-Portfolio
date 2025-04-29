import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  // Tableau des détails du projet
  const details = [
    { label: "PROJET", value: project?.Projet },
    { label: "CONTEXTE", value: project?.Contexte },
    { label: "TECHNOLOGIES", value: project?.Technologies },
    { label: "LIEN", value: project?.link },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>

        {/* Image du projet */}
        <img src={project?.img} alt="Projet" className="modal-image" />

        {/* Détails du projet */}
        {details.map((item, index) => (
          <p key={index}>
            <strong>{item.label} :</strong> {item.value || "Non spécifié"}
          </p>
        ))}

        {/* Lien vers le projet */}
        {project?.link && (
          <a href={project.link} className="modal-link" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
