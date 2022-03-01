import { Box, Button, Container, Grid, Typography, Card } from '@mui/material';
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
    font-size: ${theme.typography.pxToRem(17)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

// const JsAvatar = styled(Box)(
//   ({ theme }) => `
//     width: ${theme.spacing(8)};
//     height: ${theme.spacing(8)};
//     border-radius: ${theme.general.borderRadius};
//     background-color: #ffffff;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Apollo React Admin Dashboard
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Premium React & MUI Admin Template built with lots of powerful
            components, developer-friendly, rich with features, and highly
            customisable.
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/dashboards/crypto"
            size="large"
            variant="contained"
          >
            <VisibilityTwoToneIcon
              sx={{
                mr: 1
              }}
            />
            Preview Demo
            <ArrowForwardTwoToneIcon
              sx={{
                ml: 1
              }}
            />
          </Button>

          <Grid container justifyContent="center" spacing={1} mt={5}>
            <Grid item>
              <MuiAvatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </MuiAvatar>
              {/* <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by Material-UI</b>
                </Box>
              </Typography> */}
            </Grid>
            <Grid item>
              <MuiAvatar>
                <img
                  src="/static/images/logo/javascript.svg"
                  alt="javascript"
                />
              </MuiAvatar>
            </Grid>
            <Grid item>
              <MuiAvatar>
                <img src="/static/images/logo/react.png" alt="javascript" />
              </MuiAvatar>
            </Grid>
            <Grid item>
              <MuiAvatar>
                <img src="/static/images/logo/router.png" alt="react-router" />
              </MuiAvatar>
            </Grid>
            <Grid item>
              <MuiAvatar>
                <img src="/static/images/logo/apex.png" alt="apex-charts" />
              </MuiAvatar>
            </Grid>
            <Grid item>
              <MuiAvatar>
                <img
                  src="/static/images/logo/styled.png"
                  alt="styled-components"
                />
              </MuiAvatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
