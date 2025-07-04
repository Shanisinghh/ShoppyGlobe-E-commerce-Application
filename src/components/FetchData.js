import React, { use } from 'react'
import { useEffect ,useState } from 'react'
function FetchData() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
      const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        
       ( async ()=>{
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                setProducts(data.products)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        })()


      
    },[])
    return {products,error,isLoading}
 
}

export default FetchData