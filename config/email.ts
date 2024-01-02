export const emailConfig = {
  from: 'zql46@outlook.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://cali.so`
      : 'http://localhost:3000',
}
