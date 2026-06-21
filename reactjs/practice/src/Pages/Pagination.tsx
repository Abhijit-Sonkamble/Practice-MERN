import axios from "axios"
import { useEffect, useState } from "react"

export default function Pagination() {

    const[pagination, setPagination] = useState()

    const [currentPage, setCurrentPage] = useState<any>(1);
    const [perRows, setPerRows] = useState<any>(10);

    const indexOfLastItem = currentPage * perRows ;

    const indexOfFirstItem = indexOfLastItem - perRows ; 

    const currentItems = pagination?.products?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(pagination?.total / perRows || 0);

    //Previous janya sathi
    const handlePrev = () => { 
        setCurrentPage((prev)=> Math.max(prev - 1, 1))
    }

    //Next janya sathi
    const handleNext = () => {
        setCurrentPage((prev)=> Math.min(prev + 1, totalPages))
    }

    //Click kelyavr tya page vr jayla
    const handleClick = (pageNumber : any) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        axios.get("https://dummyjson.com/products?limit=0")
        .then((response)=>{
            console.log(response)
            setPagination(response.data)
        })
    }, [])

    return (
    <>
    <h1>Pagination</h1>
    <div>
        <table>
            <thead>Pagination Products</thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            <tbody>
                {currentItems?.map((value, index)=>{
                    return <>
                     <tr key={index}>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.category}</td>
                        <td>{value.price}</td>
                    </tr>
                    </>
                   
                })}
            </tbody>
        </table>

        <div>
            <button onClick={handlePrev}>Previous</button>
            {Array.from({length:totalPages}, (_, index)=>(
                <button onClick={()=>handleClick(index + 1)}>{index + 1}</button>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>

    </div>
    </>
    )
}