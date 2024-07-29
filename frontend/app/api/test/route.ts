import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const searchParams = request.nextUrl.searchParams;
  // const body = JSON.parse(request?.body);

  // console.log("path >>> ", path);
  // console.log("searchParams >>> ", searchParams);
  // console.log("body >>> ", body);

  return NextResponse.json({ message: "Hello POSTI" }, { status: 200 });
}
