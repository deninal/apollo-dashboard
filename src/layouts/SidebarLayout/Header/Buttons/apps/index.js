import { IconButton, Popover, Tooltip } from '@mui/material';
import { useRef, useState } from 'react';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import MarkChatUnreadTwoToneIcon from '@mui/icons-material/MarkChatUnreadTwoTone';
import { NavLink } from 'react-router-dom';

function HeaderNotifications() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Chat">
        <IconButton
          component={NavLink}
          to="/dashboards/messenger"
          color="primary"
        >
          <MarkChatUnreadTwoToneIcon />
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      ></Popover>
    </>
  );
}

export default HeaderNotifications;
