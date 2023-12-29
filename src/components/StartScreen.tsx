import { MainScreenIcon } from "./MainScreenIcon";
import SampleInputBubble from "./SampleInputBubble";

const StartScren = () => {
  return (
    <div className="main-screen-wrapper">
      <MainScreenIcon />
      <h1 className="main-title">Chat with Ceramic Network</h1>
      <p className="main-description">
        You can include your indexes by connecting your wallet
      </p>
      <div className="bubbles-wrapper">
        <SampleInputBubble text="What are the best practices for scaling a ComposeDB application?" />
        <SampleInputBubble text="How can I integrate Ceramic Network with Lit Protocol? " />
      </div>
    </div>
  );
};

export default StartScren;
