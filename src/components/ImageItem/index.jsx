import styles from "./ImageItem.module.css"

function ImageItem({image}){
    return(
        <div className={styles.image}>
            <a href={image.href} className={styles.imageLink}>
                 <img src={image.link} alt={image.alt} className={styles.imageStyle}/>
            </a>
            <p className={styles.imageTitle}>{image.title}</p>
        </div>
    )
}


export default ImageItem;