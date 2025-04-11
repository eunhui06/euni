import React, { useState } from 'react';

function ProfileCard(props) {
  const [favoriteFood, setFavoriteFood] = useState("케이크");

  const changeFavoriteFood = () => {
    setFavoriteFood("도넛");
  };

  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p>나이: {props.age}</p>
      <p>취미: {props.hobby}</p>
      <p>좋아하는 음식: {favoriteFood}</p>
      <button onClick={changeFavoriteFood} style={styles.button}>좋아하는 음식 바꾸기</button>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <ProfileCard name="최은희" age={20} hobby="여행" />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '250px',
  },
  button: {
    padding: '10px 10px',
    border: 'none',
    backgroundColor: 'skyblue',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default App;
