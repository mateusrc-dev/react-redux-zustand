import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Video() {
  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });

  return (
    <ReactPlayer
      with="100%"
      height="100%"
      controls={true}
      url={`https://www.youtube.com/watch?v=${lesson.id}`}
    />
  );
}
