import { Paper, Box, Stack, styled, Typography, Button } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MenuIcon from "@mui/icons-material/Menu";

const Item = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  width: "24px",
  height: "24px",
  color: theme.palette.text.primary,
  cursor: "pointer",
  // marginTop: "20px  ",
}));

const Icons = () => {
  return (
    <Box flex={1}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: "40px", justifyContent: "flex-end" }}
      >
        <Item
        // sx={{
        //   position: "absolute",
        //   width: "24px",
        //   height: "24px",
        //   left: "930px",
        //   top: "45px",
        // }}
        >
          <PersonIcon />
        </Item>
        <Item>
          <MarkEmailUnreadIcon />
        </Item>
        <Item>
          <MenuIcon />
        </Item>
      </Stack>
    </Box>
  );
};

export default Icons;
