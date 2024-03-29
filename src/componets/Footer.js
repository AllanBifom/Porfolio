import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                <Col sm={6}>
                    <img src="logo" alt="Logo" />
                </Col>

                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src="social icons" /></a>
                        <a href=""><img src="social icons" /></a>
                        <a href=""><img src="social icons" /></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}