import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/images/logo1.jpg";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ padding: "10px 20px" }}
      >
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Navbar.Brand
            href="/"
            style={{
              marginRight: "20px",
              fontSize: "24px",
              marginLeft: "20px",
            }}
          >
            SkillConnect
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginRight: "20px" }}>
              <Nav.Link
                href="/login"
                className="text-light"
                style={{ marginLeft: "1200px" }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="/signup"
                className="text-light"
                style={{ marginLeft: "10px" }}
              >
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="home-container position-relative">
        <div className="particles-container">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#0038a4",
                },
                links: {
                  color: "#00d4ff",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 0.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 0.5, max: 2.5 },
                },
              },
              detectRetina: true,
            }}
            className="particles-effect h-100"
          />
        </div>

        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Image
                src={logo1}
                alt="Home Page Image"
                fluid
              />
            </Col>
            <Col md={6} style={{ display: "flex", alignItems: "center" }}>
              <div>
                <h2
                  className="fw-bold"
                  style={{ fontSize: "32px", marginBottom: "20px" }}
                >
                  Welcome to SkillConnect
                </h2>
                <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                  Unlock your potential with SkillConnect, the ultimate platform
                  for online learning and growth. Explore expertly curated
                  courses across diverse fields, designed to help you upskill or
                  discover new passions. With interactive tools, gamified
                  learning, and personalized recommendations, SkillConnect makes
                  education engaging and efficient. Track your progress, build a
                  professional portfolio, and connect with a vibrant community
                  of learners and mentors. Enjoy flexible scheduling,
                  cross-platform access, and real-time performance analytics to
                  stay on top of your goals. Secure payment gateways and
                  AI-driven features ensure a seamless, rewarding experience.
                  Join SkillConnect today and take the first step toward a
                  brighter future!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
