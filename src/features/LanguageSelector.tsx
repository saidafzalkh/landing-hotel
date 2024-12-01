import React from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { useTranslation } from "react-i18next";

import enFlag from "../shared/assets/flags/en.svg";
import ruFlag from "../shared/assets/flags/ru.svg";
import uzFlag from "../shared/assets/flags/uz.svg";

interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { value: "en", label: "English", flag: enFlag },
  { value: "ru", label: "Русский", flag: ruFlag },
  { value: "uz", label: "O'zbek", flag: uzFlag },
];

const customStyles: StylesConfig<LanguageOption, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    minHeight: "auto",
    color: "gray",
    cursor: "pointer",
    width: "150px",
  }),
  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "transparent",
    color: "inherit",
    cursor: "pointer",
    ":hover": {
      background: "#007AFF",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "inherit",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "inherit",
    ":hover": { color: "inherit" },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (selectedOption: SingleValue<LanguageOption>) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  return (
    <Select
      isSearchable={false}
      options={languages}
      onChange={handleChange}
      defaultValue={languages.find((lang) => lang.value === i18n.language)}
      formatOptionLabel={(e) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={e.flag} alt="" style={{ width: 20, marginRight: 8 }} />
          {e.label}
        </div>
      )}
      getOptionValue={(e) => e.value}
      styles={customStyles}
    />
  );
};

export default LanguageSelector;
