import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme, alpha } from '@mui/material';

const AreaChart = ({ data: dataProp, labels, ...rest }) => {
  const theme = useTheme();

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const primaryGradient = ctx.createLinearGradient(6, 6, 6, 280);
    primaryGradient.addColorStop(0, alpha(theme.colors.warning.dark, 1));
    primaryGradient.addColorStop(0.3, theme.colors.warning.light);
    primaryGradient.addColorStop(1, alpha(theme.colors.warning.lighter, 0.4));

    const successGradient = ctx.createLinearGradient(6, 6, 6, 280);
    successGradient.addColorStop(0, alpha(theme.colors.primary.dark, 1));
    successGradient.addColorStop(0.3, theme.colors.primary.main);
    successGradient.addColorStop(1, alpha(theme.colors.primary.dark, 0.4));

    return {
      datasets: [
 
        {
          label: 'Net Profit',
          backgroundColor: successGradient,
          data: dataProp.previous,
          borderWidth: 2,
          pointRadius: 0,
          borderColor: theme.colors.primary.main
        },
        {
          label: 'Net Gains',
          backgroundColor: primaryGradient,
          data: dataProp.current,
          borderWidth: 2,
          pointRadius: 0,
          borderColor: theme.colors.warning.main
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 22,
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
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 12,
            fontColor: theme.palette.text.secondary,
            beginAtZero: false,
            min: 0
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
            padding: 12,
            fontColor: theme.palette.text.secondary,
            beginAtZero: false,
            min: 0
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
      mode: 'nearest',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

AreaChart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default AreaChart;
