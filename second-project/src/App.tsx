import AlertBox from "./components/AlertBox";
import Greeting from "./components/greeting";
import Header from "./components/header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <Greeting name="Ram" />
      <ProfileCard
        name="Sam"
        age={25}
        bio="I am a learner"
        imageURL="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt134818d279038650/6668df6434f6fb5cd48aac34/beautiful-flowers-rose.jpeg?q=70&width=3840&auto=webp"
      />
      
      <AlertBox message="The code is working" type="success" />
      <AlertBox message="The code failed" type="danger" />
      <AlertBox message="This is a warning" type="warning" />
    </div>
  );
}

export default App;
