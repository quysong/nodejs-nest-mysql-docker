import React from 'react'

function Breadcrumb() {
  return (
    <div className="page-breadcrumb">
      <div className="row align-items-center">
        <div className="col-5">
          <h4 className="page-title">Basic Table</h4>
          <div className="d-flex align-items-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="col-7">
          <div className="text-end upgrade-btn">
            <a href="https://www.wrappixel.com/templates/xtremeadmin/" className="btn btn-danger text-white" target="_blank">Upgrade to Pro</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Breadcrumb
