import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
  { value: "americas", label: "Americas" },
  { value: "antarctic", label: "Antarctic" },
];

export function RegionMenu(props) {
  const { countriesList, setFilteredCountries } = props;

  const handleRegionChange = (e) => {
    const region = e.label;

    const filteredList =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);

    setFilteredCountries(filteredList);
  };
  return (
    <Select
      defaultValue={options[0]}
      onChange={handleRegionChange}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100 transition-colors duration-300",
        singleValue: () => "dark:text-gray-100 transition-colors duration-300",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14 transition-colors duration-300",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}
