import "./Streams.css";
import { LiveStreams, TopStream } from "../../sections/index";

const Streams = () => {
  return (
    <>
      <div className="container-stream">
        <LiveStreams />
        <TopStream />
      </div>
    </>
  );
};

export default Streams;
