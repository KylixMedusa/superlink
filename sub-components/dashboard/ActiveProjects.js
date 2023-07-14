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
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      stroke: {
        width: 2,
        curve: "smooth",
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
              <div>
                <h3 className="mb-4">Stat</h3>
              </div>
              <h2 className="fw-bold">180K+</h2>
              <Chart
                options={LineChart.options}
                series={LineChart.series}
                type="line"
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
