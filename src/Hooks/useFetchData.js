import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useFetchData(country) {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchDataFromAPI = useCallback(() => {
    let url =
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,tld,flags,languages,currencies";

    setIsLoading(true);
    if (country)
      url = `https://restcountries.com/v3.1/name/${country}?fields=name,capital,region,subregion,population,tld,flags,languages,currencies`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) setCountriesList(data[0]);
        else {
          setCountriesList(data);
          setFilteredCountries(data);
          localStorage.setItem("countriesData", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [country]);

  const fetchDataFromLocalStorage = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("countriesData"));
    if (data) {
      setCountriesList(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  }, [fetchDataFromAPI]);

  useEffect(() => {
    if (country) fetchDataFromAPI();
    else fetchDataFromLocalStorage();
  }, [country, fetchDataFromAPI, fetchDataFromLocalStorage]);

  return {
    countriesList,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
}
