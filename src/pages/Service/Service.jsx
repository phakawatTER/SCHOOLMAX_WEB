import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"
import { CONTENT_TEXT } from "appdata"

const content_text = CONTENT_TEXT["service"]

const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" }
}


const Service = (props) => {
    const { language } = props
    const getBulletPoints = () => (
        <ul className="listgroup">
            {content_text[language].bullet_points.map(bp => (
                <li>{`${bp}`}</li>
            ))}
        </ul>
    )
    return (
        <>
            <Container fluid={"xl"} className="content-fade-in">

                <Row className="mx-0">
                    <img src={require("./assets/Services-banner.jpg")} className="img-banner" />
                </Row>
                <Row className="pr-5 pl-5 pt-5 mx-0">
                    <Card className="text-left border-0" style={{ ...customStyle.transparent }}>
                        <CardBody>
                            <h5>
                                {content_text[language].text1}
                            </h5>
                        </CardBody>
                    </Card>
                </Row>
                <Row className="pr-5 pl-5 mx-0">
                    <Card className="text-left border-0" style={{ ...customStyle.transparent }}>
                        <CardBody>
                            {getBulletPoints()}
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default Service;