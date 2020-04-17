import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"
import Product1 from "./assets/image-1.jpg"
import Product2 from "./assets/image-2.png"
import CatalogTH from "./assets/catalog-icon---th.png"
import CatalogEN from "./assets/catalog-icon---en.png"
import { CONTENT_TEXT } from "appdata"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

const product1_catalog_path = require("./catalog/2019 BenQ Corp Brochure_0903_FN_web.pdf")
const product2_catalog_path = require("./catalog/2019 BenQ Corp Brochure_0903_FN_web.pdf")

const content_text = CONTENT_TEXT["product"]

const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" },
    catalog_button: { maxHeight: 50, cursor: "pointer" },
}


const OtherProduct = (props) => {
    const { language } = props
    const showProductImage = (img) => {
        props.useModal(
            () => (
                <>
                    {/* <ModalHeader toggle={() => { props.toggleModal() }}>

                    </ModalHeader> */}
                    <img src={img} className="w-100" onClick={() => { props.toggleModal() }} />
                </>
            )
        )
    }
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
                            <h1 className="text-disabled ml-5 text-responsive-h1 d-none d-sm-block font-semi-bold">
                                {product}
                            </h1>
                            <h1 className="text-disabled d-block d-sm-none text-responsive-h1 font-semi-bold ">
                                {product}
                            </h1>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="">
                        <Row >
                            <Col md={6}>
                                <h4 className={"content-text-xl ml-5 d-none d-sm-block"}>
                                    {product_description}
                                </h4>
                                <h4 className={"content-text-xl d-block d-sm-none"}>
                                    {product_description}
                                </h4>
                            </Col>
                            <Col md={12}>
                                <ul className="listgroup ml-5 d-none d-sm-block">
                                    {product_bullet_points.map(point => {
                                        return (
                                            <li className="text-disabled">{point}</li>
                                        )
                                    })}
                                </ul>
                                <ul className="listgroup d-block d-sm-none">
                                    {product_bullet_points.map(point => {
                                        return (
                                            <li className="text-disabled">{point}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="align-items-center d-flex">
                                <span className={"content-text-xl align-items-center ml-5 d-none d-sm-block"}>
                                    {learnmore_right}
                                </span>
                                <span className={"content-text-xl align-items-center d-block d-sm-none"}>
                                    {learnmore_right}
                                </span>
                            </Col>
                            <Col>
                                {
                                    <a href={product1_catalog_path}>
                                        <img src={language == "th" ? CatalogTH : CatalogEN} style={{ ...customStyle.catalog_button }} />
                                    </a>
                                }
                            </Col>
                        </Row>
                        <img src={Product1} className="img-banner magnify-on-hover" onClick={() => showProductImage(Product1)} />
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
                <Card className="border-0 faded-row mx-0 pt-5">
                    <CardHeader className="border-0" style={{ ...customStyle.transparent }}>
                        <CardTitle>
                            <Row>
                                <Col></Col>
                                <Col xs={12} md={6}>
                                    <h1 className="text-disabled text-responsive-h1 font-semi-bold" align="left">
                                        {product}
                                    </h1>
                                </Col>
                            </Row>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className="">
                        <Row className={"pt-0 mx-0"}>
                            <Col />
                            <Col xs={12} md={6}>
                                <h4 className="content-text-xl">
                                    {product_description}
                                </h4>
                            </Col>
                        </Row>
                        <Row className={"pt-4 mx-0"}>

                            <Col align="right" className={"mx-0"}>
                                {
                                    <a href={product2_catalog_path}>
                                        <img href={product1_catalog_path} src={language == "th" ? CatalogTH : CatalogEN} style={{ ...customStyle.catalog_button }} />
                                    </a>
                                }
                            </Col>
                            <Col align="left" className={"align-items-center d-flex "}  >
                                <span className={"content-text-xl"}>
                                    {learnmore_left}
                                </span>
                            </Col>
                        </Row>
                        <br />
                        <img src={Product2} className="img-banner magnify-on-hover" onClick={() => showProductImage(Product2)} />
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

                <h1 className="text-primary ml-5 py-5 text-responsive-h1 font-semi-bold">
                    {content_text[language].title}
                </h1>
                {BenQInteractiveFlatPanel()}
                {BenQSmartProjector()}
            </Container>
        </>
    )
}
export default OtherProduct;