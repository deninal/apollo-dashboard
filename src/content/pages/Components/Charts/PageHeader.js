import {
  Typography,
  Box,
  styled,
  Avatar,
  lighten,
  alpha,
  Stack,
  Divider,
  useTheme,
  Card
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        color: ${theme.colors.alpha.white[100]};
        margin-right: ${theme.spacing(2)};
        background: ${theme.colors.primary.main};
        box-shadow: ${
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.8),
                0.2
              )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)`
            : `0px 2px 4px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.4
              )}, 0px 5px 16px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}`
        };
  `
);

function PageHeader() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <AvatarPageTitle variant="rounded">
          <PieChartTwoToneIcon fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Charts')}
          </Typography>
        </Box>
      </Box>
      <Card
        sx={{
          mt: { xs: 3, lg: 0 }
        }}
      ></Card>
    </Box>
  );
}

export default PageHeader;
