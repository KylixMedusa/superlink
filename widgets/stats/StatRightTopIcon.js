// Widget : Stat Style
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StatRightTopIcon = (props) => {
  const LineChart = {
    options: {
      chart: {
        height: 50,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      toolbars: {
        show: false,
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
          show: false,
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
        width: 1,
        curve: "smooth",
        colors: ["#5572aa"],
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 130, 50, 100, 200, 300, 20, 90],
      },
    ],
  };
  const { info } = props;
  return (
    <Card>
      <Card.Body className="pb-0">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <h5 className="mb-0 text-400">{info.title}</h5>
          </div>
          {/* <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
            {info.icon}
          </div> */}
        </div>
        <div>
          <h4 className="fw-bold">{info.value}</h4>
          <Chart
            options={LineChart.options}
            series={LineChart.series}
            type="area"
            className="chart"
            style={{ minHeight: "50px" }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
StatRightTopIcon.propTypes = {
  info: PropTypes.any.isRequired,
};

export default StatRightTopIcon;
