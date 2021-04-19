import React from 'react';

const Login = () => {

    const handleLogin = () =>{
        
    }

    const style = {
        width: "300px",
        border: "1px solid #f8793f",
        borderRadius: "20px",
        background: "white",
        padding: "10px",
        marginTop: "20px"
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-4  offset-12 mt-5">
                    <input onClick={handleLogin} style={style} type="button" value="Login With Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;