import styles from "../../../styles/Account/Forgot.module.css"
import jwt from 'jsonwebtoken';
import emailjs from "emailjs-com"

export default function Forgotpwd() {
    

    const SubmitResetPwd = e => {
        e.preventDefault();
        const Secret = process.env.SECRET_TOKEN + e.target.email.value

        const payload = { AccountEmail: e.target.email.value };
        const token = jwt.sign(payload, Secret, {expiresIn: '15min'});
        const link = `http://localhost:3000/u/auth/reset-password/${token}/?email=${e.target.email.value}`;

        emailjs.send(`${process.env.service_id}`, `${process.env.tamplate_id}`, { UserEmail: e.target.email.value, Link: link }, `${process.env.user_id}`)
            .then(function (response) {
                window.alert("reset Password link send");
            }, function (error) {
                window.alert('FAILED...', error);
            });
    }


    return (
        <div className={styles.container}>
            <form onSubmit={SubmitResetPwd}>
                <div className={styles.ChangePwdCard}>
                    <h1 className={styles.ChangePwdText}>Forgot Password</h1>
                    <hr color="#676767" className={styles.Bar} />
                    <div className={styles.EmailPart}>

                        <h1 className={styles.EmailText}>Email: </h1>
                        <input className={styles.EmailTextInput}
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                    </div>
                        <hr color="#676767" className={styles.BottomBar} />
                        <div className={styles.FooterCardContainer}>
                            <input className={styles.LogInButton} type="submit" value="Change Password" />
                        </div>
                </div>
            </form>

        </div>
    )
}
