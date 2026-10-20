/**
 * Remark plugin that renders a "Presentace" section from frontmatter,
 * so lessons don't have to repeat the same heading + embed block.
 *
 * Canva (embedded via iframe):
 *   presentation:
 *     type: canva
 *     src: https://www.canva.com/design/.../view
 *
 * PDF (served from public/, e.g. public/courses-files/...):
 *   presentation:
 *     type: pdf
 *     src: /courses-files/course/lesson.pdf
 *
 * Placement: put a `:::presentation` block (or `:::presentace`, or the one-line
 * `::presentation`) where the section should appear. Without the block, the
 * section is inserted before the first `##` heading (or appended when the page
 * has none). Pages without `presentation` render nothing, even with the block.
 */

const PLACEHOLDER_NAMES = new Set(['presentation', 'presentace']);

function isPlaceholder(node) {
  return (
    (node.type === 'containerDirective' || node.type === 'leafDirective') &&
    PLACEHOLDER_NAMES.has(node.name)
  );
}

const HEADING = 'Presentace';

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/** Canva only embeds when the URL ends with `/view?embed`. */
function toCanvaEmbedUrl(src) {
  const url = new URL(src);
  url.search = '?embed';
  return url.toString();
}

function renderEmbed({ type, src }) {
  if (type === 'canva') {
    const embedSrc = escapeAttr(toCanvaEmbedUrl(src));
    return `<div class="canva-embed"><iframe loading="lazy" src="${embedSrc}" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe></div>`;
  }
  if (type === 'pdf') {
    const pdfSrc = escapeAttr(src);
    return (
      `<div class="pdf-embed"><iframe loading="lazy" src="${pdfSrc}" title="${HEADING}"></iframe></div>` +
      `<p><a href="${pdfSrc}" download>Stáhnout presentaci (PDF)</a></p>`
    );
  }
  throw new Error(`Unknown presentation type "${type}" (expected "canva" or "pdf").`);
}

export default function remarkPresentation() {
  return (tree, file) => {
    const presentation = file.data.astro?.frontmatter?.presentation;

    // Remember where the (first) placeholder was, then drop all placeholders.
    const placeholderIndex = tree.children.findIndex(isPlaceholder);
    tree.children = tree.children.filter((node) => !isPlaceholder(node));

    if (!presentation?.src) return;

    const nodes = [
      { type: 'heading', depth: 2, children: [{ type: 'text', value: HEADING }] },
      { type: 'html', value: renderEmbed(presentation) },
    ];

    let index = placeholderIndex;
    if (index === -1) {
      index = tree.children.findIndex((node) => node.type === 'heading' && node.depth === 2);
      if (index === -1) index = tree.children.length;
    }
    tree.children.splice(index, 0, ...nodes);
  };
}
