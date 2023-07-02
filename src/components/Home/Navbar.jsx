// import {Link} from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
  return (
    <div className="navs">
      <div className="navbar">
        <h1>JobsPortal</h1>
      </div>
      <div className="navbar">
        <button className='posts'>Login</button>
        <button className='post'>Post a job</button>
      </div>
    </div>
  )
}

export default Navbar
