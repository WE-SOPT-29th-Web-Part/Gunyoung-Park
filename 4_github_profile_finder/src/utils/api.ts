export interface GithubUserInfo {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;

  public_repos: number;
  bio: string | null;
  followers: number;
  following: number;
}

export async function getGithubUserInfo(
  username: string
): Promise<GithubUserInfo | null> {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    return null;
  }

  const data: unknown = await res.json();

  if (!isDataGithubUserInfo(data, username)) {
    return null;
  }

  return data;
}

function isDataGithubUserInfo(
  data: unknown,
  username: string
): data is GithubUserInfo {
  if (!isObject(data)) {
    return false;
  }
  if ((data as GithubUserInfo).login === username) {
    return true;
  }
  return false;
}

function isObject(obj: unknown): obj is object {
  return typeof obj === "object" && obj !== null;
}
