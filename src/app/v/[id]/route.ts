import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type RedirectEntry = {
  id: string
  name: string
  linkToVideo: string
  linkToWeb: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const filePath = path.join(process.cwd(), 'public', 'redirects.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const redirects: RedirectEntry[] = JSON.parse(fileContents)

  const entry = redirects.find((item) => item.id === id)

  if (!entry || !entry.linkToVideo) {
    return new NextResponse('Видео не найдено', { status: 404 })
  }

  return NextResponse.redirect(entry.linkToVideo, 307)
}