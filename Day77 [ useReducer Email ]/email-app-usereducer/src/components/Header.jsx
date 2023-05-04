import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="email__logo">
        <Link className="email__logolink" to={'/'}>
          <span className="logo">
            <i className="fa-solid fa-hippo"></i>
          </span>
          mailhippo</Link>
    </div>
  )
}

export default Header