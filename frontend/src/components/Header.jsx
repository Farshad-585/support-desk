import { FaSignInAlt, FasignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to='/Login'>
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to='/Register'>
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header