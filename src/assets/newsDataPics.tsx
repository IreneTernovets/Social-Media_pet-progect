import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.webp";
import pic7 from "../assets/pic7.webp";
import pic8 from "../assets/pic8.webp";

export interface NewsImage {
  id: number;
  src: string;
  alt: string;
}

const newsImages: NewsImage[] = [
  { id: 1, src: pic1, alt: "News Picture 1" },
  { id: 2, src: pic2, alt: "News Picture 2" },
  { id: 3, src: pic3, alt: "News Picture 3" },
  { id: 4, src: pic4, alt: "News Picture 4" },
  { id: 5, src: pic5, alt: "News Picture 5" },
  { id: 6, src: pic6, alt: "News Picture 6" },
  { id: 7, src: pic7, alt: "News Picture 7" },
  { id: 8, src: pic8, alt: "News Picture 8" },
];

export default newsImages;
