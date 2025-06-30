import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CSS/ProjectCard.css";

const ProjectCard = ({
  title,
  image,
  tags,
  description,
  codeLink,
  liveLink,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="project-card-custom" onClick={handleShow}>
        <img src={image} className="project-img" alt={title} />
        <div className="project-content">
          <div className="mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-purple me-1 mb-1">
                {tag}
              </span>
            ))}
          </div>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-white">{description.slice(0, 70)}...</p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-white border-0" />
        <Modal.Body className="text-white rounded" style={{ backgroundColor: '#141321' }}>
          <img
            src={image}
            alt={title}
            className="img-fluid rounded mb-3 d-block mx-auto"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
          <h4 className="fw-bold text-center">{title}</h4>
          <div className="text-center mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-purple me-1 mb-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white px-3 text-center">{description}</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              className="btn-gradient"
              onClick={() => window.open(codeLink, "_blank")}
            >
              View Code
            </Button>

            <Button
              className="btn-gradient"
              onClick={() => window.open(liveLink, "_blank")}
            >
              View Live App
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
