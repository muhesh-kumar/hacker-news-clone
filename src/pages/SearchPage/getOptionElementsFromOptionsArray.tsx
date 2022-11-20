type OptionType = {
  key: string;
  value: string;
};

export default (options: OptionType[]) =>
  options.map((option: OptionType) => (
    <option key={option.key} value={option.value}>
      {option.key}
    </option>
  ));
