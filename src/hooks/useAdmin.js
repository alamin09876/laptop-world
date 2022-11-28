import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [notAdmin, setNotAdmin] = useState(false);

    useEffect(()=>{
        fetch(`https://laptop-world-server-five.vercel.app/userVerify/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.displayUser)
            if(data.displayUser !== 'admin' || data.displayUser !== 'seller'){
                setNotAdmin(true)
            }
            
        })
    },[email])
    console.log(isAdmin);
    return [isAdmin, notAdmin]
}

export default useAdmin;