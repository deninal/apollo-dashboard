import {
  Box,
  Card,
  Stack,
  CardHeader,
  Typography,
  Divider,
  Avatar,
  Badge,
  Tooltip,
  IconButton,
  Grid,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Gauge from 'src/components/Gauge';
import { formatDistance, subMinutes } from 'date-fns';
import LineChart from './LineChart';

const LineChartWrapper = styled(LineChart)(
  () => `
            height: 415px;
    `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
    `
);

const DotLegend = styled('span')(
  ({ theme }) => `
        border-radius: 22px;
        width: ${theme.spacing(1.5)};
        height: ${theme.spacing(1.5)};
        display: inline-block;
        margin-right: ${theme.spacing(0.5)};
        border: ${theme.colors.alpha.white[100]} solid 2px;
    `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
            background: ${theme.colors.gradients.blue3};
    `
);

const CardWhite = styled(Card)(
  ({ theme }) => `
            background: ${
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[10]
                : theme.colors.alpha.trueWhite[100]
            };
            padding: ${theme.spacing(3)};
    `
);

function Line() {
  const { t } = useTranslation();
  const theme = useTheme();

  const status = {
    month: {
      current: [
        22, 40, 37, 14, 34, 13, 31, 30, 15, 29, 25, 39, 21, 26, 19, 16, 20
      ]
    }
  };

  const month = [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7',
    'Day 8',
    'Day 9',
    'Day 10',
    'Day 11',
    'Day 12',
    'Day 13',
    'Day 14'
  ];

  const data = {
    percentageLocal: 63,
    percentageExternal: 37
  };

  return (
    <Card>
      <CardHeader
        sx={{ p: 3 }}
        titleTypographyProps={{
          component: 'h5',
          variant: 'h6',
          fontWeight: 'bold',
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center'
          }
        }}
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Line Chart')}
      />
      <Box
        sx={{
          px: 2,
          height: 410
        }}
      >
        <LineChartWrapper data={status.month} labels={month} />
      </Box>
      <Stack
        sx={{
          py: 4
        }}
        direction="row"
        divider={
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`
            }}
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0}
      ></Stack>
    </Card>
  );
}

export default Line;
