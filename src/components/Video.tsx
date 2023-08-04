import ReactPlayer from "react-player";

export function Video() {
  return (
    <ReactPlayer
      with="100%"
      height="100%"
      controls={true}
      url="https://www.youtube.com/watch?v=TTJLNXfJlIQ"
    />
  );
}
