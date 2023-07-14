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
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      stroke: {
        width: 1,
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
  const { info } = props;
  return (
    <Card>
      <Card.Body>
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
            type="line"
            className="chart"
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
