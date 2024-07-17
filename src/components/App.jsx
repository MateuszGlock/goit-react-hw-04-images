import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import axios from "axios";

const API_KEY = "44932961-d39f9f89f928c138824effb07";
const BASE_URL = "https://pixabay.com/api/";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [totalHits, setTotalHits] = useState(0); // To track total hits

  useEffect(() => {
    if (query === "") return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        );
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
        setTotalHits(response.data.totalHits); // Update total hits
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageURL) => {
    setModalImage(imageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage("");
  };

  const totalPages = Math.ceil(totalHits / 12); // Calculate total pages
  const canLoadMore = page < totalPages; // Determine if more pages are available

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {canLoadMore && !loading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
