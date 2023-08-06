import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch } from "../store";

export function Video() {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    dispatch(next());
  }

  if (!currentLesson) {
    return null;
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
