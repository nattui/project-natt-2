"server-only"

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

interface Content {
  content: string
  date: string
  path: string
  slug: string
  title: string
}

/**
 * Gets all the contents of the files in the content directory
 * @returns A list of contents
 */
export function getContents(): Content[] {
  const contentDirectory = path.join(process.cwd(), "content")
  const contentFiles = fs.readdirSync(contentDirectory)

  const contents = contentFiles.map((file) => {
    const filePath = path.join(contentDirectory, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const slug = file.replace(".mdx", "")

    const { data: matterData } = matter(fileContent)
    const title = matterData.title ?? ""
    const date = matterData.date ?? ""

    return {
      content: fileContent,
      date,
      path: filePath,
      slug,
      title,
    }
  })

  return contents
}
