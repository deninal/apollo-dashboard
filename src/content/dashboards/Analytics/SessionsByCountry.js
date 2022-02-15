import {
  CardHeader,
  Divider,
  Card,
  LinearProgress,
  List,
  ListItem,
  Box,
  Typography,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import deFlag from './media/DE.svg';
import usFlag from './media/US.svg';
import esFlag from './media/ES.svg';
import frFlag from './media/FR.svg';
import ruFlag from './media/RU.svg';

const ImageWrapper = styled('img')(
  ({ theme }) => `
        margin-right: ${theme.spacing(1)};
        width: 30px;
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        margin-right: ${theme.spacing(1)};
`
);

const ListItemWrapper = styled(ListItem)(
  () => `
        border-radius: 0;
`
);

function SessionsByCountry() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Sessions by Country')} />
      <Divider />
      <List disablePadding component="nav">
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ImageWrapper alt="USA" src={usFlag} />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            USA
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={44}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              44%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ImageWrapper alt="Germany" src={deFlag} />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Germany
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={31}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              31%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ImageWrapper alt="France" src={frFlag} />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            France
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={23}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              23%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ImageWrapper alt="Spain" src={esFlag} />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Spain
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={11}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              11%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ImageWrapper alt="Russia" src={ruFlag} />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Russia
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={8}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              8%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
      </List>
    </Card>
  );
}

export default SessionsByCountry;
