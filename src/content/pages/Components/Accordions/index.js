import { Helmet } from 'react-helmet-async';
import * as React from 'react';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from 'src/components/Footer';

function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>Accordions - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Accordions"
          subHeading="Accordions contain creation flows and allow lightweight editing of an element."
          docs="https://material-ui.com/components/accordion/"
        />
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Basic Example" />
              <Divider />
              <CardContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader
                title="Controlled accordion
"
              />
              <Divider />
              <CardContent>
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      I am an accordion
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Users
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Filtering has been entirely disabled for whole web server
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel4'}
                  onChange={handleChange('panel4')}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Personal data
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Accordions;
