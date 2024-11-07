import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../App';
import axios from 'axios';
import LoginRegister from '../components/LoginRegister';

const Auth = ({ children }) => {
    const [redirect, setRedirect] = useState(false);
    const { token, setToken } = useContext(AuthContext);

    useEffect(() => {
        verify();
    }, []);

    const verify = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/user/auth',
                { withCredentials: true, 
                    headers: {
                        Authorization: token,
                    },
                }
            )
            if (response.status === 200) {
                setToken(response.data.accessToken);
                setRedirect(true);
            }
        } catch (error) {
            console.log(error);
            setToken(null);
            setRedirect(false);
        }
    }

    return redirect ? children : <LoginRegister mode='Login' />;
}

export default Auth;