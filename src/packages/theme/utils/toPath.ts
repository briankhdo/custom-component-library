import replaceAll from './replaceAll';
const toPath = (value: string): Array<string> =>
  replaceAll(replaceAll(value, '[', '.'), ']', '').split('.');

export default toPath;
