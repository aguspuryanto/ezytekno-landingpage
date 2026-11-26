<script setup lang="ts">
useSeoMeta({
  title: 'Produk Digital | PT EzyTekno Solusi Nusantara',
  description: 'EzySaham (screener & portofolio saham), EzyKasir (aplikasi kasir POS UMKM), EzyProperty (marketplace properti), RehatGo (layanan wellness ke rumah), dan solusi digital custom dari EzyTekno.'
})

const products = [
  {
    id: 'ezysaham',
    name: 'EzySaham',
    category: 'Screener & Portofolio Saham Indonesia',
    initials: 'ES',
    color: 'from-cyan-400 to-blue-600',
    accent: 'text-cyan-300',
    url: 'https://ezysaham.vercel.app/',
    screenshot: '/images/products/ezysaham.png',
    description: 'Platform screener dan portofolio saham Bursa Efek Indonesia. Pantau IHSG, LQ45, kurs USD/IDR, dan market breadth, lalu temukan saham potensial lewat screener harian. Gratis digunakan, tanpa iklan, dan tanpa fitur inti yang dikunci.',
    features: [
      'Screener lengkap: gainer, momentum, dividen, fundamental, akumulasi',
      'Chart candlestick + SMA, RSI, MACD hingga 5 tahun',
      'Analisa teknikal & fundamental untuk pemula',
      'Portofolio & watchlist tersimpan di akun, bisa dibuka di semua perangkat',
      'Statistik pasar: IHSG, LQ45, USD/IDR, market breadth',
      'Tips, glosarium, dan insight pasar harian'
    ],
    audience: 'Investor pemula dan investor ritel saham Indonesia',
    stats: [{ label: 'Paket Starter', value: 'Gratis selamanya' }, { label: 'Update Data', value: '5–15 menit' }],
    links: [{ label: 'Kunjungi Website', href: 'https://ezysaham.vercel.app/' }],
    message: 'Halo EzyTekno, saya tertarik dengan produk EzySaham. Boleh minta informasi lebih lanjut?'
  },
  {
    id: 'ezykasir',
    name: 'EzyKasir',
    category: 'Aplikasi Kasir (POS) UMKM Online & Offline',
    initials: 'EK',
    color: 'from-violet-400 to-indigo-600',
    accent: 'text-violet-300',
    url: 'https://ezykasir.com/',
    screenshot: '/images/products/ezykasir.png',
    description: 'Aplikasi kasir (Point of Sale) modern untuk mengelola penjualan, stok, dan laporan dalam satu platform. Transaksi tetap berjalan tanpa internet dan tersinkron otomatis saat kembali online. Tersedia di Android dan web.',
    features: [
      'Manajemen stok, scan barcode & cetak label harga',
      'Pembayaran cash, transfer, e-wallet, hingga QRIS',
      'Laporan penjualan harian & bulanan secara real-time',
      'Multi cabang dalam satu dashboard terpusat',
      'Mode offline dengan sync otomatis',
      'Catat hutang piutang pelanggan & supplier',
      'CRM pelanggan & hak akses multi user',
      'Enkripsi data & backup otomatis ke cloud'
    ],
    audience: 'Toko, minimarket, rumah makan, cafe, laundry, bengkel, apotek, barbershop, dan UMKM lainnya',
    stats: [{ label: 'Pengguna Aktif', value: '10K+' }, { label: 'Transaksi', value: '50M+' }],
    links: [
      { label: 'Kunjungi Website', href: 'https://ezykasir.com/' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.ezykasir.pos&hl=id' }
    ],
    message: 'Halo EzyTekno, saya tertarik dengan produk EzyKasir. Boleh minta informasi lebih lanjut?'
  },
  {
    id: 'ezyproperty',
    name: 'EzyProperty',
    category: 'Marketplace Properti Indonesia',
    initials: 'EP',
    color: 'from-emerald-400 to-teal-600',
    accent: 'text-emerald-300',
    url: 'https://ezyproperty.vercel.app/',
    screenshot: '/images/products/ezyproperty.png',
    description: 'Marketplace properti yang mempertemukan pencari properti dengan agen terpercaya. Jelajahi pilihan rumah, apartemen, tanah, ruko, dan villa, baik dijual maupun disewa, lalu terhubung langsung dengan agen pemasang listing.',
    features: [
      'Cari properti berdasarkan lokasi dan tipe',
      'Pilihan properti dijual maupun disewa',
      'Rumah, apartemen, tanah, ruko, dan villa',
      'Terhubung langsung dengan agen pemasang listing',
      'Konsultasi & jadwalkan kunjungan dengan mudah',
      'Agen dapat mendaftar dan memasang listing sendiri'
    ],
    audience: 'Pembeli, penyewa, dan agen properti di Indonesia',
    stats: [{ label: 'Transaksi', value: 'Dijual & Disewa' }, { label: 'Tipe Properti', value: '5 kategori' }],
    links: [{ label: 'Kunjungi Website', href: 'https://ezyproperty.vercel.app/' }],
    message: 'Halo EzyTekno, saya tertarik dengan produk EzyProperty. Boleh minta informasi lebih lanjut?'
  },
  {
    id: 'rehatgo',
    name: 'RehatGo',
    category: 'Wellness On Demand · Home Service',
    initials: 'RG',
    color: 'from-orange-400 to-emerald-600',
    accent: 'text-orange-300',
    url: 'https://rehatgo.com/',
    screenshot: '/images/products/rehatgo.png',
    device: 'mobile',
    description: 'Aplikasi untuk memudahkan pelanggan memesan layanan kesehatan dan wellness langsung ke rumah. Pelanggan tidak perlu datang ke tempat praktik, cukup pesan lewat aplikasi dan terapis yang datang.',
    services: ['Akupunktur', 'Bekam', 'Pijat refleksi', 'Pijat tradisional', 'Massage', 'Pijat relaksasi', 'Terapi kebugaran', 'Wellness lainnya'],
    features: [
      'Pesan layanan wellness langsung ke rumah',
      'Akupunktur, bekam, dan pijat refleksi',
      'Pijat tradisional, massage, dan pijat relaksasi',
      'Terapi kebugaran dan layanan wellness lainnya',
      'Tanpa perlu datang ke tempat praktik',
      'Daftar & masuk mudah via email, nomor HP, atau Google'
    ],
    audience: 'Pelanggan yang ingin perawatan kesehatan & terapi wellness di rumah, tanpa perlu ke tempat praktik',
    stats: [{ label: 'Layanan', value: 'Home Service' }, { label: 'Pemesanan', value: 'On Demand' }],
    links: [{ label: 'Kunjungi Website', href: 'https://rehatgo.com/' }],
    message: 'Halo EzyTekno, saya tertarik dengan produk RehatGo. Boleh minta informasi lebih lanjut?'
  }
]

const customSolutions = [
  { icon: '⌘', title: 'Website', text: 'Company profile, landing page, portal, dan web app yang cepat serta mudah dikelola.' },
  { icon: '▣', title: 'Mobile App', text: 'Aplikasi Android dan iOS untuk pelanggan maupun tim operasional.' },
  { icon: '▦', title: 'ERP', text: 'Sistem terintegrasi untuk penjualan, inventori, keuangan, dan SDM.' },
  { icon: '✳', title: 'AI Automation', text: 'Otomatisasi alur kerja dan integrasi AI untuk produktivitas tim.' }
]

const whatsappUrl = whatsappLink('Halo EzyTekno, saya ingin konsultasi mengenai produk dan solusi digital untuk bisnis saya.')
const customUrl = whatsappLink('Halo EzyTekno, saya ingin konsultasi pengembangan solusi digital custom (website/mobile app/ERP/AI automation).')
</script>

<template>
  <div class="overflow-hidden">
    <SiteHeader />

    <!-- Hero -->
    <section class="relative isolate overflow-hidden bg-[#071426] pt-[82px] text-white">
      <div class="grid-pattern absolute inset-0 -z-20 opacity-70"></div>
      <div class="absolute -right-48 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[120px]"></div>
      <div class="absolute -left-48 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[100px]"></div>
      <div class="container-shell py-20 sm:py-28">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold tracking-[.16em] text-cyan-200">
            <span class="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"></span>
            EZYTEKNO DIGITAL PRODUCTS
          </div>
          <h1 class="font-display text-[40px] font-extrabold leading-[1.12] tracking-[-.055em] sm:text-6xl">
            Produk digital untuk <span class="gradient-text">bisnis yang terus bertumbuh.</span>
          </h1>
          <p class="mx-auto mt-7 max-w-[600px] text-[15px] leading-8 text-slate-300 sm:text-[17px]">
            Ekosistem produk EzyTekno dirancang untuk menjawab kebutuhan spesifik di sektor investasi, retail, properti, dan wellness, ditambah solusi custom sesuai proses bisnis Anda.
          </p>
        </div>
        <div class="mx-auto mt-12 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <a v-for="product in products" :key="product.id" :href="`#${product.id}`" class="glass group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition hover:border-cyan-300/40">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-xs font-black text-white" :class="product.color">{{ product.initials }}</span>
            <span class="text-left">
              <span class="block text-sm font-bold">{{ product.name }}</span>
              <span class="block text-[10px] text-slate-400">Lihat detail ↓</span>
            </span>
          </a>
          <a href="#custom" class="glass group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition hover:border-cyan-300/40">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-lg text-cyan-200">◈</span>
            <span class="text-left">
              <span class="block text-sm font-bold">Custom Solutions</span>
              <span class="block text-[10px] text-slate-400">Lihat detail ↓</span>
            </span>
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
    </section>

    <!-- Products -->
    <section
      v-for="(product, index) in products"
      :id="product.id"
      :key="product.id"
      class="section-pad scroll-mt-4"
      :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'"
    >
      <div class="container-shell grid items-center gap-14 lg:grid-cols-2">
        <!-- Visual -->
        <div class="relative" :class="index % 2 === 1 ? 'lg:order-2' : ''">
          <div class="relative overflow-hidden rounded-[28px] bg-[#0b1c32] p-5 text-white sm:p-7">
            <div class="absolute inset-0 bg-gradient-to-br opacity-20" :class="product.color"></div>
            <div class="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"></div>
            <div class="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10"></div>
            <div class="relative">
              <div class="mb-5 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-[14px] bg-gradient-to-br text-sm font-black text-white shadow-2xl" :class="product.color">{{ product.initials }}</div>
                  <div class="text-[10px] font-bold tracking-[.18em]" :class="product.accent">{{ product.category.toUpperCase() }}</div>
                </div>
                <span class="shrink-0 pl-3 text-[10px] font-bold tracking-[.2em] text-slate-400">0{{ index + 1 }} / 0{{ products.length + 1 }}</span>
              </div>

              <!-- Phone mockup (mobile-first products) -->
              <div v-if="product.device === 'mobile'" class="flex items-center gap-5 sm:gap-8">
                <a :href="product.url" target="_blank" rel="noopener noreferrer" class="group block w-[44%] max-w-[220px] shrink-0 overflow-hidden rounded-[2rem] border-[6px] border-slate-950 bg-slate-950 shadow-2xl shadow-black/40 ring-1 ring-white/15">
                  <img
                    :src="product.screenshot"
                    :alt="`Tampilan aplikasi ${product.name}`"
                    width="880"
                    height="1640"
                    loading="lazy"
                    class="aspect-[880/1640] w-full rounded-[1.6rem] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  >
                </a>
                <div class="min-w-0 flex-1">
                  <div class="text-[10px] tracking-widest text-slate-400">LAYANAN KE RUMAH</div>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span v-for="service in product.services" :key="service" class="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-[11px] font-semibold text-slate-200">{{ service }}</span>
                  </div>
                  <div class="mt-4 truncate text-[11px] font-bold" :class="product.accent">{{ product.url.replace('https://', '').replace(/\/$/, '') }} ↗</div>
                </div>
              </div>

              <!-- Browser mockup -->
              <a v-else :href="product.url" target="_blank" rel="noopener noreferrer" class="group block overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
                <div class="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <span class="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-[10px] text-slate-500">{{ product.url.replace('https://', '').replace(/\/$/, '') }}</span>
                </div>
                <img
                  :src="product.screenshot"
                  :alt="`Tampilan website ${product.name}`"
                  width="1440"
                  height="900"
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                >
              </a>

              <div class="mt-4 grid grid-cols-2 gap-3">
                <div v-for="stat in product.stats" :key="stat.label" class="rounded-2xl border border-white/10 bg-white/[.06] p-4">
                  <div class="text-[10px] tracking-widest text-slate-400">{{ stat.label.toUpperCase() }}</div>
                  <div class="mt-1 text-sm font-bold">{{ stat.value }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <span class="eyebrow">{{ product.category }}</span>
          <h2 class="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-[42px]">{{ product.name }}</h2>
          <p class="mt-6 text-[15px] leading-8 text-slate-600">{{ product.description }}</p>
          <ul class="mt-8 grid gap-3 sm:grid-cols-2">
            <li v-for="feature in product.features" :key="feature" class="flex items-start gap-3 text-sm text-slate-700">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-50 text-[10px] font-bold text-cyan-700">✓</span>
              {{ feature }}
            </li>
          </ul>
          <div class="mt-8 border-t border-slate-200 pt-6">
            <div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">Cocok untuk</div>
            <div class="mt-2 text-sm font-semibold text-slate-800">{{ product.audience }}</div>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="whatsappLink(product.message)" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-full bg-[#071426] px-6 py-3.5 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700">Tanyakan {{ product.name }} <span class="ml-2">↗</span></a>
            <a v-for="link in product.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-xs font-extrabold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-600 hover:text-cyan-700">{{ link.label }} <span class="ml-2">↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Digital Solutions -->
    <section id="custom" class="relative scroll-mt-4 overflow-hidden bg-[#071426] py-24 text-white">
      <div class="grid-pattern absolute inset-0 opacity-40"></div>
      <div class="container-shell relative">
        <div class="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span class="eyebrow !text-cyan-300">Custom Digital Solutions</span>
            <h2 class="mt-5 text-3xl font-extrabold leading-tight sm:text-[42px]">Butuh solusi yang dibuat khusus untuk bisnis Anda?</h2>
            <p class="mt-6 text-sm leading-7 text-slate-400">Selain produk siap pakai, kami merancang dan membangun solusi digital yang menyesuaikan proses, skala, dan tujuan bisnis Anda, dari kebutuhan sederhana hingga sistem terintegrasi.</p>
            <a :href="customUrl" target="_blank" rel="noopener noreferrer" class="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-extrabold text-slate-950 transition hover:bg-cyan-300">Diskusikan kebutuhan Anda ↗</a>
          </div>
          <div class="grid gap-7 sm:grid-cols-2">
            <div v-for="item in customSolutions" :key="item.title" class="border-l border-cyan-400/50 pl-6">
              <div class="text-2xl text-cyan-300">{{ item.icon }}</div>
              <h3 class="mt-4 text-lg font-bold">{{ item.title }}</h3>
              <p class="mt-2 text-[13px] leading-7 text-slate-400">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="bg-white py-24">
      <div class="container-shell">
        <div class="relative overflow-hidden rounded-[30px] bg-[#0b1c32] px-7 py-14 text-center text-white sm:px-14 sm:py-20">
          <div class="absolute -left-20 -top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]"></div>
          <div class="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"></div>
          <div class="relative mx-auto max-w-2xl">
            <span class="text-[10px] font-extrabold tracking-[.2em] text-cyan-300">FREE CONSULTATION</span>
            <h2 class="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">Temukan produk yang tepat untuk bisnis Anda.</h2>
            <p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">Ceritakan kebutuhan Anda, dan tim EzyTekno akan membantu merekomendasikan produk atau solusi custom yang paling sesuai.</p>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-9 inline-flex items-center rounded-full bg-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300">Konsultasi via WhatsApp <span class="ml-3 text-lg">↗</span></a>
            <div class="mt-8 text-xs text-slate-400">PT EzyTekno Solusi Nusantara · Digital Solution & Technology Partner</div>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
