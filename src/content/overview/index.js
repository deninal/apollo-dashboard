import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

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
      <Container maxWidth="lg">
        <Card sx={{ p: 5, marginTop: 10 }}>
          <Box
            display="flex"
            justifyContent="center"
            py={5}
            alignItems="center"
          >
            <Logo />
          </Box>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
