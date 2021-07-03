import useLocalStorage from "./useLocalStorage";

const useRepoLocalStorage = () => {
  const [repoLocalStorage, setLocalStorage] = useLocalStorage("REPO", []);

  const appendRepoLocalStorage = (appendItem: any) => {
    let tempLocalStorage = repoLocalStorage;
    const contains = tempLocalStorage.some((elem: any) => {
      return JSON.stringify(appendItem) === JSON.stringify(elem);
    });

    if (!contains) {
      tempLocalStorage = [appendItem, ...tempLocalStorage];
      setLocalStorage(tempLocalStorage);
    }
  };

  return { appendRepoLocalStorage, repoLocalStorage };
};

export default useRepoLocalStorage;
