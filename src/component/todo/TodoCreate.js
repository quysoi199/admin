import { Create, SimpleForm, TextInput, useTranslate } from "react-admin";
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
  Card,
  TextField,
} from "@mui/material";

const Separator = () => <Box pt="1em" />;
const SectionTitle = ({ label }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {translate(label)}
    </Typography>
  );
};

export const TodoCreate = (props) => (
  <Create {...props}>
    <Box sx={{ width: "100%" }}>
      <TextField
        sx={{ width: "100%" }}
        disabled
        id="outlined-disabled"
        defaultValue="TẠO MỚI ĐIỀU KIỆN (RULE)"
      />
    </Box>
    <SimpleForm sx={{ maxWidth: "100%" }}>
      <Box
        display={{
          xs: "block",
          sm: "flex",
          width: "100%",
          paddingBottom: "10px",
        }}
      >
        <Box sx={{ width: "30%" }}>
          <TextInput
            source="Tên điều kiện"
            isRequired
            fullWidth
            defaultValue="Tải ứng dụng lần đầu"
          />
        </Box>
        <Box sx={{ width: "30%" }} ml={{ sm: "0.5em" }}>
          <TextInput
            source="Mã điều kiện"
            isRequired
            fullWidth
            defaultValue="FIRST_INSTALL_MOMI_APP"
          />
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
            <MenuItem value={10}>Điều kiện - General form</MenuItem>
            <MenuItem value={20}>Điều kiện - Form 1</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Card sx={{ width: "100%" }}>
        <SectionTitle label="CÔNG THỨC TÍNH ĐIỂM THƯỞNG" />

        <Box
          display={{
            xs: "block",
            sm: "flex",
            width: "30%",
            paddingBottom: "10px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Loại thưởng*</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Loai 1</MenuItem>
              <MenuItem value={20}>Loai 2</MenuItem>
              <MenuItem value={30}>Loai 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextInput
          sx={{ width: "30%" }}
          source="Điểm thưởng"
          isRequired
          fullWidth
        />
      </Card>
      <FormControlLabel control={<Switch defaultChecked />} label="Hoạt động" />
      <Separator />
    </SimpleForm>
  </Create>
);
