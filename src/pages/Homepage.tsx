import "../App.css";
import PeopleSuggest from "../widgets/peopleSuggest/PeopleSuggest.tsx";
import NewsSuggests from "../widgets/newsSuggest/NewsSuggests.tsx";
import PostInput from "../components/PostInput.tsx";

function Homepage() {
  return (
    <>
      <PostInput />
      <div className="widget-group">
        <PeopleSuggest />
        <NewsSuggests />
      </div>
    </>
  );
}

export default Homepage;
