interface Props {
  src: string;
  alt: string;
  title: string;
  url: string;
}

const GalleryCard = ({ src, alt, title, url }: Props) => {
  return (
    <div className="gallery_width">
      <div className="gallery_fixed_height">
        <div className="gallery_width__image">
          <img
            src={src}
            alt={alt}
            style={{ height: "auto", maxWidth: "100%" }}
          />
        </div>
        <div className="gallery_overlay">
          <h3>{title}</h3>
          <a href={url} className="gallery_icon_btn text-center">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
