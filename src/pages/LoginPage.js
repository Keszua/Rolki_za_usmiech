import React from 'react' ;


const LoginPage = () => {

    return(
        <div>
            Login panel
            <br/>
            <label htmlFor="">Login
                <input type="text"/>
            </label>
            <br/>
            <label htmlFor="">Hasło
                <input type="password"/>
            </label>
            <br/>
            <button>Zaloguj</button>
        </div>
    )
}

export default LoginPage;