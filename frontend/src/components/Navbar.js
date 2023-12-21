import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
export default function Navbar() {
  const {logout} = useLogout()
  const handleClick = ()=>{
    logout()
  }
  const {user} = useAuthContext()
  return (
    <header>
        <div className="container">
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
              {
                user&&(
                  <div>
                <button onClick={handleClick}>Logout</button>
              </div>
                )
              }
              {
                !user &&(

                  <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </div>
                )
              }
            </nav>
        </div>
    </header>
  )
}
