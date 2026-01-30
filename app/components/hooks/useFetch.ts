type FETCHRESULT<T> = {
  data: T | null;
};

const isTrue = true;

const useFetch = async <T>(): Promise<FETCHRESULT<T>> => {
  const promise = new Promise((resolve, reject) => {
    if (isTrue) {
      resolve('promise resolved!');
    }
    {
      reject('promise rejected!');
    }
  });
  return null;
};

export default useFetch;
