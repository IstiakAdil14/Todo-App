import "./style.css";
// import productItem from "./Component/item";
import ProductItem from "./Component/items";
import { useEffect, useState } from "react";

const initialState = true;

// const dummyProductData = ["product 1", "product 2", "product 3"]
function ProductList({name,city,dummyProductData}) {
    // const flag = false;

    const [flag, setFlag] = useState(initialState)
    const [count, setCount]=useState(0);
    function handleToggleText(){
        setFlag(!flag);
    }
    const[changeStyle, setChangeStyle] = useState(false)

function handleIncreaseCount(){
    setCount(count + 1);
}

    useEffect(() => {
        setFlag(!flag);
        console.log("Run only once on page load");
        return() => {
            console.log("components is unmounted");
            
        }
    },[])

    useEffect(() => {
        // console.log("Count changed");
        if(count ===10) setChangeStyle(true);
    },[count])

    console.log(changeStyle);
    
    // console.log(props);
    // const  = props;

    // function renderTextBlock(getFlag){
    //     return getFlag ? 
    //     <h3>Name is {name},He/she is belongs to this city {city}</h3>
    //     : 
    //     <h3>Hello Universe</h3> 
    // }

       
    // let renderTextBlock = null;
    // if(flag){
    //     renderTextBlock = <h3>Name is {name}, He/She is belongs to this city {city}</h3>;
    // }else{
    //     renderTextBlock = <h3>Hello Universe</h3>;
    // }

    return (
        <div>
            <h3 className="title">ECommerce Website</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem/> */}
            {
            flag ? <h4>{name} and {city}</h4> : <h4>Hello</h4>
            }

            <div>
                <button style={{ backgroundColor: changeStyle ? 'red' : 'green' , color: changeStyle ? "green":"red" ,}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>

            {
                <ul>
                    {dummyProductData.map((item,index) => (
                        <ProductItem singleProductItem={item} key = {index}/>
                    ))}
                </ul>
            }
        </div>
    );
}

export default ProductList;