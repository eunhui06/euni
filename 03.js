import React, { useState } from 'react';

function ProfileCard(props) {
  // state: 좋아하는 음식을 저장
  const [favoriteFood, setFavoriteFood] = useState("케이크");

  // 버튼 클릭 시 좋아하는 음식을 변경하는 함수
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
      {/* ProfileCard 컴포넌트에 props 전달 */}
      <ProfileCard name="최은희" age={20} hobby="노래 듣기, 여행" />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '250px',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default App;
