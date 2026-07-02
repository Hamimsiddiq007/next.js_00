import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeader = new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));

    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    return new Response("<h1>Hello from the API route!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "theme=dark"
        },
    });
}