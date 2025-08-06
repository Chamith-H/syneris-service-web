import Select from "react-select";
import "../../../styles/shared/inputs/FormDropdown.css";

type Option = {
  value: any;
  label: string;
};

type Props = {
  label: string;
  mandatory: boolean;
  submitted: boolean;
  options: Option[];
  value: any;
  loading: boolean;
  disabled: boolean;
  onChange: (selected: Option | null) => void;
  error: string;
};

export default function FormDropdown({
  label,
  mandatory,
  value,
  options,
  onChange,
  submitted,
  loading,
  disabled,
  error,
}: Props) {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      fontSize: "13px",
      fontFamily: "R3",
      fontWeight: "400",
      textShadow: "none",
      borderColor: "#e9e9e9",
      borderRadius: "3px",
      boxShadow: "none",
      height: "38px",
      minHeight: "38px",
      "&:hover": {
        borderColor: "#e9e9e9",
      },
    }),
    valueContainer: (base: any) => ({
      ...base,
      height: "38px",
      padding: "0 8px",
    }),
    indicatorsContainer: (base: any) => ({
      ...base,
      height: "38px",
    }),
    menu: (base: any) => ({
      ...base,
      fontSize: "13px",
    }),
    option: (base: any, state: any) => ({
      ...base,
      fontSize: "13px",
      fontFamily: "R3",
      fontWeight: "400",
      color: state.isSelected ? "#FFFFFF" : "#777777",
      backgroundColor: state.isSelected
        ? "#0C7184"
        : state.isFocused
        ? "#72def348"
        : "transparent",
      cursor: "pointer",
    }),
  };

  const valueFetcher = () => {
    const option = options.find((opt: any) => opt.value === value);
    return option;
  };

  return (
    <div className="FormDropdown">
      <label>
        {label}
        {mandatory && <span className="text-danger">&nbsp;*</span>}
      </label>
      <Select
        value={valueFetcher()}
        options={options}
        onChange={onChange}
        isSearchable
        placeholder="Select an option..."
        styles={customStyles}
        isLoading={loading}
        isDisabled={loading || disabled}
      />

      {submitted && mandatory && value === "" && <p>{error}</p>}
    </div>
  );
}
