import { useRouter } from 'next/router'

const CreateChanel = () => {
    const router = useRouter();

    return (
        <div>
            <button onClick={()=>router.push("/user-chanel/chanel-login")}>AleadyHave a chanel</button>
        </div>
    )
}

export default CreateChanel;