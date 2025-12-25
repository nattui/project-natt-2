import fs from "node:fs"
import path from "node:path"

export function getContents() {
  // Gets files in `content` directory
  const files = fs.readdirSync(path.join("content"))

  console.log(":::: files:", files)
}
