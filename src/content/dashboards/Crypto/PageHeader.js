import {
  Typography,
  Avatar,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Stack,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';

function PageHeader() {
  const user = {
    name: 'Jane Doe',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      {/* <Grid item>
          <Avatar
            sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }}
            variant="rounded"
            alt={user.name}
            src={user.avatar}
          />
        </Grid> */}
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Hello, {user.name}!
        </Typography>
        <Typography variant="subtitle2">
          This is your crypto dashboard
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
