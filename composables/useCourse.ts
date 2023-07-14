import { CourseOutline } from '~/server/api/course/meta.get';

export default () => useFetchWithCache<CourseOutline>('/api/course/meta');
