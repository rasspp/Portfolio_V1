import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/CV_Ridho_Akbar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ExpSection } from "./ExpSection";

function Experience() {
   return (
      <Container fluid className="experience-section hover-area-heading">
         <Container>
            <Row>
               <Col md={12} className="experience-heading">
                  <h1>
                     My <strong className="strong-animation"> Experience </strong>
                  </h1>
                  <Button href={pdf} target="_blank" className="download-cv">
                     <span>CV</span>
                     <span>
                        <AiOutlineDownload />
                     </span>
                  </Button>
               </Col>
            </Row>

            <Col md={12} className="vertical-line">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="line"></div>
            </Col>

            <ExpSection section="work" h2Start="Best Freelance" />

            <Col md={12} className="vertical-line">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="line"></div>
            </Col>

            <ExpSection section="education" h2End="History" />
         </Container>
      </Container>
   );
}

export default Experience;
