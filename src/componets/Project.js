import { Container, Row, Nav, Tab, Col } from "react-bootstrap";
import {Card} from "./Cards"


export const Project = () => {
    const projects = [
        {
            title: "Crypto App",
            description: "comming soon",
            imageUrl: "..."
        },
        {
            title: "Crypto App",
            description: "comming soon",
            imageUrl: "..."
        },
        {
            title: "Crypto App",
            description: "comming soon",
            imageUrl: "..."
        },
        {
            title: "Crypto App",
            description: "comming soon",
            imageUrl: "..."
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Past Projects
                    </h2>
                    <p>
                        Comming soon
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                         <Nav.Item>
                            <Nav.Link eventKey="third">
                                Tab 3
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <Card 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second"> Comming soon</Tab.Pane>
                        <Tab.Pane eventKey="third"> Comming soon</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={"bgImage"}></img>

        </section>
    )
}