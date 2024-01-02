export const seo = {
  title: 'CodeArena',
  description:
    '我叫 Echo，一名开发者，细节控。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
