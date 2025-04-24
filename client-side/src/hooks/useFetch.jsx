import { useState, useEffect } from "react";

const useFetchOrders = (query) => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        let url = "http://localhost:3001/"
        if(query) {
            url += `?q=${query}`
        }

        const fetchOrders = async() => {
            setIsLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setBooks(data)
                setError(null)
            } catch(err) {
                setError("failed to fetch data")
                setOrders([])
            } finally {
                setIsLoading(false)
            }
        }
        fetchOrders()
    }, [query])

    return {orders, isLoading, error}

}

export default useFetchOrders