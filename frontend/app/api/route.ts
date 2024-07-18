import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const queryParam = req.nextUrl.searchParams.get("cat");
  console.log("URLPARA<S>: ", queryParam);

  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=5WNZYyniFPAbSFxeqZdrXpXaES5gxNLk&keyword=${queryParam}&locale=*`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const product = await res.json();

  return Response.json({ product });
}
