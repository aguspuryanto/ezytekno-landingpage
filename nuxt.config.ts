import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-25',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'PT EzyTekno Solusi Nusantara | Digital Solution & Technology Partner',
      meta: [
        { name: 'description', content: 'Partner teknologi untuk transformasi digital bisnis. Layanan website, aplikasi mobile, ERP, SaaS, AI automation, dan konsultasi IT.' },
        { name: 'theme-color', content: '#071426' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }
      ]
    }
  }
})
