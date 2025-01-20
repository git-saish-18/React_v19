export const useFetch = async (Api) => {
  try {
    const res = await fetch(Api);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
