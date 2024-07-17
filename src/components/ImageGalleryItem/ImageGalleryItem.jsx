import React from "react";
import PropTypes from "prop-types";
import "../../styles.css"; // Importing the main CSS file

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(largeImageURL)}>
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
