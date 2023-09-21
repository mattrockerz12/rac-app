import { GalleryOneData } from "../data";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section className="gallery_area">
      {GalleryOneData.map(({ title, image, url }, index) => (
        <GalleryCard
          key={`gallery-one-${index}`}
          src={image}
          alt=""
          title={title}
          url={url}
        />
      ))}
    </section>
  );
};

export default Gallery;
