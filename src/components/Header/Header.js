import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'

export const Header = () => {
    const [authUser, setAuthUser] = useAuthContext()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        setAuthUser(false)
        navigate('/login')
    }
    return (
        <div className="header">
            <h1>ToDo List</h1>
            <button className="btn btn-logout" onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} color="white"/>
            </button>
        </div>
    );
}