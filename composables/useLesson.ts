import { LessonWithPath } from 'types/course';

export default async <T>(chapterSlug: string, lessonSlug: string) =>
  useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  );
