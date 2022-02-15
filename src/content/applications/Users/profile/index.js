
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { Container, Grid } from '@mui/material';
import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';

function ManagementUserProfile() {

  const user = {
    savedCards: 7,
    name: 'Jane Doe',
    coverImg: '/static/images/placeholders/covers/6.jpg',
    avatar: '/static/images/avatars/1.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage',
    jobtitle: 'Project Manager',
    location: 'San Diego, California',
    followers: '465'
  };

  return (
    <>
      <Helmet>
        <title>Profile Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
}

export default ManagementUserProfile;
