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
  import AreaChart from './AreaChart';
  
  const AreaChartWrapper = styled(AreaChart)(
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
  

  
  function Area() {
    const { t } = useTranslation();
    const theme = useTheme();
  
    const status = {
      month: {
        current: [
          22, 40, 37, 14, 34, 13, 31, 30, 15, 29, 25, 39, 21, 26, 19, 16, 20
        ]
      }
    };
  
   
  const visitors = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731],
    total: [1030, 897, 463, 856, 285, 764, 426, 635, 1030, 1021, 1008, 821]
  };

  const generic = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
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
          title={t('Area Chart')}
        />
        <Box
          sx={{
            px: 2,
            height: 410
          }}
        >
          <AreaChartWrapper data={visitors} labels={generic.month.labels} />
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
  
  export default Area;
  