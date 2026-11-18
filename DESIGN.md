# Design

## Three directions

The work is about systems that connect things and can be trusted: agents that wait for a
person, workflows that survive a restart, pipelines that must quote their sources. Three
ideas came out of that material.

1. **Held at signal.** The page is a railway track diagram. Every section is a station on
   one line, every project is drawn as a track, and wherever a person has to decide there
   is an amber signal. The line ends at a signal held for the reader.
2. **The run log.** The site as an audit record: each project is a saved run with inputs,
   steps, cost and outcome, laid out as dense tables. True to the work, but it turns into a
   fake dashboard quickly, and a recruiter has to decode it.
3. **Quote your sources.** Every claim carries its evidence in a margin column, the way the
   pipeline must quote the rule it cites. Honest, but most of the evidence is in private
   repositories a reader cannot open, and a margin-noted document drifts toward editorial.

The first one won. Railway signalling is where fail-safe design comes from: a signal stays
at danger until something clears it, and a section of track holds one train at a time. That
is the same promise as "waits for approval" and "never runs twice", and anyone can read a
line with stops on it. Swap in another developer's projects and the signals have nothing to
mean.

## Concept

One black line runs down the page from a buffer stop in the hero. Sections are stations on
it. Case studies are told in words on the left and drawn as a track on the right, where
each stop says who acts: plain code, a model, or a person. The line ends by turning into a
large amber signal at the contact section. Reaching for the email address clears it.

## Palette

Colour means state and nothing else. The page is ink on a panel; a hue only appears where
a signal would.

| Token | Day | Night | Why |
|---|---|---|---|
| `--panel` | `#ecefea` | `#0e1211` | The enamel of a signal-box diagram: a cool grey-green, kept away from cream paper and from navy. |
| `--panel-2` | `#e0e5de` | `#171c1a` | A recessed panel for diagrams, one step from the page. |
| `--ink` | `#101413` | `#e9ede8` | Track, type and outlines. Near-black with the panel's green in it, so nothing looks pasted on. |
| `--ink-2` | `#434c48` | `#a7b0ab` | Secondary text. Passes WCAG AA on both panels. |
| `--rule` | `#bfc6be` | `#333b37` | Hairlines between rows. |
| `--amber` | `#f5a800` | `#ffb627` | A signal held for a person. Only ever a fill, never text. |
| `--green` | `#12a150` | `#35d07f` | Clear: available, approved, proceed. |
| `--red` | `#d93a26` | `#ff6b57` | Stopped: a rejected action, a closed line (the 404). |

## Typefaces

- **Atkinson Hyperlegible Next** (Braille Institute, SIL OFL 1.1) for everything I say. It
  was drawn so that no character can be mistaken for another: I, l and 1 differ, and so do
  O and 0. On a page that says "AI" in most paragraphs, "AI" never reads as "Al".
- **Sofia Sans Extra Condensed** (Lettersoup, SIL OFL 1.1) for everything the system says:
  station names, labels, dates. It was first drawn as the typeface of the city of Sofia and
  takes after early-twentieth-century technical sans serifs, which is the voice of a sign.

Both are self-hosted as Latin subsets with their licences in `src/assets/fonts/`.

## Layout

- A rail column on the left carries the main line; content hangs off it.
- Type and spacing scale fluidly from 320px. Past 1920px the root size follows the viewport,
  so the composition grows with the screen instead of floating in the middle of it.
- Components respond to their own width with container queries: a case study goes side by
  side when its box is wide enough, wherever that box happens to be.
- Skills are a strip map: each skill is a line that stops at the places it was used.

## Signature

The amber signal. It marks every step where a person decides, it breathes in the hero and
at the end of the line, and the page finishes on it: the last step needs a person.

## Motion

Two things move on their own: the held signals pulse slowly. Everything else responds to
the reader (hover, focus, the signal clearing). `prefers-reduced-motion` turns all of it off.
