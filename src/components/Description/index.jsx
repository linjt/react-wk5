import {Row,Col} from "antd"
import styles from "./Description.module.css"

function Description({description}){
    return(
        <div>
            <article className={styles.descriptionLayout}>
                <Row className="container">
                    <Col span={24}>
                        <h1>DESCRIPTIONS</h1>
                        <hr className="dividerLight"/>
                        <p className={styles.descriptionContent}>{description}</p>
                    </Col>
                </Row>
            </article>
        </div>
    )
}

export default Description;