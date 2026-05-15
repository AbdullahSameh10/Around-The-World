import { CountryList, MessageBox, RegionMenu, SearchBar } from "../Components";
import { useFetchData } from "../Hooks";

export function HomePage() {
  const { countriesList, filteredCountries, setFilteredCountries, isLoading, isError } = useFetchData();
  
  return (
    <div className="container mx-auto px-5 md:px-0">
      {isError && <MessageBox>Something Went Wrong...</MessageBox>}
      {isLoading && <MessageBox>Loading Countries Data...</MessageBox>}
      {!isLoading && !isError && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchBar
              countriesList={countriesList}
              setFilteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={countriesList}
              setFilteredCountries={setFilteredCountries}
            />
          </div>
          <CountryList countries={filteredCountries} />
        </>
      )}
    </div>
  );
}
