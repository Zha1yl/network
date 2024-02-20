// import React, { useState } from "react";

// const FavoritesPage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [likes, setLikes] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleAddFavorite = () => {
//     setFavorites([...favorites, inputValue]);
//     setInputValue("");
//   };

//   const handleAddLike = () => {
//     setLikes([...likes, inputValue]);
//     setInputValue("");
//   };

//   return (
//     <div>
//       <h2>Избранное</h2>
//       <ul>
//         {favorites.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <h2>Лайки</h2>
//       <ul>
//         {likes.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleAddFavorite}>Добавить в избранное</button>
//       <button onClick={handleAddLike}>Добавить лайк</button>
//     </div>
//   );
// };

// export default FavoritesPage;
