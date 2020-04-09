import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container, Input, Button, FormGroup, Form } from "reactstrap"
import AddressIcon from "./assets/Address-icon.png"
import EmailIcon from "./assets/Email-icon.png"
import TelephoneIcon from "./assets/Telephone-icon.png"
import FacebookIcon from "./assets/Facebook-blue-icon.png"

const content_text = {
    th: {
        company:
        {
            title: "ติดต่อ",
            address_bold: "บริษัท แสงรุ่ง เอ็ดดูเคชั่น จำกัด",
            address: `99/99 หมู่1 ถนนราชพฤกษ์ บางขุนทอง บางกรวย
            นนทบุรี 11130`,
            email: "contach@saengroong.com",
            telephone: "092-369-3969, 088-499-8811",
            facebook: "SCHOOLMax World",
        },
        client: {
            title: "ติดต่อด่วน",
            name: "ชื่อ-นามสกุล",
            company: "บริษัท/โรงเรียน",
            email: "อีเมล",
            telephone: "โทรศัพท์",
            message: "ข้อความ",
            button_label: "ส่ง"
        }
    },
    en: {},
}


const customStyle = {
    image_content: { maxHeight: 50 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" },
    form_card: {
        maxWidth: 500,
    }
}


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            company: "",
            email: "",
            telephone: "",
            message: "",
        }
    }

    onChnageHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    contactCompanyHandler = () => {
        alert("Contact Sent...")
    }

    render() {
        const { language } = this.props
        const { name, company, email, telephone, message } = this.state
        const contactInfo = () => (
            <Card className="border-0">
                <CardHeader className="border-0" style={{ ...customStyle.transparent }} >
                    <CardTitle className="pt-5 text-center">
                        <h1>
                            <b>
                                {content_text[language].company.title}
                            </b>
                        </h1>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <Row className="m-4 pt-4">
                        <Col xs={4} align="center"><img src={AddressIcon} style={{ ...customStyle.image_content }} /></Col>
                        <Col xs={8} align="center" className="text-left">
                            <b>{content_text[language].company.address_bold}</b>{" "}
                            {content_text[language].company.address}
                        </Col>
                    </Row>
                    <Row className="m-4 pt-4">
                        <Col xs={4} align="center"><img src={EmailIcon} style={{ ...customStyle.image_content }} /></Col>
                        <Col xs={8} align="center" className="text-left">
                            {content_text[language].company.email}
                        </Col>
                    </Row>
                    <Row className="m-4 pt-4">
                        <Col xs={4} align="center"><img src={TelephoneIcon} style={{ ...customStyle.image_content }} /></Col>
                        <Col xs={8} align="center" className="text-left">
                            {content_text[language].company.telephone}
                        </Col>
                    </Row>
                    <Row className="m-4 pt-4">
                        <Col xs={4} align="center"><img src={FacebookIcon} style={{ ...customStyle.image_content }} /></Col>
                        <Col xs={8} align="center" className="text-left">
                            {content_text[language].company.facebook}
                        </Col>
                    </Row>

                </CardBody>
            </Card>

        )

        const clientContactForm = () => (
            <Card className="border-0 mx-auto">
                <CardHeader className="border-0" style={{ ...customStyle.transparent }} >
                    <CardTitle className="pt-5 text-center">
                        <h1>
                            <b>
                                {content_text[language].client.title}
                            </b>
                        </h1>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <Row className="d-flex justify-content-center">
                        <Col align="center" className="text-left">
                            <FormGroup>
                                <Label>{content_text[language].client.name}</Label>
                                <Input className="contact-input" onChange={(e) => this.onChnageHandler(e)} value={name} name={"name"} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col align="center" className="text-left">
                            <FormGroup>
                                <Label>{content_text[language].client.company}</Label>
                                <Input className="contact-input" onChange={(e) => this.onChnageHandler(e)} value={company} name={"company"} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col align="center" className="text-left">
                            <FormGroup>
                                <Label>{content_text[language].client.email}</Label>
                                <Input className="contact-input" onChange={(e) => this.onChnageHandler(e)} value={email} name={"email"} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col align="center" className="text-left">
                            <FormGroup>
                                <Label>{content_text[language].client.telephone}</Label>
                                <Input className="contact-input" onChange={(e) => this.onChnageHandler(e)} value={telephone} name={"telephone"} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col align="center" className="text-left">
                            <FormGroup>
                                <Label>{content_text[language].client.message}</Label>
                                <Input className="contact-input" type="textarea" onChange={(e) => this.onChnageHandler(e)} value={message} name={"message"} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button
                            onClick={this.contactCompanyHandler}
                            className="primary-bg btn-primary px-5">{content_text[language].client.button_label}</Button>
                    </Row>
                </CardBody>
            </Card>
        )

        return (
            <>
                <Container fluid={"xl"}>
                    <Row>
                        <img src={require("./assets/Contact-banner.jpg")} className="img-banner" />
                    </Row>
                    <Row>
                        <Col md={7}>
                            {contactInfo()}
                        </Col>
                        <Col md={5}>
                            {clientContactForm()}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Contact;