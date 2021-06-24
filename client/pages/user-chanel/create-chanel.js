import { useRouter } from 'next/router'

const CreateChanel = () => {
    const router = useRouter();
    const [ChanelMail, setChanelMail] = useState("");
    const [ChanelPassword, setChanelPassword] = useState("");
    const [ReapeatedChanelPassword, setRepeatedChanelPassword] = useState("");

    return (
        <div>
            <input type="text" placeholder="E-mail..."  onChange={(e) => { setChanelMail(e.target.value) }} required />
            <input type="password" name="Pwd" placeholder="Password..." onChange={(e) => { setChanelPassword(e.target.value) }} required />
            <input type="password" name="Pwd" placeholder="Reapeate Password..." onChange={(e) => { setRepeatedChanelPassword(e.target.value) }} required />
            <button type="submit" name="login-submit" onClick={LoginIntoChanel} >Login</button>
            <br />
            <button onClick={()=>router.push("/user-chanel/chanel-login")}>AleadyHave a chanel</button>
        </div>
    )
}

export default CreateChanel;