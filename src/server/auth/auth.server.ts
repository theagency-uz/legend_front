import { tokenKey, httpClient } from "@/server/request";

import { jwtDecode } from "jwt-decode";

import { getCookie, setCookie } from "@/lib/cookie";

const apiEndpoint = process.env.NEXT_PUBLIC_BASE_URL + "/auth";

import { IUserLogin } from "@/types/admin/user";

function getUserByJwt(jwt: string) {
  if (typeof window !== "undefined") {
    try {
      const user = jwtDecode(jwt);
      return user;
    } catch (error) {
      return null;
    }
  }
}

async function login(user: IUserLogin) {
  try {
    let { data: token } = await httpClient.post(apiEndpoint, user);

    if (typeof window !== "undefined") {
      const user = getUserByJwt(token);

      setCookie(tokenKey, token, user?.exp);

      httpClient.setJwt(token);

      return { status: 200, user: user };
    }
  } catch (err) {
    return err;
  }
}

function getUser() {
  if (typeof window !== "undefined") {
    try {
      const jwt = getCookie(tokenKey);

      const user = jwtDecode(jwt);
      return user;
    } catch (error) {
      return null;
    }
  }
}

export { login, getUser };
