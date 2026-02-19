# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based personal portfolio and knowledge base (Zettelkasten-style) deployed to GitHub Pages. The site features an interactive D3.js graph visualization of interconnected notes and a backlinks system for bidirectional linking between content.

## Build and Development Commands

### Local Development
```bash
# Build the site locally
hugo

# Build with minification and garbage collection
hugo --gc --minify

# Serve locally with drafts and watch for changes
hugo server -D
```

### Testing the Build Pipeline
```bash
# Run the markdown link formatter (pre-build step)
python scripts/rewrite_md_links.py

# Full production build (matches CI/CD)
hugo --gc --minify --baseURL "https://landerwells.github.io/"
```

### Deployment
- Deployment is automatic via GitHub Actions on push to `master` branch
- Manual deployment: Use workflow_dispatch trigger in `.github/workflows/hugo.yaml`

## Architecture

### Content Structure
- **Content organized in two main sections:**
  - `content/notes/`: Zettelkasten-style interconnected notes (technical topics: C++, Rust, algorithms, graphics, etc.)
  - `content/blog/`: Traditional blog posts

- **Front matter:** All content uses TOML front matter with `title`, `publishDate`, `tags`, and `draft` fields

### Theme Architecture
The site recently migrated from a git submodule theme (Kachka) to inline layouts. All theme files are now directly in the repository:
- `layouts/`: Hugo templates and partials
- `assets/`: CSS files
- `static/js/`: JavaScript for interactive features

### Key Features

#### 1. Backlinks System
- Implemented in `layouts/_partials/backlinks.html`
- Automatically detects bidirectional links between notes
- Searches for markdown link patterns containing the current page's title
- Displays "Links to this note" section on each page

#### 2. Interactive Graph Visualization
- D3.js force-directed graph in `static/js/graph.js`
- Requires two JSON files: `/js/graph.json` (default) and `/js/graph_full.json` (expanded view)
- Features:
  - Community detection (colored clusters)
  - Node size based on centrality
  - Interactive hover/drag
  - Toggle between normal and full graph views
- Invoked via `{{< graph >}}` shortcode in `layouts/shortcodes/graph.html`

#### 3. Link Normalization
- `scripts/rewrite_md_links.py` normalizes Hugo `relref` shortcodes before build
- Converts relative paths like `{{< relref "../main/Move semantics in C++.md" >}}` to `{{< relref "Move semantics in C++" >}}`
- Runs automatically in CI/CD pipeline

### Hugo Configuration (hugo.toml)
- `refLinksErrorLevel = 'warning'`: Treats broken ref links as warnings, not errors
- `unsafe = true` in Goldmark renderer: Allows raw HTML in markdown
- `codeFences = false`: Disables syntax highlighting via code fences
- Lastmod dates sourced from git history via `:git` modifier

## Important Notes

### Graph JSON Files
The graph visualization depends on `/js/graph.json` and `/js/graph_full.json` files. These must be generated separately and are not part of the Hugo build process. The JSON files contain:
- `nodes`: Array of objects with `id`, `label`, `lnk` (URL path), `centrality`, and `communityLabel`
- `links`: Array of objects with `source` and `target` indices

### Content Cross-linking
- Use Hugo's `relref` shortcode for internal links: `{{< relref "Page Title" >}}`
- The backlinks system relies on detecting link patterns in raw markdown content
- Links should use exact page titles for backlink detection to work

### Static Assets
- JavaScript files in `static/js/` are served as-is (not processed by Hugo pipes)
- CSS in `assets/css/` can be processed through Hugo's asset pipeline if needed
- Favicon is at `static/favicon.png`

### CI/CD Pipeline
The GitHub Actions workflow installs:
- Hugo Extended v0.153.2
- Go 1.25.5
- Node.js 24.12.0
- Python 3.12

Hugo Extended is required for SCSS processing and other advanced features.
