import { useRouter } from 'next/router'
import {useEffect} from "react"

const EmptyGenericChanelPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/")
    },[])
    
    return (
        <div>

        </div>
    )
}

export default EmptyGenericChanelPage;