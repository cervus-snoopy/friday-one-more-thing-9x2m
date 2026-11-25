import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "It's 4:59 on a Friday. My boss just said 'one more thing' and the thing has slides.";

// Gate: one line, 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true, mode: 0o755 });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, { encoding: "utf8", mode: 0o644 });
chmodSync(outPath, 0o644);
