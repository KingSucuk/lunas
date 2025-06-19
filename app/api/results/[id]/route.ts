import { NextResponse, NextRequest } from 'next/server';
import { database } from '../../db';
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(request: NextRequest, { params }: any) {
  const data = database[params.id];
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ images: data.images });
}
