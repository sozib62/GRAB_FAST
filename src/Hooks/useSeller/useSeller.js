import { useEffect, useState } from "react"

const useSeller = email => {
    const [seller, setSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-site.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setSeller(data.seller);
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [seller, sellerLoading]
}

export default useSeller;