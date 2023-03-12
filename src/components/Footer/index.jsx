import { Row,Col } from "antd";
import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div >
                    <Row justify="space-between" align="middle">
                        <Col xs={{span:24}} lg={{span:14}}>
                            <h5 className={styles.footerDescription}>
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                            </h5>
                        </Col>
                        <Col xs={{span:24}} lg={{span:10}}>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-facebook-f"></i></a></li>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-google-plus-g"></i></a></li>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="footerBelow">
                <Row className="container" justify="center" align="middle">
                    <Col span={24}>
                        <h6 className={styles.copyright}>
                            &copy; Copyright All rights reserved.
                        </h6>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}


export default Footer;