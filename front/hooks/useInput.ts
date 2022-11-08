import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type Handler = (e: ChangeEvent<HTMLInputElement>) => void; //애니를안쓰고싶으면
// type Handler = (e: any) => void;
type ReturnTypes<T> = [T, Handler, Dispatch<SetStateAction<T>>];
const useInput = <T extends string | number>(initialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
    // setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
