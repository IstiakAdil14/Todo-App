import styles from './product-item.module.css';
function ButtonComponent (){
    return (
        <button className={styles.buttonStyle}>Click</button>
    )
}

function ProductItem({singleProductItem, key}){

   
    return(
        <div style={{ padding:"20px", border:"2px solid white", marginBottom: "15px"
        }} key= {key}>
            <h1>{singleProductItem}</h1>
            <p className={styles.productTitle}>This is a product item.</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;