import { useEffect, useState } from "react";

export const useFetching = (callback) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    callback()
      .then((response) => setPosts(response.data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return [posts, isLoading, error];
};
