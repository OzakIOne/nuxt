export default async () => {
  const course = useCourse();

  return course.value.chapters[0].lessons[0];
};
