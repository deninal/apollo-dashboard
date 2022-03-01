import {
  Avatar,
  Tooltip,
  IconButton,
  Box,
  Button,
  styled,
  InputBase,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(1)};
    width: 100%;
    border: ${theme.palette.secondary.light} 1px solid;
    border-radius: ${theme.general.borderRadius};
`
);

const Input = styled('input')({
  display: 'none'
});

function BottomBarContent() {
  const { t } = useTranslation();
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: 'Software Developer'
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.colors.alpha.bgAlt[100],
        display: 'flex',
        alignItems: 'center',
        p: 2
      }}
    >
      <Box flexGrow={1} display="flex" alignItems="center">
        <Avatar
          sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
          alt={user.name}
          src={user.avatar}
        />
        <MessageInputWrapper
          autoFocus
          placeholder={t('Write your message here...')}
          fullWidth
        />
      </Box>
      <Box>
        <Tooltip arrow placement="top" title={t('Choose an emoji')}>
          <IconButton
            sx={{ fontSize: theme.typography.pxToRem(16) }}
            color="primary"
          >
            😀
          </IconButton>
        </Tooltip>
        <Input accept="image/*" id="messenger-upload-file" type="file" />
        <Tooltip arrow placement="top" title={t('Attach a file')}>
          <label htmlFor="messenger-upload-file">
            <IconButton sx={{ mx: 1 }} color="primary" component="span">
              <AttachFileTwoToneIcon fontSize="small" />
            </IconButton>
          </label>
        </Tooltip>
        <Button startIcon={<SendTwoToneIcon />} variant="contained">
          {t('Send')}
        </Button>
      </Box>
    </Box>
  );
}

export default BottomBarContent;
