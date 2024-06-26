import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>

      <header className="bg-white lg:py-5">
        <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
          {/* <!-- lg+ --> */}
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" alt="" />
              </a>
            </div>

            <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
             <NavLink to="/dashboard" className={({ isActive}) => `text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>Dashboard</NavLink>
             <NavLink to="/addmedication" className={({ isActive}) => `text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>Add Medication</NavLink>
             <NavLink to="/listmedication" className={({ isActive}) => `text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>Medication List </NavLink>

            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
             <NavLink to="/registation" className={({ isActive}) => `text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>  Sign up  </NavLink>
             <NavLink to="/login" className={({ isActive}) => `text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive && 'text-blue-600'}`}> Sign in </NavLink>

            </div>
          </nav>

          {/* <!-- xs to lg --> */}
          <nav className="flex flex-col py-4 space-y-2 lg:hidden">
            <NavLink to="/dashboard" className={({ isActive}) => `py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>Dashboard</NavLink>
            <NavLink to="/addmedication" className={({ isActive}) => `py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 ${isActive && 'text-blue-600'}`}>Add Medication</NavLink>
          </nav>
        </div>
      </header>


    </>
  )
}

export default Header