const replaceAll = (
  inputString: string,
  searchValue: string,
  replaceValue: string
): string => inputString.split(searchValue).join(replaceValue);

export default replaceAll;
