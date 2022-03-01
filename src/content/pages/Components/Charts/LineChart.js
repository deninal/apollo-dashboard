import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

const LineChart = ({ data: dataProp, labels, ...rest }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'New Likes',
        backgroundColor: 'transparent',
        data: dataProp.current,
        borderColor: theme.colors.primary.main,
        pointBorderColor: theme.palette.primary.main,
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.colors.alpha.trueWhite[100],
        pointHoverColor: theme.palette.primary.main,
        pointHoverBorderWidth: 4,
        pointBackgroundColor: theme.palette.primary.main,
        lineTension: 0.01
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 4,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: theme.spacing(0),
        right: theme.spacing(0)
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
            
          },
          ticks: {
            beginAtZero: false,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            display: true,
            beginAtZero: false,
            min: 10,
            max: 45,
            fontColor: theme.colors.alpha.trueWhite[50],
            maxTicksLimit: 10
          }
        }
      ]
    },
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        caretSize: 6,
        displayColors: true,
        yPadding: 8,
        xPadding: 16,
        borderWidth: 4,
        bodySpacing: 10,
        titleFontSize: 16,
        borderColor: theme.palette.common.black,
        backgroundColor: theme.palette.common.black,
        titleFontColor: theme.palette.common.white,
        bodyFontColor: theme.palette.common.white,
        footerFontColor: theme.palette.common.white
    },
    hover: {
      mode: 'index',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default LineChart;
