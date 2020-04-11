import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"
import { CONTENT_TEXT } from "appdata"
const content_text = CONTENT_TEXT["software"]

const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" }
}


const Software = (props) => {
    const { language } = props
    return (
        <>
            <Container fluid={"xl"} className="content-fade-in">

                <Row className={"mx-0"}>
                    <img src={require("./assets/Software-banner.jpg")} className="img-banner" />
                </Row>
                <Row className="pt-5 pb-5 mx-0">
                    <Col md={6} align="center">
                        <img src={require("./assets/SCHOOLMax-Software-logo.png")} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                    <Col md={6} align="center" >
                        <Card className="content-text-card mx-auto border-0">
                            <CardBody >
                                <h5 className="text-left">
                                    {content_text[language].text1}
                                </h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="faded-row pt-5 pb-5 mx-0">
                    <Col md={6} align="center" >
                        <Card className="content-text-card mx-auto border-0" style={{ ...customStyle.transparent }}>
                            <CardBody>
                                <h5 className="text-left">
                                    {content_text[language].text2}
                                </h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} align="center">
                        <img src={require("./assets/5-star-logo.png")} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                </Row>

                <Row className="pt-5 pb-5 mx-0">
                    <Col md={4} align="center" >
                        <img src={require("./assets/Integration-logo.png")} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                    <Col md={8} align="center" >
                        <Card className="content-text-card mx-auto border-0">
                            <CardBody>
                                <h5 className="text-left">
                                    {content_text[language].text3}
                                </h5>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
                <hr />
                <Row className="pt-5 pb-5 mx-0">
                    <Col md={4} align="center" >
                        <img src={require("./assets/Systemization-logo.png")} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                    <Col md={8} align="center" >
                        <Card className="content-text-card mx-auto border-0">
                            <CardBody>
                                <h5 className="text-left">
                                    {content_text[language].text4}
                                </h5>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
                <hr />
                <Row className="pt-5 pb-5 mx-0">
                    <Col md={4} align="center" >
                        <img src={require("./assets/Minimization-logo.png")} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                    <Col md={8} align="center" >
                        <Card className="content-text-card mx-auto border-0">
                            <CardBody>
                                <h5 className="text-left">
                                    {content_text[language].text5}
                                </h5>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row className="mx-0">
                    <img src={require("./assets/24-7-image.jpg")} className="img-banner" />
                </Row>
                <Row className="mx-0">
                    <img src={require("./assets/Discount-image.jpg")} className="img-banner" />
                </Row>
            </Container>
        </>
    )
}
export default Software;