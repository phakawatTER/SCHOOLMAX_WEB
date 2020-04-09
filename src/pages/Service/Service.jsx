import React from "react"
import { Row, Col, CardHeader, CardTitle, Card, CardBody, Label, Container } from "reactstrap"

const content_text = {
    th: {
        text1: `ทีมงานเรามุ่งเน้นไปที่ความต้องการของทางสถานศึกษาและหน่วยการศึกษาในองกรณ์เป็นหลัก บริการของของเราจึงจะมีความหลากหลาย ทั้งผ่านทางทีมงานของเราโดยตรงหรือผ่านเครื่อข่าย ที่เป็นที่ยอมรัย เช่น`,
        bullet_points: [
            "ออกแบบระบบฮาร์ดแวร์/ซอฟต์แวร์",
            "ออกแบบและพัฒนาระบบซอฟต์แวร์",
            "ออกแบบกราฟฟิกสำหรับสื่อต่างๆ",
            "ออกแบบและจัดพิมพ์สื่อสิ่งพิมพ์ต่างๆ",
            "จัดหาวิทยากรหรือจัดอบรบในด้านต่างๆ",
            "จัดโปรแกรมแลกเปลี่ยนและศึกษาดูงานกับโรงเรียนในต่างประเทศ",
            "จัดหาครูพิเศษในสาขาต่างๆ",
            "และอื่น"
        ]
    },
    en: {},
}

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
            <Container fluid={"xl"}>
                <Row>
                    <img src={require("./assets/Services-banner.jpg")} className="img-banner" />
                </Row>
                <Row className="pr-5 pl-5 pt-5">
                    <Card className="text-left border-0" style={{ ...customStyle.transparent }}>
                        <CardBody>
                            <h5>
                                {content_text[language].text1}
                            </h5>
                        </CardBody>
                    </Card>
                </Row>
                <Row className="pr-5 pl-5">
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