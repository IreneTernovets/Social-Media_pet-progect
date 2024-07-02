import "../App.css";
import PeopleSuggest from "../widgets/peopleSuggest/PeopleSuggest.tsx";
import NewsSuggests from "../widgets/newsSuggest/NewsSuggests.tsx";

function Homepage() {
  return (
    <>
      <PeopleSuggest />
      <NewsSuggests />
    </>
  );
}

export default Homepage;
