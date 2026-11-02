---
title: "Journalist interview notes on your Mac, by source and story"
description: "Keep interview notes per source, link sources to stories and find any quote again in seconds, in plain markdown files on your Mac with no account."
date: 2026-11-01
slug: journalist-interview-notes-mac
image: /images/fuzzy_finder.png
image_alt: "The Paperkites ⌘K finder listing notes, tags and commands for a typed query"
---

A reporter's notes outlive the story they were taken for. The council officer you interviewed about a planning row in March turns up again in October on a different story, and you need what she told you the first time, word for word. If that interview lives in a notebook, a recorder transcript and a half-finished draft, you spend the afternoon reconstructing it instead of writing.

There's a second problem, and it matters more. Some of what you write down could identify someone who talked to you on the condition that nobody would know. Those notes shouldn't sit readable in a folder that gets backed up, synced or left open on a laptop in a press room.

This article shows how to keep journalist interview notes on your Mac in Paperkites: one note per source, linked to the stories they feed, tagged by beat, with quick capture for tips and full-text search for the quote you half remember.

## Setting up a notes vault for reporting

Paperkites keeps every note as a plain `.md` file in a folder you choose, your vault. There's no account, no database and no analytics or telemetry, so nothing about who you talk to leaves the folder unless you move it yourself.

A layout that works for most reporters:

- `sources/`, one note per source, kept for as long as you cover the beat
- `interviews/`, one note per conversation, dated in the title
- `stories/`, one note per story, from pitch to publication
- `tips/`, for leads that haven't become anything yet

⌘\ shows the sidebar, with folders that mirror the vault on disk.

Tags carry the beat and the status. Nested tags keep them tidy:

| Tag | Use it for |
|---|---|
| `#beat/council` | Everything on a beat |
| `#beat/health` | A second beat, or a temporary one |
| `#status/pitched` | Stories waiting on an editor |
| `#on-record` / `#background` | The terms of each interview |
| `#check` | A claim you haven't verified |

The `#on-record` and `#background` tags are worth adding to every interview note. When you come back to a quote months later, the terms it was given on are on the same page.

Paperkites doesn't record or transcribe audio. Keep recording on whatever you use now; the interview note is where the typed notes, the timestamps worth going back to and the quotes you'll use belong.

## A week on the beat

### Tips and quick capture

The app opens on a capture box. A call comes in, a reader emails, someone at a meeting says something worth a follow-up: type it and press ⌘↩. It's kept as a fragment, a short note without a title. ⏎ is only a new line and never saves, and `esc` never throws a draft away, even across a quit, so a tip typed with the phone on your shoulder is still there after.

At the end of the day, go through the list. Fragments that turned into something get opened as full notes (⌘E) and filed under `tips/` with a beat tag. The rest you can leave or delete.

### Interview notes, one per conversation

Before an interview, make the note: `2026-10-28 Planning officer, call`. Write your questions as a short list at the top. During the call, type underneath. Afterward, clean it up while it's fresh: mark the quotes you'll use, add the terms tag, and link the note to the source and the story.

Links are wiki links. `[[Planning officer, Harbour Ward]]` points at the source note, `[[Story: Harbour Road housing]]` at the story, and `[[Story: Harbour Road housing#Timeline]]` at a heading inside it. Retitle a note later, when the working title becomes the headline, and every link to it is rewritten. `:undo` reverts that if you didn't mean it.

### Source notes that build up over time

The source note is the long-lived one. It holds how you know the person, how to reach them, what they've been reliable on and what they haven't, and a running list of every interview, as links. When a source comes up again on a new story, that note tells you in thirty seconds what took three conversations to learn.

### Stories that collect their sources

The story note is the other end of the link. It holds the pitch, the questions still open, and the list of who you've spoken to. Every interview that links to it appears in its backlinks, with the sentence each link sits in, so the story note shows its own sourcing without you maintaining a separate list. Before filing, that's a quick check that every claim in the draft has someone behind it.

### Follow-ups as todos

Any line written `- [ ]` is a todo. Put them where they come up: "ask for the 2024 minutes" in the interview note, "right of reply to the developer" in the story note. ⌘↩ ticks one off. `:todos` lists every open todo in the vault under Overdue, Today, Upcoming and No date, so a callback promised in Tuesday's interview doesn't wait until Friday. More in [how todos work](/docs/todos).

## An example interview note

```markdown
# 2026-10-28 Planning officer, call

#beat/council #background

Source: [[Planning officer, Harbour Ward]]
Story: [[Story: Harbour Road housing]]

## Questions
1. When did the developer first contact the department?
2. Who signed off the revised flood assessment?

## Notes
- First contact "well before the consultation opened",
  thinks spring, will check
- Revised assessment came from an outside consultant,
  not the council's own team #check
- "Nobody here would have approved the first version."
  (background only, not for attribution)

## Follow up
- [ ] Ask the press office for the consultant's name
- [ ] Request the 2024 committee minutes
- [x] Send thank-you, confirm terms in writing
```

The links tie the interview to the person and the story; the tags say what beat it's on and on what terms it was given.

## Finding a quote again

The quote you need is usually one you half remember, from a call you can't date.

- **`/`** searches the text of every note, under 100 ms on 10,000 notes. Type the three words you remember, "nobody here would", and the interview comes up. Add `#beat/council` to narrow it when the phrase is common.
- **⌘K** finds notes, fragments, tags and commands in one ranked list. A few letters of a source's name, ⏎, and you're on their page.
- **Backlinks** on a source note list every interview and story that links to them, each with its sentence.
- **`:tags`** shows the tag tree, and a tag's page shows the tags often used with it: `#beat/health` turning up next to `#beat/council` might be a story in itself.
- **`/` narrowed with `#check`** brings up the notes where you flagged a claim you haven't verified yet. Run it before you file.
- **`:orphans`** finds notes nothing links to, usually interviews you never connected to a source.

The [finding docs](/docs/finding) cover every search option.

If your interviews are inside one organization rather than across a beat, [one-on-one meeting notes](/usecase/one-on-one-meeting-notes-mac) follows a similar pattern.

## Where Pro helps: locked notes and people pages

The core app is free for good. Two Pro features fit reporting closely.

**Locked notes.** `:lock` encrypts a note with a password. Its text, tags, links and attachments never sit readable on disk, so a photographed document or a source's real name and number aren't sitting in plain text in a folder that gets backed up. The password can't be recovered, so keep it somewhere you trust. A common pattern is to give a confidential source a code name in every ordinary note ("Harbour 2"), and keep the one note that says who that is locked. See [how locked notes work](/docs/locked-notes).

**People pages.** `@mentions` point at person notes, with aliases, and each person gets a page with every sentence that mentions them and who and what often comes up with them. For on-record sources this makes the source note fill itself in. `/` also narrows by `@name`. For confidential sources, mention the code name, not the person.

Pro is one payment with a 14-day trial, no card needed. If the trial ends without buying, Pro features go read-only and every note still opens.

## In short

One note per conversation, one per source, one per story, linked to each other and tagged by beat and terms. Capture tips the moment they arrive, file them at the end of the day, and keep the few names that must never leak behind a password. The next time a source resurfaces, everything they've told you is one search away.
