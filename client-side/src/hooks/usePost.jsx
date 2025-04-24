//custom hook to handle order addition via form
//Manage error/success outcomes
//manage form clearing
import { useState } from "react";

const usePostOrders = () => {
    const [isPosting, setIsPosting] = useState(false)
    const [errorOnPost, setErrorOnPost] = useState(null)
    const [successMsg, setSuccessMsg] = useState("")

    const postOrder = async(addedOrder) => {
        setIsPosting(true)
        setErrorOnPost(null)
        setSuccessMsg("")

        try {
            const res = await fetch("http://localhost:3001/orders", {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(addedOrder)
            })

            if(!res.ok) throw new Error("Failed to add new order.")
            
                const data = await res.json()
                setSuccessMsg("successfully added the order!")
                return data
        } catch(err) {
            setErrorOnPost(err.message)
        } finally {
            setIsPosting(false)
        }
    }
    return {postOrder, isPosting, errorOnPost, successMsg}
}

export default usePostOrders