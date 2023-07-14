export default <LessonWithPath>(chapterSlug: string, lessonSlug: string) =>
  useFetchWithCache<LessonWithPath>(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);
