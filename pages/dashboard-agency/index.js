// import node module libraries
import { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Activities from "./Activities";
import NewCreatorsTable from "./NewCreators";

const DashboardAgency = () => {
  return (
    <Fragment>
      <div className="pt-10 pb-16"></div>
      <Container
        fluid
        className="m-4 mt-n21 p-6 smooth-shadow-sm"
        style={{
          backgroundColor: "#fff",
          width: "calc(100% - 40px)",
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col xs={12} md={12} lg={8}>
            {/* Page header */}
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="m-0">
                  <h3 className="m-0 fw-bold">Dashboard</h3>
                </div>
              </div>
            </div>
            <Row style={{ height: "auto" }}>
              {["Visits", "Activer Creators", "New Creators"].map(
                (title, index) => (
                  <Col xs={12} md={8} lg={4} className="mt-6" key={index}>
                    <div className="dashboard-agency-card">
                      <h5 className="text-400">{title}</h5>
                      <h3 className="fw-bold mt-1 mb-2">721K</h3>
                      <p className="d-flex align-items-center gap-1">
                        <i
                          className="fe fe-chevron-up"
                          style={{ fontSize: "16px", color: "lightgreen" }}
                        />{" "}
                        <span className="fs-6">11.06%</span>
                      </p>
                    </div>
                  </Col>
                )
              )}
              <Col xs={12} md={12} lg={12}>
                <div>
                  <div className="d-flex justify-content-between align-items-center my-6">
                    <div className="m-0">
                      <h3 className="m-0 fw-bold">New Creators Added</h3>
                    </div>
                  </div>
                </div>
                <NewCreatorsTable />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Activities />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DashboardAgency;
