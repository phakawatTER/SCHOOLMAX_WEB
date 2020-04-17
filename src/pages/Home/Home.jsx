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
let content_image_th = require("./image-1--th.png")
let content_image_en = require("./image-1--en.png")
let content_image = {
    th: content_image_th,
    en: content_image_en
}

let content_text = CONTENT_TEXT["home"]
const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" }
}

const Home = (props) => {
    const history = useHistory()
    const { language } = props
    return (
        <>
            <Container fluid={"xl"} className="content-fade-in">

                <Carousel
                    showThumbs={false}
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
                <Row className="pt-5 pb-5 mx-0">
                    <Col md={6} align="center">
                        <img src={content_image[language]} className="img-responsive" style={{ ...customStyle.image_content }} />
                    </Col>
                    {/*  CONTENT TEXT */}
                    <Col md={6} align="center" >
                        <Card className="content-text-card mx-auto border-0 h-100">
                            <CardBody className={"align-items-center d-flex justify-content-center"}>
                                <span className="text-left content-text-md">
                                    {content_text[language].text1}
                                </span>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <h1 className="ml-5 text-responsive-h1 ">
                    <b>
                        {content_text[language].link_option}
                    </b>
                </h1>
                <Row className={"mx-0"}>
                    <Col md={4} className="letter-spacing-animation text-center option-card primary-bg" onClick={() => history.push("/software")} >
                        <h1 className="text-responsive-h1 font-semi-bold">
                            {content_text[language].option1}
                        </h1>
                    </Col>
                    <Col md={4} className="letter-spacing-animation text-center option-card secondary-bg px-0" onClick={() => history.push("/product")}>
                        <h1 className="text-responsive-h1 font-semi-bold">
                            {content_text[language].option2}
                        </h1>
                    </Col>
                    <Col md={4} className="letter-spacing-animation text-center option-card warning-bg px-0" onClick={() => history.push("/service")}>
                        <h1 className="text-responsive-h1 font-semi-bold">
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