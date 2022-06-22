import { Create, SimpleForm, MenuItemLink, TextInput, useTranslate } from "react-admin";
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Switch,
  TextField,
} from "@mui/material";
import { CreatePost } from "../posts/CreatePost";

const Separator = () => <Box pt="1em" />;
const SectionTitle = ({ label }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {translate(label)}
    </Typography>
  );
};

export const AlbumCreate = (props) => (
  <Create {...props}>
    <SimpleForm sx={{ maxWidth: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          disabled
          id="outlined-disabled"
          defaultValue="TẠO MỚI ĐIỀU KIỆN (RULE)"
        />
      </Box>
      <Box
        display={{
          xs: "block",
          sm: "flex",
          width: "100%",
          paddingBottom: "10px",
        }}
      >
        <Box sx={{ width: "30%" }}>
          <TextInput source="Tên điều kiện" isRequired fullWidth />
        </Box>
        <Box sx={{ width: "30%" }} ml={{ sm: "0.5em" }}>
          <TextInput source="Mã điều kiện" isRequired fullWidth />
        </Box>
      </Box>
      <SectionTitle label="Đối tượng áp dụng*" />

      <Box
        display={{
          xs: "block",
          sm: "flex",
          width: "100%",
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Agent" />
          <FormControlLabel value="male" control={<Radio />} label="Customer" />
        </RadioGroup>
      </Box>
      <Box
        display={{
          xs: "block",
          sm: "flex",
          width: "30%",
          paddingBottom: "10px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Điều kiện mẫu*</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItemLink to={CreatePost} primaryText="asdasd" />
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormControlLabel control={<Switch defaultChecked />} label="Hoạt động" />
      <Separator />
    </SimpleForm>
  </Create>
);
