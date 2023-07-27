import { useState, useEffect } from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import styles from './Auth.module.scss'

export default function Auth({
    login,
    SignUp,
    credentials,
    handleChangeAuth,
    token,
    setToken
}) {
    const [showSignUp, setShowSignUp] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getToken = () => {
            const token = window.localStorage.getItem('token')
            if(!token || token === 'null' || token === 'undefined') return null 
            const payload = JSON.parse(window.atob(token.split('.')[1]))
            if(payload.exp < Date.now()/1000){
                window.localStorage.removeItem('token')
                return null
            }
            return token
        }
        const myToken = getToken()
        const data = myToken ? JSON.parse(window.atob(myToken.split('.')[0])).user : null 
        setUser(data)
        setToken(myToken)
    }, [])
    return(
        <>
        {
            user && user.name ?
            <h1 className={styles.h1}>Welcome {user.name.toUpperCase()}</h1> :
            <>
                <button 
                    className={styles.button}
                    onClick={() => {
                        setShowSignUp(!showSignUp)
                    }}
                > 
                    {showSignUp? 'sign up with a new account below or click here to login as an existing User' : 'Welcome back, login as an existing user or click here to sign up with a new account'}
                </button>
                {
                    showSignUp?
                    <SignUp
                        SignUp={SignUp}
                        credentials={credentials}
                        handleChangeAuth={handleChangeAuth}
                    /> :
                    <Login
                        login={login}
                        credentials={credentials}
                        handleChangeAuth={handleChangeAuth}
                    />
                }
            </>
        }
        </>
    )

}