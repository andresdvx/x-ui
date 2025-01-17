import { Carousel } from "../index";
import "./App.css";

function App() {
  const images = [
    "https://i.pinimg.com/236x/fa/02/e5/fa02e5304285590b85b85d57ef5fc1ba.jpg",
    "https://i.pinimg.com/736x/89/a0/39/89a039205effc7b87d7ee11598118449.jpg",
    "https://i.pinimg.com/736x/45/84/85/4584853771196c5b50f74b77e5085a14.jpg",
    "https://i.pinimg.com/236x/8b/73/ff/8b73ff7533cc8311530c38769f441e61.jpg",
    "https://i.pinimg.com/236x/20/1f/95/201f9558f128d2405e2a9146c45c3b29.jpg",
    "https://i.pinimg.com/736x/0a/68/a9/0a68a9a695997041ad4c6df4f5de21f1.jpg",
  ];

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1c2b38",
      }}
    >
      <div style={{ width: "350px", height: "350px" }}>
        <Carousel images={images} footerIndicator={false} />
      </div>
    </main>
  );
}

export default App;
