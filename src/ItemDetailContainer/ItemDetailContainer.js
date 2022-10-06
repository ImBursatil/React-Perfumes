import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() =>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(product)

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>Descripción</h1>
            <div>
                <img src={product.img} />                
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
                <h3>${product.price}</h3>

            </div>
        </div>
    )
}

export default ItemDetailContainer