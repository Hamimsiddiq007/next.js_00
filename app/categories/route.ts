export const dynamic = "force-static";

export async function GET() {
    const categories = [
        { id: 1, name: "Technology" },
        { id: 2, name: "Science" },
        { id: 3, name: "Art" },
        { id: 4, name: "Music" },
    ];
    return Response.json(categories);
}