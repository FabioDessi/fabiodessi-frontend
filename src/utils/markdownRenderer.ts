import { Renderer } from 'marked';

const createTailwindMarkdownRenderer = () => {
  const renderer = new Renderer();

  renderer.heading = function (text, level) {
    const sizes = ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs'];
    return `<h${level} class="${sizes[level - 1]} mt-4 mb-2">${text}</h${level}>`;
  };

  renderer.paragraph = function (text) {
    return `<p class="mb-4">${text}</p>`;
  };

  renderer.list = function (body, ordered, start) {
    const type = ordered ? 'ol' : 'ul';
    const startAttr = ordered && start !== 1 ? ` start="${start}"` : '';
    return `<${type} class="list-disc list-inside my-4"${startAttr}>${body}</${type}>`;
  };

  return renderer;
};

const aboutIntroRenderer = () => {
  const renderer = new Renderer();

  renderer.paragraph = function (text) {
    return `<p class="font-robotoSlab font-extralight text-2xl tracking-wide"">${text}</p>`;
  };

  return renderer;
};

const aboutBlocksRenderer = () => {
  const renderer = new Renderer();

  renderer.paragraph = function (text) {
    return `<p class="font-robotoSlab font-extralight text-lg">${text}</p>`;
  };

  return renderer;
};

export {
  createTailwindMarkdownRenderer,
  aboutIntroRenderer,
  aboutBlocksRenderer,
};

