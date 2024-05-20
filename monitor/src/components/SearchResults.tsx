type SearchResultsProps = {
  results: SearchResult[];
};

type SearchResult = {
  description: string;
  symbol: string;
  displaySymbol: string;
  type: string;
};

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-32 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar">
      {results.map((item) => (
        <li
          key={item.symbol}
          className="cursor-pointer p-2 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
        >
          <span> {item.symbol} </span>
          <span> {item.description} </span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
