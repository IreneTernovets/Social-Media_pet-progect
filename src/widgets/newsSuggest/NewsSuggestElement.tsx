import newsImages, { NewsImage } from "../../assets/newsDataPics";
import Divider from "@mui/material/Divider";

interface News {
  id: number;
  title: string;
  body: string;
}

interface NewsSuggestElementProps {
  post: News;
}

function selectNewPicture(newsImages: NewsImage[]): NewsImage {
  const randomIndex = Math.floor(Math.random() * newsImages.length);
  return newsImages[randomIndex];
}

const truncateAndCapitalizeTitle = (title: string): string => {
  const maxLength = 25;
  let truncatedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  return truncatedTitle.charAt(0).toUpperCase() + truncatedTitle.slice(1);
};

const NewsSuggestElement: React.FC<NewsSuggestElementProps> = ({ post }) => {
  const selectedPicture = selectNewPicture(newsImages);
  const formattedTitle = truncateAndCapitalizeTitle(post.title);
  return (
    <div className="news-suggest-element">
      <Divider />
      <div className="news-suggest-element-card">
        <div className="header">
          <span>Trending⚡️</span>
          <h4>{formattedTitle}</h4>
        </div>
        <p>{post.body}</p>
        <img
          className="news-suggest-element-image"
          key={selectedPicture.id}
          src={selectedPicture.src}
          alt={selectedPicture.alt}
        />
      </div>
    </div>
  );
};

export default NewsSuggestElement;
