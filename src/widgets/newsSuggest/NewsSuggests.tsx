import { useEffect, useState } from "react";
import NewsSuggestElement from "./NewsSuggestElement";
import Divider from "@mui/material/Divider";

interface News {
  id: number;
  title: string;
  body: string;
}

const getRandomNews = (posts: News[], count: number): News[] => {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const NewsSuggests = () => {
  const [randomPosts, setRandomPosts] = useState<News[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setRandomPosts(getRandomNews(data, 6)));
  }, []);

  return (
    <div className="widget">
      <h3 className="widget-header">What's happening</h3>
      <div className="widget-elements">
        {randomPosts.map((post) => (
          <NewsSuggestElement key={post.id} post={post} />
        ))}
      </div>
      <Divider />
      <button className="news-suggets-show-button">Show more</button>
    </div>
  );
};

export default NewsSuggests;
