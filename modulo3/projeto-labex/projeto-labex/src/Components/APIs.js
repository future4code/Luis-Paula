import axios from 'axios';
import { useEffect, useState } from 'react';

const name = 'luis';
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';

export function useApi() {
  const [component, setComponent] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/${name}/trips`).then((res) => {
      setComponent(res.data);
    });
  }, []);

  return component;
}
