// Widget : Stat Style
// Style : Stat widget with right top icon

import dynamic from 'next/dynamic';
// import node module libraries
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StatRightTopIcon = (props) => {
  const baseColor = "#5572aa";
  const strokeColor = "#ebeef3";
  const labelColor = "#6e7687";
  const lightColor = "#f4f5f7";

  const LineChart = {
    options: {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 50,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [baseColor],
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
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: strokeColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      colors: [lightColor],
      markers: {
        colors: [lightColor],
        strokeColors: [baseColor],
        strokeWidth: 3,
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
      <Card.Body className="p-0">
        <div className="m-4 mb-0">
          <h5 className="mb-2 text-400">{info.title}</h5>
          <h4 className="fw-bold">{info.value}</h4>
        </div>
        <div>
          <Chart
            options={LineChart.options}
            series={LineChart.series}
            type="area"
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
