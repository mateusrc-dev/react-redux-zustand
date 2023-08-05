import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });

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
      url={`https://www.youtube.com/watch?v=${lesson.id}`}
    />
  );
}
