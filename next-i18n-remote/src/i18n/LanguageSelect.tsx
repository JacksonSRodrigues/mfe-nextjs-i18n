import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "next-i18next";

export const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "es",
    name: "Spanish",
  },
];

function LanguageSelect() {
  const { i18n } = useTranslation();
  const [lngCode, setLngCode] = React.useState(i18n.language);

  useEffect(() => {
    console.log(i18n);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLngCode(event.target.value as string);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select value={lngCode} label="Language" onChange={handleChange}>
      {languages.map(({ code, name }) => (
        <MenuItem key={code} value={code}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguageSelect;
