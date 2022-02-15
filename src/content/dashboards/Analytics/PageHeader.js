import { Grid, Typography, Avatar, useTheme, Stack, IconButton } from '@mui/material';
// import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'; 

function PageHeader() {
  const { t } = useTranslation();
  // const { user } = useAuth();
  const theme = useTheme();

  const user = {
    savedCards: 7,
    name: 'Jane Doe',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/1.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage',
    jobtitle: 'Web Developer',
    location: 'Berlin, Germany',
    followers: '465'
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      {/* <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid> */}
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {/* {t('Welcome')}, {user.name}! */}
          Apollo Analytics
        </Typography>
        <Typography variant="subtitle2">
          {t('These are your analytics stats for today')},{' '}
          <b>{format(new Date(), 'MMMM dd yyyy')}</b>
        </Typography>
      </Grid>

      <Stack direction="row" spacing={1}>
        <IconButton aria-label="Download" color="primary">
          <DownloadTwoToneIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Date Range">
          <DateRangeTwoToneIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Add Widget">
          <AddBoxTwoToneIcon />
        </IconButton>
      </Stack>
    </Grid>
  );
}

export default PageHeader;
