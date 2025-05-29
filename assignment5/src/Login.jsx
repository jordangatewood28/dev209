import React, {useState} from 'react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AuthFormLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with: ', email, password)
    }

    return(
        <div className="AuthForm">
            <h1>Login</h1>
        <form>
            <div>
                <input type='text' placeholder="enter your email" />
            </div>
            <div>
                <input type='text' placeholder='enter your password'/>
            </div>
            <button>ENTER</button>
        </form>
        </div>
    )
}

export default Login;