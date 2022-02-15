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
  import PendingActionsIcon from '@mui/icons-material/PendingActions';
  
  const AvatarError = styled(Avatar)(
    ({ theme }) => `
    background-color: ${theme.colors.warning.main};
      color:  ${theme.palette.primary.contrastText};
        
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
  
  function PendingInvitations() {
    const { t } = useTranslation();
  
    return (
      <Card>
        <CardContentWrapper>
          <Typography variant="overline" color="text.primary">
            {t('Pending Invitations')}
          </Typography>
  
          <ListItem
            disableGutters
            sx={{
              my: 1
            }}
            component="div"
          >
            <ListItemAvatar>
              <AvatarError variant="rounded">
                <PendingActionsIcon fontSize="large" />
              </AvatarError>
            </ListItemAvatar>
  
            <ListItemText
              primary="36"
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
                    {t('See invitations')}
                  </Link>
                  <Box
                    component="span"
                    sx={{
                      pl: 0.5
                    }}
                  >
                    {t('not opened yet.')}
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
  
  export default PendingInvitations;
  