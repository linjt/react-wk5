import {Row,Col} from "antd"
import styles from "./Description.module.css"

function Description({description}){
    return(
        <div className={styles.descriptionLayout}>
            <Row justify="center" align="middle">
                <Col span={22}>
                    <h1 className={styles.title}>DESCRIPTIONS</h1>
                    <hr className="dividerLight"/>
                    <p className={styles.descriptionContent}>{description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Description;