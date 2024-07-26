import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ smallImage, onClick }) => (
  <li className="ImageGalleryItem" onClick={onClick}>
    <img src={smallImage} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
