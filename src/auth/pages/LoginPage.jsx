import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <div>
            <h1>login</h1>
            <hr/>

            <button
            onClick={ onLogin }
            >
                login
            </button>
        </div>
    )
}

export default LoginPage