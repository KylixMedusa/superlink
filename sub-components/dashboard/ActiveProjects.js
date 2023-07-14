// import node module libraries
import Link from "next/link";
import { ProgressBar, Col, Row, Card, Table, Image } from "react-bootstrap";

// import required data files
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ActiveProjects = () => {
  const LineChart = {
    options: {
      chart: {
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      stroke: {
        width: 2,
        curve: "smooth",
        colors: ["#5572aa"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 130, 50, 100, 200, 300, 20, 90],
      },
    ],
  };
  return (
    <Row className="mt-6">
      <Col md={12} xs={12}>
        <Card>
          <Card.Body>
            <div>
              <div className="d-flex align-items-center justify-content-between gap-2">
                <h5 className="mb-2 text-400">Stat 1</h5>
                <div className="filter-tabs">
                  <span>By Creator</span>
                  <span>Daily</span>
                  <span>Weekly</span>
                  <span>Monthly</span>
                  <span>Sort By Date</span>
                </div>
              </div>
              <h3 className="fw-bold">180K+</h3>
              <p className="d-flex align-items-center gap-1">
                <i
                  className="fe fe-chevron-up"
                  style={{ fontSize: "16px", color: "lightgreen" }}
                />{" "}
                <span className="fs-6">11.06%</span>
              </p>
              <Chart
                options={LineChart.options}
                series={LineChart.series}
                type="area"
                className="chart"
              />
            </div>
          </Card.Body>
          {/* <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Project name</th>
                <th>Hours</th>
                <th>priority</th>
                <th>Members</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {ActiveProjectsData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div>
                          <div
                            className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}
                          >
                            <Image src={item.brandLogo} alt="" />
                          </div>
                        </div>
                        <div className="ms-3 lh-1">
                          <h5 className=" mb-1">
                            <Link href="#" className="text-inherit">
                              {item.projectName}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.hours}</td>
                    <td className="align-middle">
                      <span className={`badge bg-${item.priorityBadgeBg}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="align-middle">
                      <div className="avatar-group">
                        {item.members.map((avatar, avatarIndex) => {
                          return (
                            <span
                              className="avatar avatar-sm"
                              key={avatarIndex}
                            >
                              <Image
                                alt="avatar"
                                src={avatar.image}
                                className="rounded-circle"
                              />
                            </span>
                          );
                        })}
                        <span className="avatar avatar-sm avatar-primary">
                          <span className="avatar-initials rounded-circle fs-6">
                            +5
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className="align-middle text-dark">
                      <div className="float-start me-3">{item.progress}%</div>
                      <div className="mt-2">
                        <ProgressBar
                          now={item.progress}
                          style={{ height: "5px" }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Card.Footer className="bg-white text-center">
            <Link href="#" className="link-primary">
              View All Projects
            </Link>
          </Card.Footer> */}
        </Card>
      </Col>
    </Row>
  );
};

export default ActiveProjects;
