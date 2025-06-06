import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  langues,
  formation,
  softSkills,
  technologies,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Cv</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">langages et technologies</h3>
          </Col>
          <Col lg="17">
            {technologies.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>


        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">formation</h3>
          </Col>
          <Col lg="17">
            {formation.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>


        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">soft-skills</h3>
          </Col>
          <Col lg="17">
            {softSkills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>




      
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4 sous-chapitre-profil">langues</h3>
          </Col>
          <Col lg="17">
            {langues.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
