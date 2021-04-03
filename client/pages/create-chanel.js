import { useRouter } from 'next/router'

const CreateChanel = () => {
    const router = useRouter();

    return (
        <div>
            <button onClick={()=>router.push("/chanel-login")}>AleadyHave a chanel</button>
        </div>
    )
}

export default CreateChanel;