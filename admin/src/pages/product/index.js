import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/breadcrumb'
import Footer from '../../components/footer'
import './styles.css'
import { API_URL } from '../../utils/variables'

const ProductPage = () => {
  const [tasksData, setTasksData] = useState([]);
  const [isDeleteLoading, setIsDeleteLoading] = useState(null);

  // component did mount
  useEffect(() => {
    console.log('Component did mount')
    // Get data
    getData();
  }, [])

  // Render
  useEffect(() => {
    console.log('Render')
  })

  // Watcher by state in dependency array
  useEffect(() => {
    console.log('Changed value');
    console.log(`tasksData`, tasksData);
  }, [tasksData])

  const onDelete = async (id) => {
    if(isDeleteLoading !== null) {
      return;
    }
    // Show loading
    setIsDeleteLoading(id);

    // Call api delete
    const result = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    });

    setIsDeleteLoading(null);

    if(result?.status === 200) {
      getData();
    } else {
      handleShowError();
    }
  }

  const handleShowError = () => {
    alert('Thất bại!')
  }

  const getData = () => {
    fetch(`${API_URL}/tasks`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTasksData(data);
      });
  }

  return (
    <>
      <div className="page-wrapper">
        {/* breadcrumb */}
        <Breadcrumb></Breadcrumb>

        {/* product page */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Danh sách công việc <i className="fas fa-sync-alt" onClick={getData}></i></h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Tên công việc</th>
                          <th scope="col">Mô tả</th>
                          <th scope="col">Trạng thái</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasksData && tasksData.length > 0 ?
                          tasksData.map((item, index) => {
                            return <React.Fragment key={`task-item-${index}`}>
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.isDone ? 'Hoàn thành' : 'Chưa hoàn thành'}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => onDelete(item.id)}>
                                  {isDeleteLoading === item?.id ? 'Đang xử lý' : 'Xóa'}
                                  {/* Loading */}
                                  </button></td>
                              </tr>
                            </React.Fragment>
                          })
                          : <p>No data found!</p>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End PAge Content */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Right sidebar */}
          {/* ============================================================== */}
          {/* .right-sidebar */}
          {/* ============================================================== */}
          {/* End Right sidebar */}
          {/* ============================================================== */}
        </div>

        {/* footer */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default ProductPage
