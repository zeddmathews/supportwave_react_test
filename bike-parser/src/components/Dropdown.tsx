interface DropdownProps<T> {
  options: { value: T, label: string }[];
  onChange: (value: T) => void;
  value: string;
}

const Dropdown = <T extends unknown>({ options, onChange, value }: DropdownProps<T>) => {
  return (
    <select value={value as any} onChange={(e) => onChange(e.target.value as T)}>
      {options.map((option) => (
        <option key={option.value as any} value={option.value as any}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
