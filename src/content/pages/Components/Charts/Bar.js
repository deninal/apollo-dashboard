import {
    CardContent,
    Box,
    CardHeader,
    Card,
    Stack,
    Typography,
    Divider,
    IconButton,
    styled,
    useTheme
  } from '@mui/material';
  
  import { useTranslation } from 'react-i18next';
  import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
  import BarChart from './BarChart';
  
  const BarChartWrapper = styled(BarChart)(
    () => `
            height: 415px;
    `
  );
  
  function Bar() {
    const { t } = useTranslation();
    
  
    const visitors = {
      current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
      previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    };
  
    const data = {
      percentageLocal: 63,
      percentageExternal: 37
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
          title={t('Bar Chart')}
        />
        <CardContent
          sx={{
            pt: 0
          }}
        >
          <Box
            sx={{
              height: 415
            }}
          >
            <BarChartWrapper data={visitors} labels={generic.month.labels} />
          </Box>
          <Stack
            sx={{
              mt: 4
            }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={0}
          >
           
          </Stack>
        </CardContent>
      </Card>
    );
  }
  
  export default Bar;
  