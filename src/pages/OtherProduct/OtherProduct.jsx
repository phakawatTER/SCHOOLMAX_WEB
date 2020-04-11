import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"
import Product1 from "./assets/image-1.jpg"
import Product2 from "./assets/image-2.jpg"
import CatalogTH from "./assets/catalog-icon---th.png"
import CatalogEN from "./assets/catalog-icon---en.png"
import { CONTENT_TEXT } from "appdata"

const product1_catalog_path = require("./catalog/sample.odt")
const product2_catalog_path = require("./catalog/sample.odt")

const content_text = CONTENT_TEXT["product"]

const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" },
    catalog_button: { maxHeight: 50, cursor: "pointer" },
}


const OtherProduct = (props) => {
    const { language } = props
    const BenQInteractiveFlatPanel = () => {
        let product = content_text[language].product[0]
        let product_description = content_text[language].product_description[0]
        let product_bullet_points = content_text[language].product_bullet_points[0]
        let { learnmore_right } = content_text[language]
        return (
            <>
                <Card className="border-0 mx-0" >
                    <CardHeader className="border-0" style={{ ...customStyle.transparent }}>
                        <CardTitle>
                            <h1 className="text-disabled pl-4">
                                <b>
                                    {product}
                                </b>
                            </h1>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="pl-5">
                        <Row>
                            <Col md={6}>
                                <h4>
                                    {product_description}
                                </h4>
                            </Col>
                            <Col md={12}>
                                <ul className="listgroup">
                                    {product_bullet_points.map(point => {
                                        return (
                                            <li className="text-disabled">{point}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>
                                    {learnmore_right}
                                </h5>
                            </Col>
                            <Col>
                                {
                                    <a href={product1_catalog_path}>
                                        <img src={language == "th" ? CatalogTH : CatalogEN} style={{ ...customStyle.catalog_button }} />
                                    </a>
                                }
                            </Col>
                        </Row>
                        <img src={Product1} className="img-banner px" />
                    </CardBody>
                </Card>

            </>)
    }

    const BenQSmartProjector = () => {
        const { language } = props

        let product = content_text[language].product[1]
        let product_description = content_text[language].product_description[1]
        let product_bullet_points = content_text[language].product_bullet_points[1]
        let { learnmore_left } = content_text[language]

        return (
            <>


                <Card className="border-0 faded-row mx-0">
                    <CardHeader className="border-0" style={{ ...customStyle.transparent }}>
                        <CardTitle>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="pl-5">
                        <Row>
                            <Col md={4}></Col>
                            <Col md={8}>
                                <h1 className="text-disabled pl-2" align="left">
                                    <b>
                                        {product}
                                    </b>
                                </h1>
                            </Col>
                        </Row>
                        <Row className={"pt-4 mx-0"}>
                            <Col md={4} />
                            <Col md={8}>
                                <h4>
                                    {product_description}
                                </h4>
                            </Col>
                        </Row>
                        <Row className={"pt-4 mx-0"}>

                            <Col align="right" md={4}>
                                {
                                    <a href={product2_catalog_path}>
                                        <img href={product1_catalog_path} src={language == "th" ? CatalogTH : CatalogEN} style={{ ...customStyle.catalog_button }} />
                                    </a>
                                }
                            </Col>
                            <Col md={8} align="left" >
                                <h5>
                                    {learnmore_left}
                                </h5>
                            </Col>
                        </Row>
                        <br />

                        <img src={Product2} className="img-banner px" />

                    </CardBody>
                </Card>
            </>)
    }


    return (
        <>
            <Container fluid={"xl"} className="content-fade-in">
                <Row className={"mx-0"}>
                    <img src={require("./assets/Other-products-banner.jpg")} className="img-banner" />
                </Row>

                <h1 className="text-primary ml-5 py-5">
                    <b>
                        {content_text[language].title}
                    </b>
                </h1>
                {BenQInteractiveFlatPanel()}
                {BenQSmartProjector()}
            </Container>
        </>
    )
}
export default OtherProduct;