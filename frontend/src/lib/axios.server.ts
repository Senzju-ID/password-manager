
import "server-only";



import { cookies, headers } from "next/headers";

import axios from "axios";



const ApiServer = async (cookie?: string) => {

    const cookieStore = await cookies();

    const headerStore = await headers();



    const rawCookies = cookie || cookieStore.toString();



    const xsrfToken = cookieStore.get("XSRF-TOKEN")?.value;

    const decodeXsrf = xsrfToken

        ? decodeURIComponent(xsrfToken)

        : "";



    const host = headerStore.get("host");

    const protocol =

        headerStore.get("x-forwarded-proto") ?? "http";



    const currentOrigin = `${protocol}://${host}`;



    return axios.create({

        baseURL: process.env.NEXT_PUBLIC_API_URL,

        headers: {

            Accept: "application/json",

            "X-Requested-With": "XMLHttpRequest",

            Cookie: rawCookies,

            "X-XSRF-TOKEN": decodeXsrf,

            Referer: currentOrigin,

            Origin: currentOrigin

        }

    });

};



export default ApiServer;


