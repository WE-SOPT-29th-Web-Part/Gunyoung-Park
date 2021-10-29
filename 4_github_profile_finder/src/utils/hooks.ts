import { useEffect, useState } from "react";
import { getGithubUserInfo, GithubUserInfo } from "./api";

export function useGithubProfileInfo(username: string) {
  const [userInfo, setUserInfo] = useState<GithubUserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (username === "") {
      setUserInfo(null);
      return;
    }

    async function getInfo(username: string) {
      setIsLoading(true);
      setIsError(false);
      setIsNotFound(false);
      try {
        const data = await getGithubUserInfo(username);
        if (data) {
          setUserInfo(data);
        } else {
          setUserInfo(null);
          setIsNotFound(true);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getInfo(username);
  }, [username]);

  return {
    userInfo,
    isLoading,
    isError,
    isNotFound,
  };
}
