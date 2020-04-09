import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"

const content_text = {
    th: {
        text1: `ซอร์ฟแวร์โรงเรียนที่จบในระบบเดียว ออกแบบจาก
        ประสบการณ์ของผู้เชี่ยวชาญด้านการศึกษาและผู้ใช้จริง
        SchoolMax มุ่งมั่นพัฒนามาตรฐานของโรงเรียนผ่าน
        ระบบของเรา โดยทางโรงเรียนสามารถใช้เพื่อสนับสนุนการ
        เรียนการสอนพร้อมทั้งงานบริหารที่ยุ่งยากได้บนระบบเดียว`,
        text2: `ก่อนที่ซอร์ฟแวร์ของเราจะถูกปล่อยออกตลาด ทางทีมงานได้ศึกษาและพัฒนาควบคู่กันไปบนโรงเรียนชั้นนำหลากหลายที่ จากหลากหลายกลุ่มโรงเรียน เพื่อให้้มั่นใจว่าซอร์ฟแวร์ของเราจะเกิดประสิทธิภาพสูงสุดแก่โรงเรียนผู้ใช้ ตามคุณภาพของโรงเรียนชั้นนำ`,
        text3: `กิจกรรมการเรียนการสอนและงานสนับสนุนการเรียนการสอน
        ถูกนำมารวบรวมไว้บนระบบเดียวกัน เพื่อประสิทธิภาพสูงสุดในการ
        ทำงานร่วมกันระหว่าง คุณครู นักเรียน ผู้ปกครอง และผู้บริหาร`,
        text4: `ข้อมูลที่เกิดขึ้นในการทำงานจะถูกจัดเก็บอย่างเป็นระบบ ข้อมูลล่าสุดจากทุกหน่วยงานจะสามารถเข้าถึงได้จากทุกที่ทุกเวลา และทำให้ผู้บริหารได้ตรวจสอบ/เข้าถึงข้อมูลเชิงลึกและบทวิเคราะห์ได้ง่ายขึ้น และสิ่งที่ได้จะตามมาคือความโปร่งใสมากขึ้นในระบบอีกด้วย`,
        text5: `การทำงานที่ซ้ำซ้อนและทับซ้อนจะถูกลดลงโรงเรียนจะได้เวลาที่สูญเสีย
        โดยไม่จำเป็นจะได้นำกลับมาเพื่อสิ่งที่สำคัญที่สุดกับโรงเรียน คือการศึกษา
        ของนักเรียน`,
    },
    en: {},
}

const customStyle = {
    image_content: { maxHeight: 200 },
    transparent: { backgroundColor: "rgba(0,0,0,0)" }
}


const Software = (props) => {
    const { language } = props
    return (
        <>
            <Container fluid={"xl"}>
                <Row>
                    <img src={require("./assets/Software-banner.jpg")} className="img-banner" />
                </Row>
                <Row className="pt-5 pb-5">
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
                <Row className="faded-row pt-5 pb-5">
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

                <Row className="pt-5 pb-5">
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
                <Row className="pt-5 pb-5">
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
                <Row className="pt-5 pb-5">
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

                <Row>
                    <img src={require("./assets/24-7-image.jpg")} className="img-banner" />
                </Row>
                <Row>
                    <img src={require("./assets/Discount-image.jpg")} className="img-banner" />
                </Row>

            </Container>
        </>
    )
}
export default Software;