"""
Normalize Hugo relref shortcodes to a single-level path.

Example:
    {{< relref "../main/Move semantics in C++.md" >}}

Becomes:
    {{< relref "Move semantics in C++" >}}

Scope:
- Recursively processes *.md files under content/
- Files are modified in place
"""

from pathlib import Path
import re

CONTENT_ROOT = Path("content")

RELREF_RE = re.compile(
    r'(\{\{<\s*relref\s+")([^"]+?)(?:\.md)?("\s*>}})'
)

def normalize_relref(match: re.Match) -> str:
    """Rewrite relref path to its basename without .md."""
    prefix, path, suffix = match.groups()

    # Take only the final path component
    name = Path(path).name

    return f'{prefix}{name}{suffix}'

def rewrite_file(path: Path) -> None:
    original = path.read_text(encoding="utf-8")
    rewritten = RELREF_RE.sub(normalize_relref, original)

    if rewritten != original:
        path.write_text(rewritten, encoding="utf-8")

def main() -> None:
    for md_file in CONTENT_ROOT.rglob("*.md"):
        rewrite_file(md_file)

if __name__ == "__main__":
    main()
