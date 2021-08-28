export const useStringUtils = () => {

  const capitalize = (input: string): string => {
    return input.toUpperCase()
  };

  return { capitalize };
};
