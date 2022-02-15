import {
  Link,
  CardContent,
  Avatar,
  Box,
  Typography,
  ListItemAvatar,
  Card,
  ListItemText,
  ListItem,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SportsBasketballTwoToneIcon from '@mui/icons-material/SportsBasketballTwoTone';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.main};
      color: ${theme.palette.getContrastText(theme.colors.error.main)};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
      box-shadow: ${theme.colors.shadows.error};
  `
);

const CardContentWrapper = styled(CardContent)(
  ({ theme }) => `
       padding: ${theme.spacing(2.5, 3, 3)};
    
       &:last-child {
       padding-bottom: 0;
       }
  `
);

function ActiveReferrals() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContentWrapper>
        <Typography variant="overline" color="text.primary">
          {t('Bounce Rate')}
        </Typography>

        <ListItem
          disableGutters
          sx={{
            my: 1
          }}
          component="div"
        >
          <ListItemAvatar>
            <AvatarPrimary variant="rounded">
              <SportsBasketballTwoToneIcon fontSize="large" />
            </AvatarPrimary>
          </ListItemAvatar>

          <ListItemText
            primary="37.5%"
            primaryTypographyProps={{
              variant: 'h1',
              sx: {
                ml: 2
              },
              noWrap: true
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          sx={{
            mt: 0.5,
            mb: 1.5
          }}
          component="div"
        >
          <ListItemText
            primary={
              <>
                <Link fontWeight="bold" href="#">
                  {t('See links')}
                </Link>
                <Box
                  component="span"
                  sx={{
                    pl: 0.5
                  }}
                >
                  {t('with high bounce rate.')}
                </Box>
              </>
            }
            primaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
        </ListItem>
      </CardContentWrapper>
    </Card>
  );
}

export default ActiveReferrals;
