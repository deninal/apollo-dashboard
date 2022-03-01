import { Box, Container, CardMedia, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';
import Demos from './Demos';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Apollo React Admin Dashboard</title>
      </Helmet>
      <Container sx={{ p: 5, marginTop: 10 }}>
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Hero />
        <Card>
          <CardMedia
          component="img"
          image="/static/images/overview/dashboard.png"
        />
        </Card>
        <Demos />
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
