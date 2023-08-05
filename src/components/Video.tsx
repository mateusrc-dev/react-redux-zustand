import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <ReactPlayer
      with="100%"
      height="100%"
      controls={true}
      playing={true}
      onEnded={handlePlayNext}
      url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
    />
  );
}
