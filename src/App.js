import "./App.css";
import MainContent from "./components/main/MainContent";
import Header from "./components/header/Header";
import ModalForm from "./components/modal-form/ModalForm";
import { useState } from "react";
const movies = [
  {
    id: 1,
    title: "Avatar",
    image:
      "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    rating: 4,
  },
  {
    id: 2,
    title: "Kunfu panda",
    image:
      "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Naruto Shipuden",
    image:
      "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Hobbit",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
  },
];
function App() {
  const [movie, setMovie] = useState(movies);
  const [showModal, setShowModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  const addNewMovie = (data) => {
    const updateMovies = [...movie];
    updateMovies.push(data);
    setMovie(updateMovies);
  };
  const deleteHandler = (id) => {
    const newData = movie.filter((el) => el.id !== id);
    setMovie(newData);
  };

  return (
    <div className="App">
      <Header onShowModal={showModalHandler} />
      <MainContent movies={movie} deleteHandler={deleteHandler} onShowModal={showModalHandler}/>
      {showModal && (
        <ModalForm onShowModal={showModalHandler} addMovie={addNewMovie} />
      )}
    </div>
  );
}

export default App;
