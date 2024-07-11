import "../App.css";
import PeopleSuggest from "../widgets/peopleSuggest/PeopleSuggest.tsx";
import NewsSuggests from "../widgets/newsSuggest/NewsSuggests.tsx";
import PostInput from "../components/PostInput.tsx";
import WelcomingCard from "../components/WelcomingCard.tsx";

function Homepage() {
  return (
    <>
      <div className="homepage-group">
        <PostInput />
        <WelcomingCard />
      </div>

      <div className="widget-group">
        <PeopleSuggest />
        <NewsSuggests />
      </div>
    </>
  );
}

export default Homepage;
