import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
// const baseUrl = "";
const RapidApiKey = process.env.REACT_APP_RapidApiKey;
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": RapidApiKey,
      },
    });
    const data = await response?.json();
console.log(data)
if (type.includes("/news")) {
    setResults(data.entries)
} else if (type.includes("/image")){
    setResults(data.image_results)
} else {
    setResults(data.results)
}

    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchQuery,
        setSearchQuery,
        isLoading,
      }}
    >
        {children}
    </ResultContext.Provider>
  );
};

export const useResultContext =()=> useContext(ResultContext)