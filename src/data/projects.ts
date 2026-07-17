// Selected projects, reverse chronological.
// Each project has two consistent link rows: `press` (coverage + awards) and `links` (official resources / deployments).

export interface ProjectLink {
  label: string;
  href: string;
}

export interface GalleryItem {
  img: string;
  alt: string;
  href: string;
  pos?: string; // tailwind object-position class
}

export interface Project {
  id: string;
  period: string;
  title: string;
  blurb: string;
  image: string;
  imagePos?: string;
  imageContain?: boolean;
  gallery?: GalleryItem[];
  press: ProjectLink[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'content-seal',
    period: '2024 – 2026',
    title: 'Content Seal',
    blurb:
      'Built the <span class="font-medium text-ink">Content Seal team from the ground up</span>, scaling watermarking research into products across Meta, including Muse Image and Video. Now <span class="font-medium text-ink">watermarking millions of videos and audio clips per day</span> across the family of apps, spanning AudioSeal, Video Seal, Pixel Seal, and Text Seal.',
    image: '/assets/media/media-contentseal-site.jpg',
    imagePos: 'object-center',
    press: [
      { label: 'TechCrunch', href: 'https://techcrunch.com/2024/12/12/meta-releases-a-tool-for-watermarking-ai-generated-videos/' },
      { label: 'MIT Tech Review', href: 'https://www.technologyreview.com/2024/06/18/1094009/meta-has-created-a-way-to-watermark-ai-generated-speech/' },
      { label: 'Engineering at Meta · @Scale', href: 'https://engineering.fb.com/2025/11/04/video-engineering/video-invisible-watermarking-at-scale/' },
    ],
    links: [
      { label: 'In Muse Image / Video', href: 'https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/' },
      { label: 'meta.ai/identification', href: 'https://meta.ai/identification' },
      { label: 'Website', href: 'https://facebookresearch.github.io/content-seal/' },
      { label: 'GitHub', href: 'https://github.com/facebookresearch/content-seal' },
    ],
  },
  {
    id: 'seamless',
    period: '2022 – 2024',
    title: 'Seamless: Speech Translation',
    blurb:
      'Part of the Seamless team behind <span class="font-medium text-ink">SeamlessM4T</span>, a single foundation model for direct speech-to-speech and speech-to-text translation across <span class="font-medium text-ink">nearly 100 languages</span>. A <span class="font-medium text-ink">TIME Best Invention of 2023</span>, later <span class="font-medium text-ink">published in Nature</span>.',
    image: '/assets/media/media-time-cover.jpg',
    imagePos: 'object-top',
    gallery: [
      { img: '/assets/media/media-nature-cover.jpg', alt: 'Nature cover, vol. 637 (Jan 2025)', href: 'https://www.nature.com/articles/s41586-024-08359-z', pos: 'object-top' },
    ],
    press: [
      { label: 'Time · Best Invention 2023', href: 'https://time.com/collection/best-inventions-2023/6326994/meta-seamlessm4t/' },
      { label: 'Nature 2025', href: 'https://www.nature.com/articles/s41586-024-08359-z' },
      { label: 'Ars Technica', href: 'https://arstechnica.com/information-technology/2023/08/metas-massively-multilingual-ai-model-translates-up-to-100-languages-speech-or-text/' },
    ],
    links: [
      { label: 'Meta AI blog', href: 'https://ai.meta.com/blog/seamless-m4t/' },
      { label: 'Demo (HF)', href: 'https://huggingface.co/spaces/facebook/seamless_m4t' },
    ],
  },
  {
    id: 'bigscience',
    period: '2021 – 2022',
    title: 'BigScience',
    blurb:
      'Co-chaired the multilinguality working group of BigScience, the open, year-long collaboration of 1,000+ researchers from 60+ countries that produced BLOOM, a 176B-parameter open multilingual language model and a landmark in open, participatory AI.',
    image: '/assets/media/media-bigscience.jpg',
    imagePos: 'object-center',
    press: [
      { label: 'MIT Tech Review', href: 'https://www.technologyreview.com/2022/07/12/1055817/inside-a-radical-new-project-to-democratize-ai/' },
      { label: 'VentureBeat', href: 'https://venturebeat.com/ai/ai-goes-multilingual-with-hugging-faces-bloom-large-language-model/' },
    ],
    links: [
      { label: 'BLOOM paper', href: 'https://arxiv.org/abs/2211.05100' },
      { label: 'BLOOM on Hugging Face', href: 'https://huggingface.co/bigscience/bloom' },
      { label: 'BigScience', href: 'https://huggingface.co/bigscience' },
    ],
  },
  {
    id: 'masakhane',
    period: '2020 – 2022',
    title: 'Masakhane',
    blurb:
      'Board member (2020–2022) of Masakhane, a grassroots community of 2,000+ researchers across 30+ African countries. Helped put African languages on the NLP map, co-organizing the AfricaNLP workshops, securing research funding, and building open datasets, benchmarks, and machine translation for 40+ African languages. Our participatory-research paper received the Wikimedia Foundation Research Award.',
    image: '/assets/media/media-masakhane-logo.jpg',
    imagePos: 'object-center',
    imageContain: true,
    press: [
      { label: 'Wikimedia Research Award', href: 'https://research.wikimedia.org/awards.html' },
      { label: 'EMNLP 2020 · participatory MT', href: 'https://arxiv.org/abs/2010.02353' },
    ],
    links: [
      { label: 'AfricaNLP · ICLR 2023', href: 'https://sites.google.com/view/africanlp2023/home' },
      { label: 'AfricaNLP · ICLR 2022', href: 'https://iclr.cc/virtual/2022/workshop/4549' },
      { label: 'AfricaNLP · EACL 2021', href: 'https://sites.google.com/view/africanlp-workshop' },
      { label: 'GitHub', href: 'https://github.com/masakhane-io/masakhane-mt' },
      { label: 'masakhane.io', href: 'https://www.masakhane.io/' },
    ],
  },
];
