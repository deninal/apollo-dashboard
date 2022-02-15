import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader() {
  const user = {
    name: 'Jane Doe',
    avatar: '/static/images/avatars/1.jpg',
    email: 'jane.doe@email.com'
  };

  return (
    <>
      <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title="Go back">
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="subtitle2">
            {user.email}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PageHeader;
