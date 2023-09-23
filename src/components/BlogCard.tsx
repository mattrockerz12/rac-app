import { Link } from "react-router-dom";

interface Data {
  image: string;
  date: string;
  author: string;
  commentCount: number;
  title: string;
  url: string;
  text: string;
}

interface Props {
  data: Data;
}

const BlogCard = (props: Props) => {
  const { image, date, author, commentCount, title, url, text } = props.data;
  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <img
          src={image}
          alt={title}
          style={{ height: "auto", maxWidth: "100%" }}
        />
        <span className="blog_date">{date}</span>
      </div>
      <div className="blog_share_details">
        <span className="comment_author">
          by <Link to={url}>{author}</Link> -{" "}
          <Link to={url}>{commentCount} Comments</Link>
        </span>
        <h1>
          <Link to={url}>{title}</Link>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogCard;
