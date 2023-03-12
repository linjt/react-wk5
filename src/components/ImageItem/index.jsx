import styles from "./ImageItem.module.css"

function ImageItem({images}){
    return(
        <div className={styles.image}>
            <a href={images.href} className={styles.imageLink}>
                 <img src={images.link} alt={images.alt} className={styles.imageStyle}/>
            </a>
            <p className={styles.imageTitle}>{images.title}</p>
        </div>
    )
}


export default ImageItem;