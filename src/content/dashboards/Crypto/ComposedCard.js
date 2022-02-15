import {
  Box,
  Grid,
  Card,
  Tooltip,
  Typography,
  IconButton,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 7;

    .MuiTypography-root {
        color: ${theme.palette.primary.contrastText};

        & + .MuiTypography-root {
            color: ${alpha(theme.palette.primary.contrastText, 0.7)};
        }
    }
    
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      background: transparent;
      transition: ${theme.transitions.create(['all'])};
      color: ${theme.colors.alpha.trueWhite[70]};
      border-radius: 50px;
  
      &:hover {
        background: transparent;
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

function ComposedCard() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Grid item xs={12}>
        <BoxComposed
          display="flex"
          alignItems="center"
          sx={{
            minHeight: '100%',
            background: `${theme.colors.gradients.pink1}`
          }}
        >
          <BoxComposedBg
            sx={{
              opacity: 0.6,
              background: `${theme.colors.gradients.blue1}`
            }}
          />
          <BoxComposedImage
            sx={{
              opacity: 0.4,
              backgroundImage: 'url("/static/images/placeholders/covers/1.jpg")'
            }}
          />
          <BoxComposedContent px={8} pt={4} pb={4}>
            <Box display="flex" alignItems="center">
              <Label color="black">
                <Typography
                  fontWeight="bold"
                  sx={{
                    px: 1,
                    fontSize: `${theme.typography.pxToRem(10)}`,
                    textTransform: 'uppercase'
                  }}
                >
                  {t('New release')}
                </Typography>
              </Label>
              <Tooltip
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper
                  sx={{
                    ml: 0.5
                  }}
                >
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </Box>
            <Typography
              lineHeight="1.4"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(30)}`
              }}
              variant="h1"
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Typography>
            
           

            <Box
              mt={4}
              sx={{
                textAlign: 'center'
              }}
            >
              <Tooltip arrow placement="top" title="Facebook">
                <IconButtonWrapper>
                  <FacebookIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
              <Tooltip arrow placement="top" title="Twitter">
                <IconButtonWrapper>
                  <TwitterIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
              <Tooltip arrow placement="top" title="Instagram">
                <IconButtonWrapper>
                  <InstagramIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </Box>
          </BoxComposedContent>
        </BoxComposed>
      </Grid>
    </Card>
  );
}

export default ComposedCard;
