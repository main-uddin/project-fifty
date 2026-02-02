type FETCHRESULT<T> = {
  data: T | null;
  error?: string | null;
};

const isTrue = true;

const data = { name: 'main uddin' };
const useFetch = async <T>(url: string): Promise<FETCHRESULT<T>> => {
  const promise = new Promise<FETCHRESULT<T>>((resolve, reject) => {
    if (isTrue) {
      const res = fetch(url);
      console.log('res: ', res);
      resolve({ data: data as T, error: null });
    }
    {
      reject({ data: null, error: 'promise rejected!' });
    }
  });

  return promise;
};

export default useFetch;
