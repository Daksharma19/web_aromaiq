import * as React from "react"

// Minimal Markdown for assistant replies: paragraphs, "-"/"1." lists, **bold**, *italic*, `code`,
// [links](url) and bare URLs. Renders React nodes only — model output never becomes raw HTML.

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s)]+|`[^`]+`|\*[^*\s][^*]*\*)/g

function safeHref(url: string) {
  return /^(https?:|mailto:|\/)/i.test(url) ? url : null
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:/i.test(href)
  return (
    <a
      href={href}
      className="font-medium underline underline-offset-2 hover:opacity-70"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  )
}

function inline(text: string): React.ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className="rounded bg-foreground/5 px-1 font-mono text-[0.85em]">{part.slice(1, -1)}</code>
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      const href = safeHref(link[2])
      return href ? <ExternalLink key={i} href={href}>{link[1]}</ExternalLink> : link[1]
    }
    if (/^https?:\/\//.test(part)) {
      const trimmed = part.replace(/[.,;:!?]+$/, "")
      return (
        <React.Fragment key={i}>
          <ExternalLink href={trimmed}>{trimmed.replace(/^https?:\/\/(www\.)?/, "")}</ExternalLink>
          {part.slice(trimmed.length)}
        </React.Fragment>
      )
    }
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}

type Block = { type: "p"; lines: string[] } | { type: "ul" | "ol"; items: string[] }

function parse(text: string): Block[] {
  const blocks: Block[] = []
  for (const raw of text.split("\n")) {
    const line = raw.trim()
    const bullet = line.match(/^[-*•]\s+(.*)$/)
    const numbered = line.match(/^\d+[.)]\s+(.*)$/)
    const last = blocks.at(-1)

    if (!line) {
      blocks.push({ type: "p", lines: [] })
    } else if (bullet || numbered) {
      const type = bullet ? "ul" : "ol"
      const item = (bullet ?? numbered)![1]
      if (last?.type === type) last.items.push(item)
      else blocks.push({ type, items: [item] })
    } else if (last?.type === "p") {
      last.lines.push(line.replace(/^#+\s*/, ""))
    } else {
      blocks.push({ type: "p", lines: [line.replace(/^#+\s*/, "")] })
    }
  }
  return blocks.filter((b) => (b.type === "p" ? b.lines.length > 0 : true))
}

export function MessageContent({ text }: { text: string }) {
  return (
    <div className="space-y-2">
      {parse(text).map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i}>
              {block.lines.map((line, j) => (
                <React.Fragment key={j}>
                  {j > 0 && <br />}
                  {inline(line)}
                </React.Fragment>
              ))}
            </p>
          )
        }
        const List = block.type
        return (
          <List key={i} className={List === "ul" ? "list-disc space-y-1 pl-5" : "list-decimal space-y-1 pl-5"}>
            {block.items.map((item, j) => (
              <li key={j}>{inline(item)}</li>
            ))}
          </List>
        )
      })}
    </div>
  )
}
