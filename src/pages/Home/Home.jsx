import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "./home_carousel/slide1.jpg"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"

let carousel_images = [
    require("./home_carousel/slide1.jpg"),
    require("./home_carousel/slide2.jpg"),
    require("./home_carousel/slide3.jpg"),
]
let content_image = require("./image-1.png")
let content_text = {
    th: {
        text1: "โดยยึด 3 แนวทางหลัก การศึกษา เทคโนโลยี และความยั่งยืน ผ่านซอฟต์แวร์ สินค้าต่างๆ ตลอดถึงบริการอีกมากมาย ให้กับทั้งสถานศึกษาและหน่วยการศึกษาในองกรณ์",
        link_option: "ลิ้งค์ด่วน",
        option1: "ซอฟต์แวร์โรงเรียน",
        option3: "สินค้าอื่นๆ",
        option2: "บริการ",
    },
    en: {
        text1: "ENGLISH TEXT TO BE PLACED HERE..."
    }
}

const Home = (props) => {
    const { language } = props
    return (
        <>
            <Container fluid={"xl"}>
                <Carousel>
                    {
                        carousel_images.map(image_path => (
                            <div>
                                <img src={image_path} />
                            </div>
                        ))
                    }
                </Carousel>
                <Row className="pb-5">
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
                <Row>
                    <Col md={4} className="text-center option-card primary-bg">
                        <h1>
                            {content_text[language].option1}
                        </h1>
                    </Col>
                    <Col md={4} className="text-center option-card secondary-bg">
                        <h1>
                            {content_text[language].option1}
                        </h1>
                    </Col>
                    <Col md={4} className="text-center option-card warning-bg">
                        <h1>
                            {content_text[language].option1}
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