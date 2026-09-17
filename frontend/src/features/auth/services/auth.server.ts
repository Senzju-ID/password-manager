import { cookies, headers } from "next/headers";

export const getUserData = async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const rawCookies = cookieStore.toString();
  const xsrfToken = cookieStore.get("XSRF-TOKEN")?.value;

  const decodeXsrf = xsrfToken ? decodeURIComponent(xsrfToken) : "";

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const host = headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto")
  const currentOrigin = `${protocol}://${host}`

  try {
    const res = await fetch(`${baseUrl}/api/user`, {
      headers: {
        Accept: "application/json",
        Cookie: rawCookies,
        "X-XSRF-TOKEN": decodeXsrf,
        Referer: currentOrigin,
        Origin: currentOrigin,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(res.status);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
