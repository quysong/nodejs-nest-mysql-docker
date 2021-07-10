import React from 'react'

const Header = () => {
  return (
    <>
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin5">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <a className="navbar-brand" href="index.html">
              {/* Logo icon */}
              <b className="logo-icon">
                {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                {/* Dark Logo icon */}
                <img src="../../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                {/* Light Logo icon */}
                <img src="../../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text">
                {/* dark Logo text */}
                <img src="../../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                {/* Light Logo text */}
                <img src="../../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
              </span>
            </a>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            {/* This is for the sidebar toggle which is visible on mobile only */}
            <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-start me-auto">
              {/* ============================================================== */}
              {/* Search */}
              {/* ============================================================== */}
              <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search" /></a>
                <form className="app-search position-absolute">
                  <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a>
                </form>
              </li>
            </ul>
            {/* ============================================================== */}
            {/* Right side toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-end">
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../../assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} />
                </a>
                <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5" />
                    My Profile</a>
                  <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet m-r-5 m-l-5" />
                    My Balance</a>
                  <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email m-r-5 m-l-5" />
                    Inbox</a>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header;