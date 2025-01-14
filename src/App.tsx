import { Carousel } from "../index";
import "./App.css";

function App() {
  const images = [
    "https://i.pinimg.com/736x/af/63/e2/af63e2494e03902c55e0081b560fc994.jpg",
    "https://i.pinimg.com/736x/89/a0/39/89a039205effc7b87d7ee11598118449.jpg",
    "https://i.pinimg.com/736x/45/84/85/4584853771196c5b50f74b77e5085a14.jpg",
    "https://i.pinimg.com/236x/ab/bb/33/abbb337252b44c09b68937fea8e6464b.jpg",
    "https://i.pinimg.com/474x/d5/f7/24/d5f724c66be3957bd4d87898a2ce9325.jpg"
  ];

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#1c2b38" }}>
      <div style={{ width: "25%"}}>
        <Carousel images={images} footerControl/>
      </div>
    </main>
  );
}

export default App;
