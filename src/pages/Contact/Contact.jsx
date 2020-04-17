import React from "react"
import {
    Row,
    Col,
    CardHeader,
    CardTitle,
    Card,
    CardBody,
    Label,
    Container,
    Input,
    Button,
    FormGroup,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
} from "reactstrap"
import AddressIcon from "./assets/Address-icon.png"
import EmailIcon from "./assets/Email-icon.png"
import TelephoneIcon from "./assets/Telephone-icon.png"
import FacebookIcon from "./assets/Facebook-blue-icon.png"
import { API_SEND_EMAIL, CONTENT_TEXT } from "appdata"
import axios from "axios"

const modal_text = {
    th: {
        modal_header: "ส่งอีเมลเสร็จสิ้น",
        modal_body: "ข้อมูลการติดต่อของคุณส่งไปยังพนักงานเป็นที่เรียบร้อย",
        close_button: "ปิด"
    },
    en: {
        modal_header: "Email sent successfully",
        modal_body: "Your contact information has been successfully sent to our officer.",
        close_button: "Close"
    }
}
const content_text = CONTENT_TEXT["contact"]


const customStyle = {
    image_content: { maxHeight: 50 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" },
    form_card: {
        maxWidth: 500,
    }
}

const default_input_data = {
    name: "",
    company: "",
    email: "",
    telephone: "",
    message: "",
}


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show_modal: false,
            ...default_input_data
        }
    }

    onChnageHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    contactCompanyHandler = () => {
        let { language } = this.props
        this.props.useModal(() => (
            <>
                <ModalHeader toggle={() => this.props.toggleModal()}>
                    <h4>
                        {modal_text[language].modal_header}
                    </h4>
                </ModalHeader>
                <ModalBody>
                    <p>
                        {modal_text[language].modal_body}
                    </p>
                </ModalBody>
            </>
        ))
        let { name, company, email, telephone, message } = this.state
        this.setState({ show_modal: true })
        axios.post(API_SEND_EMAIL, { name, company, email, telephone, message }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    onModalCloseHandler = () => {
        this.setState({ ...default_input_data }, () => { })
    }

    render() {
        const { language } = this.props
        const { name, company, email, telephone, message } = this.state
        const contactInfo = () => (
            <Card className="border-0">
                <CardHeader className="border-0" style={{ ...customStyle.transparent }} >
                    <CardTitle className="pt-5 text-center">
                        <h1 className="text-responsive-h1">
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
                        <h1 className="text-responsive-h1">
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

                {/* {modal()} */}
                <Container fluid={"xl"} className="content-fade-in">

                    <Row className={"mx-0"}>
                        <img src={require("./assets/Contact-banner.jpg")} className="img-banner" />
                    </Row>
                    <Row className={"mx-0"}>
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