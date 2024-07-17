import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "../../styles.css"; // Importing the main CSS file

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
