import React from 'react';

const Guide: React.FC = () => {
  return (
    <section id="guide" className="guide section">
      <div className="container">
        <div className="guide-content">
          <div className="guide-step">
            <div className="guide-devices">
              <div className="device desktop">
                <div className="device-screen">
                  <div className="software-interface">
                    <div className="grid-items">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                    <div className="menu-options">
                      <div className="menu-item"></div>
                      <div className="menu-item"></div>
                      <div className="menu-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="device tablet">
                <div className="device-screen">
                  <div className="charts">
                    <div className="pie-chart">
                      <div className="chart-segment blue"></div>
                      <div className="chart-segment yellow"></div>
                      <div className="chart-segment green"></div>
                      <div className="chart-segment red"></div>
                    </div>
                    <div className="donut-chart">
                      <div className="chart-segment blue"></div>
                      <div className="chart-segment orange"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="device smartphone">
                <div className="device-screen">
                  <div className="donut-chart colorful">
                    <div className="chart-segment green"></div>
                    <div className="chart-segment red"></div>
                    <div className="chart-segment blue"></div>
                    <div className="chart-segment yellow"></div>
                    <div className="chart-segment orange"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-text">
              <h3>Tổng quan về phần mềm quản lý nhà hàng ONEDELI</h3>
            </div>
          </div>

          <div className="guide-step">
            <div className="guide-devices">
              <div className="device desktop">
                <div className="device-screen installing">
                  <div className="install-content">
                    <h4>Installing</h4>
                    <div className="progress-bar">
                      <div className="progress-segment"></div>
                      <div className="progress-segment"></div>
                      <div className="progress-segment"></div>
                      <div className="progress-segment"></div>
                      <div className="progress-segment"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="device tablet blue">
                <div className="device-screen installing">
                  <div className="install-content">
                    <div className="spinner"></div>
                    <h4>Installing</h4>
                  </div>
                </div>
              </div>
              <div className="device smartphone blue">
                <div className="device-screen installing">
                  <div className="install-content">
                    <div className="spinner small"></div>
                    <h4>Installing</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-text">
              <h3>Cài đặt và kết nối dữ liệu</h3>
            </div>
          </div>

          <div className="guide-step">
            <div className="guide-devices">
              <div className="device laptop">
                <div className="device-screen">
                  <div className="form-interface">
                    <div className="form-field">
                      <label>Tên đăng nhập</label>
                      <div className="field-value"></div>
                    </div>
                    <div className="form-field">
                      <label>Mật khẩu</label>
                      <div className="field-value"></div>
                    </div>
                    <div className="form-field">
                      <label>Ngày tạo</label>
                      <div className="field-value"></div>
                    </div>
                    <div className="edit-icon">
                      <div className="pencil-icon">✏️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-text">
              <h3>Khai báo thông tin ban đầu</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

