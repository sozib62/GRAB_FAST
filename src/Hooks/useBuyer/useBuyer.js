import { useEffect, useState } from "react"

const useBuyer = email => {
    const [buyer, setBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setBuyer(data.buyer);
                    setBuyerLoading(false);
                })
        }
    }, [email])
    return [buyer, buyerLoading]
}

export default useBuyer;