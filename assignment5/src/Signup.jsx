import React, {useState} from 'react';

function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AuthFormSignup = (e) => {
        e.preventDefault();
        console.log('Loging in with: ', email, password)
    }

    return(
        <div className="AuthForm">
            <h1>Login</h1>
        <form>
            <div>
                <input type='text' placeholder="enter an email" />
            </div>
            <div>
                <input type='text' placeholder='enter a password'/>
            </div>
            <button>ENTER</button>
        </form>
        </div>
    )
}

export default Signup;