import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(25)};
`
);

function Demos() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 10 }}>
      <Box>
        <TypographyH2 sx={{ mb: 2 }} variant="h1">
          300+ components and 4 different color schemes
        </TypographyH2>
      </Box>
      <Grid container justifyContent="center" spacing={3} mt={2}>
        <Grid item xs={12} md={6} p>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/overview/board1.png"
            />
          </Card>
          <Typography variant="h4">
            <Box sx={{ py: 2 }}>
              <b>Light Theme 1</b>
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/overview/board2.png"
            />
          </Card>
          <Typography variant="h4">
            <Box sx={{ py: 2 }}>
              <b>Light Theme 2</b>
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/overview/board3.png"
            />
          </Card>
          <Typography variant="h4">
            <Box sx={{ py: 2 }}>
              <b>Light Theme 3</b>
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/overview/board4.png"
            />
          </Card>
          <Typography variant="h4">
            <Box sx={{ py: 2 }}>
              <b>Dark Theme</b>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Demos;
