"use client";

export default function ReviewError({error}: {error: Error}) {
    return <h1>Error: {error.message}</h1>;
}