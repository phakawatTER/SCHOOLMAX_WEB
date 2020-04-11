import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "./home_carousel/slide1.jpg"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"
import { useHistory } from "react-router-dom"
import { CONTENT_TEXT } from "../../appdata";

let carousel_images = [
    require("./home_carousel/slide1.jpg"),
    require("./home_carousel/slide2.jpg"),
    require("./home_carousel/slide3.jpg"),
]
let content_image = require("./image-1.png")
let content_text = CONTENT_TEXT["home"]

const Home = (props) => {
    const history = useHistory()
    const { language } = props
    return (
        <>
            <Container fluid={"xl"} className="content-fade-in">

                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={2000}
                >
                    {
                        carousel_images.map(image_path => (
                            <div>
                                <img src={image_path} />
                            </div>
                        ))
                    }
                </Carousel>
                <Row className="pb-5 mx-0">
                    <Col md={6} align="center"> <img src={content_image} className="img-responsive" /></Col>
                    <Col md={6} align="center">

                        <Card className="card-plain content-text-card border-0"  >
                            <CardBody>
                                <h4>
                                    {content_text[language].text1}
                                </h4>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <h1 className="ml-5">
                    <b>
                        {content_text[language].link_option}
                    </b>
                </h1>
                <Row className={"mx-0"}>
                    <Col md={4} className="text-center option-card primary-bg" onClick={() => history.push("/software")} >
                        <h1>
                            {content_text[language].option1}
                        </h1>
                    </Col>
                    <Col md={4} className="text-center option-card secondary-bg px-0" onClick={() => history.push("/service")}>
                        <h1>
                            {content_text[language].option2}
                        </h1>
                    </Col>
                    <Col md={4} className="text-center option-card warning-bg px-0" onClick={() => history.push("/product")}>
                        <h1>
                            {content_text[language].option3}
                        </h1>
                    </Col>
                </Row>
                <br />
                <br />
            </Container>
        </>
    )
}

export default Home;