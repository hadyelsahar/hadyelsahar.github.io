// Selected publications, newest first.
// For the full, always-current list see Google Scholar / DBLP.

export interface PaperLink {
  label: string;
  href: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  thumbnail?: string;
  links: PaperLink[];
}

export const papers: Paper[] = [
  {
    id: 'paper-text-seal',
    title: 'TextSeal: A Localized LLM Watermark for Provenance & Distillation Protection',
    authors: 'Content Seal team (incl. Hady Elsahar)',
    venue: 'arXiv · 2026',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.12456' },
      { label: 'code', href: 'https://github.com/facebookresearch/textseal' },
    ],
  },
  {
    id: 'paper-pixel-seal',
    title: 'PixelSeal: Adversarial-Only Training for Invisible Image and Video Watermarking',
    authors: 'Content Seal team (incl. Hady Elsahar)',
    venue: 'Meta AI · 2025',
    links: [
      { label: 'paper', href: 'https://ai.meta.com/research/publications/pixel-seal-adversarial-only-training-for-invisible-image-and-video-watermarking/' },
      { label: 'code', href: 'https://github.com/facebookresearch/videoseal' },
    ],
  },
  {
    id: 'paper-chunky-seal',
    title: 'ChunkySeal: We Can Hide More Bits — The Unused Watermarking Capacity in Theory and in Practice',
    authors: 'Content Seal team (incl. Hady Elsahar)',
    venue: 'arXiv · 2025',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2510.12812' },
      { label: 'code', href: 'https://github.com/facebookresearch/videoseal' },
    ],
  },
  {
    id: 'paper-nature-100lang',
    title: 'Joint Speech and Text Machine Translation for up to 100 Languages',
    authors: 'Seamless Communication Team (incl. Hady Elsahar)',
    venue: 'Nature · 2025',
    links: [
      { label: 'Nature paper', href: 'https://www.nature.com/articles/s41586-024-08359-z' },
    ],
  },
  {
    id: 'paper-video-seal',
    title: 'VideoSeal: Open and Efficient Video Watermarking',
    authors: 'Pierre Fernandez*, Hady Elsahar*, I. Zeki Yalniz, Alexandre Mourachko',
    venue: 'arXiv · Dec 2024',
    thumbnail: '/assets/figures/fig-videoseal.png',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2412.09492' },
      { label: 'code', href: 'https://github.com/facebookresearch/videoseal' },
      { label: 'demo', href: 'https://aidemos.meta.com/videoseal' },
    ],
  },
  {
    id: 'paper-audio-seal',
    title: 'AudioSeal: Proactive Detection of Voice Cloning with Localized Watermarking',
    authors: 'Robin San Roman, Pierre Fernandez, Hady Elsahar, Alexandre Défossez, Teddy Furon, Tuan Tran',
    venue: 'ICML 2024',
    thumbnail: '/assets/figures/fig-audioseal.png',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2401.17264' },
      { label: 'code', href: 'https://github.com/facebookresearch/audioseal' },
      { label: 'HF', href: 'https://huggingface.co/facebook/audioseal' },
    ],
  },
  {
    id: 'paper-seamless',
    title: 'SeamlessM4T: Multilingual & Multimodal Translation',
    authors: 'Seamless Communication Team (incl. Hady Elsahar)',
    venue: 'Meta AI · 2023',
    links: [
      { label: 'blog', href: 'https://ai.meta.com/blog/seamless-m4t/' },
      { label: 'paper', href: 'https://dl.fbaipublicfiles.com/seamless/seamless_m4t_paper.pdf' },
      { label: 'HF', href: 'https://huggingface.co/spaces/facebook/seamless_m4t' },
    ],
  },
  {
    id: 'paper-rl-distribution',
    title: 'On Reinforcement Learning and Distribution Matching for Fine-Tuning Language Models with no Catastrophic Forgetting',
    authors: 'Tomasz Korbak, Hady Elsahar, German Kruszewski, Marc Dymetman',
    venue: 'NeurIPS 2022',
    links: [{ label: 'paper', href: 'https://arxiv.org/abs/2206.00761' }],
  },
  {
    id: 'paper-approx-sampler',
    title: 'An Approximate Sampler for Energy-Based Models with Divergence Diagnostics',
    authors: 'Bryan Eikema, Germán Kruszewski, Christopher R. Dance, Hady Elsahar, Marc Dymetman',
    venue: 'TMLR 2022',
    links: [{ label: 'paper', href: 'https://dblp.org/rec/journals/tmlr/EikemaKDED22.html' }],
  },
  {
    id: 'paper-cdpg',
    title: 'Controlling conditional language models without catastrophic forgetting',
    authors: 'Tomasz Korbak, Hady Elsahar, German Kruszewski, Marc Dymetman',
    venue: 'ICML 2022',
    thumbnail: '/assets/paper-cdpg.png',
    links: [
      { label: 'paper', href: 'https://proceedings.mlr.press/v162/korbak22a.html' },
      { label: 'slides', href: 'https://icml.cc/media/icml-2022/Slides/16288_pIsVCHL.pdf' },
      { label: 'code', href: 'https://github.com/naver/gdc/tree/CDPG' },
    ],
  },
  {
    id: 'paper-dpg',
    title: 'Controlling Conditional Language Models with Distributional Policy Gradients',
    authors: 'Tomasz Korbak, Hady Elsahar, German Kruszewski, Marc Dymetman',
    venue: 'CtrlGen Workshop, NeurIPS 2021',
    thumbnail: '/assets/paper-dpg.png',
    links: [{ label: 'paper', href: 'https://arxiv.org/abs/2112.00791' }],
  },
  {
    id: 'paper-discrete-ebm',
    title: 'Sampling from Discrete Energy-Based Models with Quality/Efficiency Trade-offs',
    authors: 'Bryan Eikema, Germán Kruszewski, Hady Elsahar, Marc Dymetman',
    venue: 'CtrlGen Workshop, NeurIPS 2021',
    thumbnail: '/assets/paper-discrete-ebm.png',
    links: [{ label: 'paper', href: 'https://arxiv.org/abs/2112.05702' }],
  },
  {
    id: 'paper-ebm-code',
    title: 'Energy-Based Models for Code Generation under Compilability Constraints',
    authors: 'Tomasz Korbak, Hady Elsahar, Marc Dymetman, German Kruszewski',
    venue: 'NLP4Prog @ ACL 2021',
    thumbnail: '/assets/paper-ebm-code.png',
    links: [{ label: 'paper', href: 'https://arxiv.org/pdf/2106.04985.pdf' }],
  },
  {
    id: 'paper-gdc',
    title: 'A Distributional Approach to Controlled Text Generation',
    authors: 'Muhammad Khalifa*, Hady Elsahar*, Marc Dymetman* (equal contribution)',
    venue: 'ICLR 2021 · Oral (top 2.1%)',
    thumbnail: '/assets/paper-gdc.png',
    links: [
      { label: 'paper', href: 'https://openreview.net/forum?id=jWkw45-9AbL' },
      { label: 'code', href: 'https://github.com/naver/gdc' },
      { label: 'blog', href: 'https://europe.naverlabs.com/blog/debiasing-large-pretrained-language-models-using-distributional-control/' },
    ],
  },
  {
    id: 'paper-opinion-summ',
    title: 'Self-Supervised and Controlled Multi-Document Opinion Summarization',
    authors: 'Hady Elsahar, Maximin Coavoux, Matthias Gallé, Jos Rozen',
    venue: 'EACL 2021',
    thumbnail: '/assets/paper-opinion-summ.jpg',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2004.14754' },
    ],
  },
  {
    id: 'paper-masakhane',
    title: 'Participatory Research for Low-resourced Machine Translation: A Case Study in African Languages',
    authors: '∀ et al. · Masakhane participatory paper',
    venue: 'EMNLP 2020 Findings · Wikimedia Research Award',
    thumbnail: '/assets/paper-masakhane.png',
    links: [
      { label: 'paper', href: 'https://arxiv.org/pdf/2010.02353.pdf' },
      { label: 'code', href: 'https://github.com/masakhane-io/masakhane-mt' },
    ],
  },
  {
    id: 'paper-aspect-summ',
    title: 'Unsupervised Aspect-Based Abstractive Summarization',
    authors: 'Maximin Coavoux, Hady Elsahar, Matthias Gallé',
    venue: 'NEWSUM @ EMNLP 2019',
    thumbnail: '/assets/paper-aspect-summ.png',
    links: [{ label: 'paper', href: 'https://www.aclweb.org/anthology/D19-5405/' }],
  },
  {
    id: 'paper-domain-shift',
    title: 'To Annotate or Not? Predicting Performance Drop under Domain Shift',
    authors: 'Hady Elsahar, Matthias Gallé',
    venue: 'EMNLP 2019',
    thumbnail: '/assets/paper-domain-shift.png',
    links: [
      { label: 'paper', href: 'https://www.aclweb.org/anthology/D19-1222/' },
      { label: 'code', href: 'https://github.com/hadyelsahar/domain-shift-prediction' },
      { label: 'blog', href: 'https://europe.naverlabs.com/blog/predicting-when-machine-learning-models-fail-in-production/' },
    ],
  },
  {
    id: 'paper-qg-kg',
    title: 'Zero-Shot Question Generation from Knowledge Graphs for Unseen Predicates and Entity Types',
    authors: 'Hady Elsahar, Christophe Gravier, Frédérique Laforest',
    venue: 'NAACL 2018',
    thumbnail: '/assets/paper-qg-kg.png',
    links: [
      { label: 'paper', href: 'https://www.aclweb.org/anthology/N18-1020/' },
      { label: 'code', href: 'https://github.com/hadyelsahar/Zeroshot-QuestionGeneration' },
    ],
  },
  {
    id: 'paper-wikidata',
    title: 'Mind the (Language) Gap: Generation of Multilingual Wikipedia Summaries from Wikidata for ArticlePlaceholders',
    authors: 'Lucie-Aimée Kaffee*, Hady Elsahar*, Pavlos Vougiouklis* et al. (equal contribution)',
    venue: 'ESWC 2018',
    thumbnail: '/assets/paper-wikidata.png',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/1803.09447' },
      { label: 'code', href: 'https://github.com/pvougiou/Wikidata2Wikipedia' },
    ],
  },
  {
    id: 'paper-neural-wikipedian',
    title: 'Neural Wikipedian: Generating Textual Summaries from Knowledge Base Triples',
    authors: 'Pavlos Vougiouklis, Hady Elsahar, Lucie-Aimée Kaffee, Christophe Gravier, Frédérique Laforest, Jonathon Hare, Elena Simperl',
    venue: 'Journal of Web Semantics · 2018',
    links: [{ label: 'paper', href: 'https://arxiv.org/abs/1711.00155' }],
  },
  {
    id: 'paper-wiki-underserved',
    title: 'Learning to Generate Wikipedia Summaries for Underserved Languages from Wikidata',
    authors: 'Lucie-Aimée Kaffee, Hady Elsahar, Pavlos Vougiouklis, Christophe Gravier, Frédérique Laforest, Jonathon Hare, Elena Simperl',
    venue: 'NAACL 2018',
    links: [{ label: 'paper', href: 'https://arxiv.org/abs/1803.07116' }],
  },
];
