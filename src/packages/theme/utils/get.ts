import toPath from './toPath';

const baseGet = (object: Object, inputPath: string) => toPath(inputPath).reduce(
  (value, currentPath: string) => value[currentPath as keyof object], object
)

export default baseGet;
