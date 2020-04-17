export const API_SEND_EMAIL = "/send/email" // METHOD IS "POST"
export const NAVBAR_TEXT = {
    th: { "home": "หน้าหลัก", "software": "ซอฟต์แวร์", "otherproduct": "สินค้าอื่นๆ", "service": "บริการ", "contact": "ติดต่อ" },
    en: { "home": "home", "software": "software", "otherproduct": "other products", "service": "services", "contact": "contact" }
}
export const CONTENT_TEXT = {
    "contact": {
        th: {
            company:
            {
                title: "ติดต่อ",
                address_bold: "บริษัท แสงรุ้ง เอ็ดดูเคชั่น จำกัด",
                address: `99/99 หมู่1 ถนนราชพฤกษ์ บางขุนทอง บางกรวย นนทบุรี 11130`,
                email: "contact@saengroong.com",
                telephone: "092-369-3969, 088-499-8811",
                facebook: "SCHOOLMax World",
            },
            client: {
                title: "ติดต่อด่วน",
                name: "ชื่อ-นามสกุล",
                company: "โรงเรียน/บริษัท",
                email: "อีเมล",
                telephone: "โทรศัพท์",
                message: "ข้อความ",
                button_label: "ส่ง"
            }
        },
        en: {
            company:
            {
                title: "Contact",
                address_bold: "Saengroong Education Co.,Ltd.",
                address: `99/99 Moo1 Ratchapruek Rd. Bangkoonkong, Bangkruey, Nonthaburi 11130`,
                email: "contact@saengroong.com",
                telephone: "092-369-3969, 088-499-8811",
                facebook: "SCHOOLMax World",
            },
            client: {
                title: "Quick Contact",
                name: "Name-Last name",
                company: "School/Company",
                email: "E-mail",
                telephone: "Phone",
                message: "Message",
                button_label: "Send"
            }
        },
    },
    "software": {
        th: {
            text1: `ซอร์ฟแวร์โรงเรียนที่จบในระบบเดียว ออกแบบจาก
            ประสบการณ์ของผู้เชี่ยวชาญด้านการศึกษาและผู้ใช้จริง 
            SchoolMax มุ่งมั่นพัฒนามาตรฐานของโรงเรียนผ่าน
            ระบบของเรา โดยทางโรงเรียนสามารถใช้เพื่อสนับสนุนการ
            เรียนการสอนพร้อมทั้งงานบริหารที่ยุ่งยากได้บนระบบเดียว`,
            text2: `ก่อนที่ซอร์ฟแวร์ของเราจะถูกปล่อยออกตลาด ทางทีมงานได้ศึกษาและพัฒนาควบคู่กันไปบนโรงเรียนชั้นนำหลากหลายที่ จากหลากหลายกลุ่มโรงเรียน เพื่อให้มั่นใจว่าซอร์ฟแวร์ของเราจะเกิดประสิทธิภาพสูงสุดแก่โรงเรียนผู้ใช้ ตามคุณภาพของโรงเรียนชั้นนำ`,
            text3: `กิจกรรมการเรียนการสอนและงานสนับสนุนการเรียนการสอน
            ถูกนำมารวบรวมไว้บนระบบเดียวกัน เพื่อประสิทธิภาพสูงสุดในการ
            ทำงานร่วมกันระหว่าง คุณครู นักเรียน ผู้ปกครอง และผู้บริหาร`,
            text4: `ข้อมูลที่เกิดขึ้นในการทำงานจะถูกจัดเก็บอย่างเป็นระบบ ข้อมูลล่าสุดจาก
            ทุกหน่วยงานจะสามารถเข้าถึงได้จากทุกที่ทุกเวลา และทำให้ผู้บริหารได้
            ตรวจสอบ/เข้าถึงข้อมูลเชิงลึกและบทวิเคราะห์ได้ง่ายขึ้น และสิ่งที่ได้จะตาม
            มาคือความโปร่งใสมากขึ้นในระบบอีกด้วย`,
            text5: `การทำงานที่ซ้ำซ้อนและทับซ้อนจะถูกลดลง โรงเรียนจะได้เวลาที่สูญเสีย
            โดยไม่จำเป็นจะได้นำกลับมาเพื่อสิ่งที่สำคัญที่สุดกับโรงเรียน คือการศึกษา
            ของนักเรียน`,
        },
        en: {
            text1: `SchoolMax is an all-in-one school software designed from the experience of experts in education as well as real users. We are committed to improve school standards through our system, which can be used by schools to facilitate teaching and learning as well as sophisticated management within one system.`,
            text2: `Our team has researched and developed alongside with various types of leading schools to ensure that our software is able to maximize the performance for users in alignment with the quality of leading schools.`,
            text3: `Teaching activities and teaching support are integrated on the same system for the most effective collaboration between teachers, students, parents, and the school management.`,
            text4: `Work data will be stored systematically, where latest data from all departments are accessible from anywhere at anytime. This provides the management with easier access to insights and analysis, data verification, as well as greater transparency in the system.`,
            text5: `Redundant and overlapping work will be reduced. The time schools have wasted unnecessarily will be brought back for what matters most for them--education for their students.`,
        },
    },
    "service": {
        th: {
            text1: `ทีมงานเรามุ่งเน้นไปที่ความต้องการของสถานศึกษาและหน่วยงานการศึกษาในองกรณ์เป็นหลัก บริการของเราจึงจะมีความหลากหลาย ให้บริการทั้งผ่านทางทีมงานของเราโดยตรงหรือผ่านเครือค่ายที่เป็นที่ยอมรับ`,
            bullet_points: [
                "ออกแบบระบบฮาร์ดแวร์/ซอฟต์แวร์",
                "ออกแบบและพัฒนาระบบซอฟต์แวร์",
                "ออกแบบและจัดพิมพ์สื่อสิ่งพิมพ์ต่างๆ",
                "จัดหาวิทยากร หรือจัดอบรมในด้านต่าง",
                "และอื่นๆ",
            ]
        },
        en: {
            text1: `Our team primarily focuses on the needs of educational institutions and educational division of organizations. Therefore, we will be providing diverse services both directly through us or established networks.`,
            bullet_points: [
                "Designing of hardware and software",
                "Designing and developing software",
                "Designing and producing of print media",
                "Providing guest speakers or organizing training in various fields",
                "Others",
            ]
        },
    },
    "product": {
        th: {
            title: "อุปกรณ์สำหรับห้องเรียน",
            product: ["BenQ Interactive Flat Panel", "BenQ Smart Projector"],
            product_description: [
                "BenQ’s Interactive Flat Panels (IFP) เป็นจอแบบสัมผัสสำหรับห้องเรียนถูกออกแบบให้ใช้งานง่าย เพื่อจะผลักดันให้เกิดการเรียนรู้แบบร่วมมือ (collaborative learning) ให้กับห้องเรียนของคุณ",
                "สมาร์ทโปรเจคเตอร์รุ่นแรกของโลกจาก BenQ ที่จะพาสถานศึกษาของคุณขึ้นไปอีกขั้น"
            ],
            product_bullet_points: [
                [
                    "หน้าจอ 4K UHD เพื่อภาพคมชัด",
                    "หน้าจอ Germ-Resistant",
                    "หน้าจอ Smart Eye-Care solution",
                    "เชื่อต่อและใช้งานได้ทันที"
                ], []
            ],
            learnmore_right: "เรียนรู้เพิ่มเติม กรุณาดาวน์โหลดโปรแกรมแคตตาล็อกด้านขวา หรือติดต่อเรา",
            learnmore_left: "เรียนรู้เพิ่มเติม กรุณาดาวน์โหลดโปรแกรมแคตตาล็อกด้านซ้าย หรือติดต่อเรา"
        },
        en: {
            title: "อุปกรณ์สำหรับห้องเรียน",
            product: ["BenQ Interactive Flat Panel", "BenQ Smart Projector"],
            product_description: [
                "BenQ’s Interactive Flat Panels (IFP) are optimized to have the friendliest user interface and classroom-ready solutions to support schools by bringing a truly healthy and collaborative learning experience into their classrooms.",
                "The first smart projector model in the world from BenQ which will take your institution to the next level."
            ],
            product_bullet_points: [
                [
                    "4K UHD resolution for stunning image clarity",
                    "Germ-Resistant Screen",
                    "Smart Eye-Care solution",
                    "Instant plug and play"
                ], []
            ],
            learnmore_right: "Please download our catalogue on the right hand side to learn more.",
            learnmore_left: "Please download our catalogue on the left hand side to learn more."
        },
    },
    "home": {
        th: {
            text1: "โดยยึด 3 แนวทางหลัก การศึกษา เทคโนโลยี และความยั่งยืน ผ่านซอฟต์แวร์ สินค้าต่างๆ ตลอดถึงบริการอีกมากมาย ให้กับทั้งสถานศึกษาและหน่วยการศึกษาในองกรณ์",
            link_option: "ลิ้งค์ด่วน",
            option1: "ซอฟต์แวร์โรงเรียน",
            option2: "สินค้าอื่นๆ",
            option3: "บริการ",

        },
        en: {
            text1: "Through software, various products, along with many other services by adhering to three main approaches: education, technology, and sustainability.",
            link_option: "Quick Link",
            option1: "School Software",
            option2: "Other Products",
            option3: "Services",
        }
    }



}