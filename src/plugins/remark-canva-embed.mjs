import { visit } from 'unist-util-visit';

/**
 * Extracts a YouTube video ID from a full URL or returns the value as-is
 * if it's already a bare ID.
 */
function extractYouTubeId(input) {
  try {
    const url = new URL(input);
    // https://www.youtube.com/watch?v=ID
    if (url.searchParams.has('v')) return url.searchParams.get('v');
    // https://youtu.be/ID
    if (url.hostname === 'youtu.be') return url.pathname.slice(1);
    // https://www.youtube.com/embed/ID
    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    // not a URL, treat as bare ID
  }
  return input;
}

/**
 * Remark plugin that transforms embed directives into responsive iframes.
 *
 * Canva usage:
 *   :::canva{src="https://www.canva.com/design/.../view?embed"}
 *   :::
 *
 * YouTube usage (URL or bare video ID):
 *   :::youtube{id="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
 *   :::
 */
export default function remarkEmbeds() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;

      if (node.name === 'canva') {
        const src = node.attributes?.src;
        if (!src) return;
        node.type = 'html';
        node.value = `<div class="canva-embed"><iframe loading="lazy" src="${src}" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe></div>`;
      }

      if (node.name === 'youtube') {
        const raw = node.attributes?.id;
        if (!raw) return;
        const videoId = extractYouTubeId(raw);
        const src = `https://www.youtube.com/embed/${videoId}`;
        node.type = 'html';
        node.value = `<div class="youtube-embed"><iframe loading="lazy" src="${src}" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;
      }
    });
  };
}
