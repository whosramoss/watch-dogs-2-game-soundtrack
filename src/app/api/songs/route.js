import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed to load GET" }, { status: 500 });
    }
}
