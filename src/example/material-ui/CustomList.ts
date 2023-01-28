import { styled } from "@mui/material/styles";
import List from "@mui/material/List";

export const CustomList = styled(List)(({ theme }) => ({
  "& .MuiListItem-root": {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiListItem-root:last-of-type": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiListItemText-primary": {
    fontWeight: "bold",
  },
}));
