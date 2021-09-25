
import styles from "../../styles/Account/Login.module.css"
import Link from "next/Link"



export default function Login(props) {
    return (
        <div className={styles.container}>
            <div className={styles.LoginCard}>
                <h1 className={styles.SignUpText}>Log into account</h1>
                <hr color="#676767" className={styles.Bar} />
                <div className={styles.SignupContentBody}>

                    <div className={styles.EmailPart}>
                        <h1 className={styles.EmailText}>E-Mail:</h1>
                        <input className={styles.EmailInput}
                            type="text"
                            placeholder="E-Mail..."
                            onChange={(e) => {
                                // setAccountName(e.target.value)
                            }}
                            // value={AccountName}
                        />
                    </div>

                    <div className={styles.PasswordPart}>
                        <h1 className={styles.PasswordText}>Password:</h1>
                        <input className={styles.PasswordTextInput}
                            type="text"
                            placeholder="User Name..."
                            onChange={(e) => {
                                // setAccountName(e.target.value)
                            }}
                            // value={AccountName}
                            maxLength="10"
                        />
                    </div>
                </div>
                <hr color="#676767" className={styles.BottomBar} />
                <div className={styles.FooterCardContainer}>
                    <button className={styles.LogInButton}>Log In</button>
                    <Link href="/u/signup" >
                        <a className={styles.ToLoginLink}>Don't Have an account</a>
                    </Link>

                </div>
            </div>
        </div>
    )
}