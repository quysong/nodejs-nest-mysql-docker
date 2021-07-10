import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin6">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              {/* User Profile*/}
              <li>
                {/* User Profile*/}
                <div className="user-profile d-flex no-block dropdown m-t-20">
                  <div className="user-pic"><img src="../../assets/images/users/1.jpg" alt="users" className="rounded-circle" width={40} /></div>
                  <div className="user-content hide-menu m-l-10">
                    <a href="#" id="Userdd" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h5 className="m-b-0 user-name font-medium">Steave Jobs <i className="fa fa-angle-down" /></h5>
                      <span className="op-5 user-email">varun@gmail.com</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="Userdd">
                      <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5" /> My Profile</a>
                      <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet m-r-5 m-l-5" /> My Balance</a>
                      <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email m-r-5 m-l-5" /> Inbox</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:void(0)"><i className="ti-settings m-r-5 m-l-5" /> Account Setting</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off m-r-5 m-l-5" /> Logout</a>
                    </div>
                  </div>
                </div>
                {/* End User Profile*/}
              </li>
              <li className="p-15 m-t-10"><a href="javascript:void(0)" className="btn d-block w-100 create-btn text-white no-block d-flex align-items-center"><i className="fa fa-plus-square" /> <span className="hide-menu m-l-5">Create New</span> </a>
              </li>
              {/* User Profile*/}
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></a></li>
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-profile.html" aria-expanded="false"><i className="mdi mdi-account-network" /><span className="hide-menu">Profile</span></a></li>
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-basic.html" aria-expanded="false"><i className="mdi mdi-border-all" /><span className="hide-menu">Table</span></a></li>
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="icon-material.html" aria-expanded="false"><i className="mdi mdi-face" /><span className="hide-menu">Icon</span></a></li>
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="starter-kit.html" aria-expanded="false"><i className="mdi mdi-file" /><span className="hide-menu">Blank</span></a></li>
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="error-404.html" aria-expanded="false"><i className="mdi mdi-alert-outline" /><span className="hide-menu">404</span></a></li>
              <li className="text-center p-40 upgrade-btn">
                <a href="https://www.wrappixel.com/templates/xtremeadmin/" className="btn d-block w-100 btn-danger text-white" target="_blank">Upgrade to Pro</a>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  )
}

export default Sidebar
