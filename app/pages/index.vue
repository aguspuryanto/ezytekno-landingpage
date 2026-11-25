<script setup lang="ts">
const mobileMenuOpen = ref(false)

const services = [
  { number: '01', icon: '⌘', title: 'Website Development', description: 'Website company profile, landing page, portal, dan platform digital yang cepat, responsif, serta mudah dikelola.', tags: ['Company Profile', 'E-Commerce', 'Web App'] },
  { number: '02', icon: '▣', title: 'Mobile Application', description: 'Aplikasi Android dan iOS untuk mendekatkan layanan bisnis kepada pelanggan dan tim operasional.', tags: ['Android', 'iOS', 'Cross Platform'] },
  { number: '03', icon: '▦', title: 'ERP & Business System', description: 'Sistem terintegrasi untuk mengelola penjualan, inventori, keuangan, SDM, dan proses operasional.', tags: ['ERP', 'POS', 'Dashboard'] },
  { number: '04', icon: '✳', title: 'AI & Automation', description: 'Otomatisasi proses kerja dan integrasi AI untuk meningkatkan produktivitas serta kualitas layanan.', tags: ['AI Assistant', 'Workflow', 'Integration'] },
  { number: '05', icon: '◈', title: 'SaaS Development', description: 'Pengembangan produk software berbasis langganan, dari validasi ide hingga produk siap digunakan.', tags: ['MVP', 'Multi Tenant', 'API'] },
  { number: '06', icon: '⌁', title: 'IT Consulting', description: 'Pendampingan pemilihan teknologi, perencanaan sistem, integrasi, dan pengembangan infrastruktur digital.', tags: ['IT Strategy', 'System Audit', 'Support'] }
]

const products = [
  { name: 'EzySaham', category: 'Stock research platform', description: 'Platform analisis dan informasi saham untuk membantu investor mengambil keputusan lebih terstruktur.', initials: 'ES', color: 'from-cyan-400 to-blue-600' },
  { name: 'EzyKasir', category: 'Point of Sale', description: 'Solusi kasir dan pengelolaan usaha untuk membantu operasional bisnis menjadi lebih praktis.', initials: 'EK', color: 'from-violet-400 to-indigo-600' },
  { name: 'EzyProperty', category: 'Property platform', description: 'Platform digital untuk membantu pemasaran, pengelolaan, dan pengembangan bisnis properti.', initials: 'EP', color: 'from-emerald-400 to-teal-600' }
]

const process = [
  { step: '01', title: 'Discovery', text: 'Kami memahami kebutuhan, tantangan, dan tujuan bisnis Anda.' },
  { step: '02', title: 'Strategy & Design', text: 'Menyusun solusi, alur kerja, serta rancangan pengalaman pengguna.' },
  { step: '03', title: 'Development', text: 'Membangun solusi secara terukur dengan komunikasi dan evaluasi berkala.' },
  { step: '04', title: 'Launch & Support', text: 'Melakukan deployment, dokumentasi, dan dukungan pengembangan.' }
]

const year = new Date().getFullYear()
const whatsappUrl = 'https://wa.me/6282244492100?text=' + encodeURIComponent('Halo EzyTekno, saya ingin konsultasi kebutuhan solusi digital untuk bisnis saya.')
</script>

<template>
  <div class="overflow-hidden">
    <!-- Navigation -->
    <header class="absolute inset-x-0 top-0 z-50 border-b border-white/10">
      <nav class="container-shell flex h-[82px] items-center justify-between">
        <a href="#home" class="flex items-center gap-3" aria-label="EzyTekno home">
          <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-lg font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20">E</span>
          <span class="leading-tight text-white">
            <span class="block font-display text-[17px] font-extrabold tracking-tight">EzyTekno</span>
            <span class="block text-[9px] font-semibold tracking-[.2em] text-slate-400">SOLUSI NUSANTARA</span>
          </span>
        </a>

        <div class="hidden items-center gap-8 text-[13px] font-semibold text-slate-300 lg:flex">
          <a class="transition hover:text-cyan-300" href="#about">Tentang Kami</a>
          <a class="transition hover:text-cyan-300" href="#services">Layanan</a>
          <a class="transition hover:text-cyan-300" href="#products">Produk</a>
          <a class="transition hover:text-cyan-300" href="#process">Proses</a>
          <a class="transition hover:text-cyan-300" href="#contact">Kontak</a>
        </div>

        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="hidden rounded-full bg-cyan-400 px-5 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-cyan-300 lg:inline-flex">Konsultasi Gratis <span class="ml-2">↗</span></a>
        <button class="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white lg:hidden" aria-label="Buka menu" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="text-xl">{{ mobileMenuOpen ? '×' : '☰' }}</span>
        </button>
      </nav>
      <div v-if="mobileMenuOpen" class="border-t border-white/10 bg-[#071426] px-6 py-5 text-sm text-slate-200 lg:hidden">
        <div class="container-shell flex flex-col gap-4">
          <a href="#about" @click="mobileMenuOpen = false">Tentang Kami</a>
          <a href="#services" @click="mobileMenuOpen = false">Layanan</a>
          <a href="#products" @click="mobileMenuOpen = false">Produk</a>
          <a href="#process" @click="mobileMenuOpen = false">Proses</a>
          <a href="#contact" @click="mobileMenuOpen = false">Kontak</a>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950">Konsultasi Gratis ↗</a>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section id="home" class="relative isolate min-h-[760px] overflow-hidden bg-[#071426] pt-[82px] text-white">
      <div class="grid-pattern absolute inset-0 -z-20 opacity-70"></div>
      <div class="absolute -right-48 top-20 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]"></div>
      <div class="absolute -left-48 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[100px]"></div>
      <div class="container-shell grid min-h-[678px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div class="max-w-[650px]">
          <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold tracking-[.16em] text-cyan-200">
            <span class="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"></span>
            DIGITAL SOLUTION & TECHNOLOGY PARTNER
          </div>
          <h1 class="font-display text-[42px] font-extrabold leading-[1.12] tracking-[-.055em] sm:text-6xl lg:text-[66px]">
            Transformasi Digital untuk <span class="gradient-text">Bisnis Masa Depan.</span>
          </h1>
          <p class="mt-7 max-w-[550px] text-[15px] leading-8 text-slate-300 sm:text-[17px]">
            Kami membantu bisnis berkembang melalui website, aplikasi, sistem terintegrasi, dan teknologi AI yang dirancang sesuai kebutuhan nyata bisnis Anda.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300">Mulai Konsultasi <span class="ml-3 text-lg">↗</span></a>
            <a href="#services" class="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/5">Jelajahi Layanan <span class="ml-3">↓</span></a>
          </div>
          <div class="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-xs font-medium text-slate-400">
            <span class="flex items-center gap-2"><span class="text-cyan-300">✓</span> Solusi sesuai kebutuhan</span>
            <span class="flex items-center gap-2"><span class="text-cyan-300">✓</span> Teknologi modern</span>
            <span class="flex items-center gap-2"><span class="text-cyan-300">✓</span> Dukungan berkelanjutan</span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[510px]">
          <div class="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl"></div>
          <div class="glass relative rounded-[28px] p-4 shadow-2xl shadow-black/30 sm:p-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-5">
              <div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-rose-400"></span><span class="h-2 w-2 rounded-full bg-amber-300"></span><span class="h-2 w-2 rounded-full bg-emerald-400"></span></div>
              <span class="text-[9px] font-bold tracking-[.2em] text-slate-400">EZYTEKNO DIGITAL ECOSYSTEM</span>
              <span class="text-xs text-slate-500">✳</span>
            </div>
            <div class="py-7">
              <div class="mb-2 text-[10px] font-bold tracking-[.18em] text-cyan-300">CONNECTED BUSINESS</div>
              <div class="font-display text-2xl font-bold text-white">One Partner.<br/>Endless Possibilities.</div>
              <div class="mt-6 grid grid-cols-2 gap-3">
                <div class="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.08] p-4">
                  <div class="mb-5 grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/15 text-lg text-cyan-200">⌘</div>
                  <div class="text-sm font-bold text-white">Web & App</div><div class="mt-1 text-[10px] text-slate-400">Digital experience</div>
                </div>
                <div class="rounded-2xl border border-blue-300/20 bg-blue-300/[.08] p-4">
                  <div class="mb-5 grid h-9 w-9 place-items-center rounded-xl bg-blue-300/15 text-lg text-blue-200">▦</div>
                  <div class="text-sm font-bold text-white">Business System</div><div class="mt-1 text-[10px] text-slate-400">Integrated operation</div>
                </div>
                <div class="rounded-2xl border border-violet-300/20 bg-violet-300/[.08] p-4">
                  <div class="mb-5 grid h-9 w-9 place-items-center rounded-xl bg-violet-300/15 text-lg text-violet-200">✳</div>
                  <div class="text-sm font-bold text-white">AI & Automation</div><div class="mt-1 text-[10px] text-slate-400">Smarter workflow</div>
                </div>
                <div class="rounded-2xl border border-emerald-300/20 bg-emerald-300/[.08] p-4">
                  <div class="mb-5 grid h-9 w-9 place-items-center rounded-xl bg-emerald-300/15 text-lg text-emerald-200">◈</div>
                  <div class="text-sm font-bold text-white">SaaS Product</div><div class="mt-1 text-[10px] text-slate-400">Scalable platform</div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-xl bg-white/[.06] px-4 py-3">
              <span class="text-[10px] text-slate-300">Technology that moves business forward</span>
              <span class="text-xs font-bold text-cyan-300">EZYTEKNO ↗</span>
            </div>
          </div>
          <div class="absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/10 bg-[#10243b] px-5 py-4 shadow-xl sm:block">
            <div class="text-[9px] font-bold tracking-widest text-slate-400">OUR APPROACH</div>
            <div class="mt-1 text-sm font-bold text-white">Build. Integrate. Grow.</div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
    </section>

    <!-- About -->
    <section id="about" class="section-pad bg-white">
      <div class="container-shell grid items-center gap-14 lg:grid-cols-2">
        <div class="relative">
          <div class="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-cyan-200"></div>
          <div class="relative overflow-hidden rounded-[28px] bg-[#0b1c32] p-8 text-white sm:p-12">
            <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div class="relative">
              <div class="text-xs font-bold tracking-[.2em] text-cyan-300">WHO WE ARE</div>
              <div class="mt-10 font-display text-4xl font-extrabold leading-tight">Technology should make business <span class="text-cyan-300">better.</span></div>
              <p class="mt-6 max-w-sm text-sm leading-7 text-slate-300">Kami percaya teknologi terbaik bukan sekadar canggih, tetapi mampu menyelesaikan masalah dan menciptakan dampak nyata.</p>
              <div class="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
                <div class="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300 text-xl font-black text-slate-950">E</div>
                <div><div class="text-sm font-bold">PT EzyTekno Solusi Nusantara</div><div class="mt-1 text-[10px] tracking-widest text-slate-400">DIGITAL SOLUTION & TECHNOLOGY PARTNER</div></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span class="eyebrow">Tentang EzyTekno</span>
          <h2 class="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-[42px]">Mitra teknologi untuk perjalanan digital bisnis Anda.</h2>
          <p class="mt-6 text-[15px] leading-8 text-slate-600">PT EzyTekno Solusi Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk membantu bisnis bekerja lebih efektif, terhubung, dan siap bertumbuh.</p>
          <p class="mt-4 text-[15px] leading-8 text-slate-600">Kami menggabungkan pemahaman proses bisnis, desain yang berorientasi pada pengguna, dan teknologi modern untuk menghadirkan solusi yang relevan serta berkelanjutan.</p>
          <div class="mt-8 grid grid-cols-2 gap-5 border-t border-slate-200 pt-7">
            <div><div class="text-sm font-extrabold text-slate-900">Business First</div><p class="mt-2 text-xs leading-6 text-slate-500">Memulai dari kebutuhan dan tujuan bisnis.</p></div>
            <div><div class="text-sm font-extrabold text-slate-900">Future Ready</div><p class="mt-2 text-xs leading-6 text-slate-500">Membangun sistem yang siap berkembang.</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section-pad bg-slate-50">
      <div class="container-shell">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Apa yang kami kerjakan</span>
          <h2 class="mt-5 text-3xl font-extrabold text-slate-900 sm:text-[42px]">Solusi digital lengkap untuk bisnis modern.</h2>
          <p class="mt-5 text-sm leading-7 text-slate-500">Dari membangun kehadiran digital hingga mengotomatisasi operasional, kami membantu mengubah ide menjadi solusi yang bekerja.</p>
        </div>
        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="service in services" :key="service.number" class="card-hover group rounded-2xl border border-slate-200 bg-white p-7">
            <div class="flex items-start justify-between">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-2xl font-bold text-cyan-700 transition group-hover:bg-cyan-400 group-hover:text-slate-950">{{ service.icon }}</div>
              <span class="font-display text-xs font-bold tracking-widest text-slate-300">{{ service.number }}</span>
            </div>
            <h3 class="mt-7 text-xl font-extrabold text-slate-900">{{ service.title }}</h3>
            <p class="mt-3 min-h-[78px] text-[13px] leading-7 text-slate-500">{{ service.description }}</p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tag in service.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-semibold text-slate-500">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="section-pad bg-white">
      <div class="container-shell">
        <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div class="max-w-2xl">
            <span class="eyebrow">Digital products</span>
            <h2 class="mt-5 text-3xl font-extrabold text-slate-900 sm:text-[42px]">Produk digital dari ekosistem EzyTekno.</h2>
          </div>
          <p class="max-w-sm text-sm leading-7 text-slate-500">Kami juga mengembangkan produk digital yang menjawab kebutuhan spesifik berbagai sektor bisnis.</p>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <article v-for="product in products" :key="product.name" class="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div class="relative flex h-44 items-center justify-center overflow-hidden bg-[#0b1c32]">
              <div class="absolute inset-0 bg-gradient-to-br opacity-30" :class="product.color"></div>
              <div class="absolute h-36 w-36 rounded-full border border-white/10"></div>
              <div class="absolute h-28 w-28 rounded-full border border-white/10"></div>
              <div class="relative grid h-20 w-20 place-items-center rounded-[24px] bg-gradient-to-br text-2xl font-black text-white shadow-2xl" :class="product.color">{{ product.initials }}</div>
            </div>
            <div class="p-7">
              <div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-cyan-700">{{ product.category }}</div>
              <h3 class="mt-3 text-2xl font-extrabold text-slate-900">{{ product.name }}</h3>
              <p class="mt-3 min-h-[72px] text-[13px] leading-7 text-slate-500">{{ product.description }}</p>
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center text-xs font-extrabold text-slate-900 transition hover:text-cyan-700">Tanyakan produk <span class="ml-2">↗</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section class="relative overflow-hidden bg-[#071426] py-24 text-white">
      <div class="grid-pattern absolute inset-0 opacity-40"></div>
      <div class="container-shell relative">
        <div class="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span class="eyebrow !text-cyan-300">Why EzyTekno</span>
            <h2 class="mt-5 text-3xl font-extrabold leading-tight sm:text-[42px]">Bukan sekadar vendor. Kami partner pertumbuhan digital Anda.</h2>
            <p class="mt-6 text-sm leading-7 text-slate-400">Kami membangun hubungan jangka panjang dengan fokus pada hasil, kualitas implementasi, dan kemudahan pengembangan di masa depan.</p>
            <a href="#contact" class="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-extrabold text-slate-950 transition hover:bg-cyan-300">Diskusikan kebutuhan Anda ↗</a>
          </div>
          <div class="grid gap-7 sm:grid-cols-2">
            <div class="border-l border-cyan-400/50 pl-6">
              <div class="text-2xl text-cyan-300">✳</div><h3 class="mt-4 text-lg font-bold">Solusi Tepat Guna</h3><p class="mt-2 text-[13px] leading-7 text-slate-400">Teknologi dipilih berdasarkan kebutuhan, bukan sekadar mengikuti tren.</p>
            </div>
            <div class="border-l border-cyan-400/50 pl-6">
              <div class="text-2xl text-cyan-300">⌘</div><h3 class="mt-4 text-lg font-bold">Teknologi Modern</h3><p class="mt-2 text-[13px] leading-7 text-slate-400">Arsitektur modern yang fleksibel, aman, dan dapat dikembangkan.</p>
            </div>
            <div class="border-l border-cyan-400/50 pl-6">
              <div class="text-2xl text-cyan-300">◎</div><h3 class="mt-4 text-lg font-bold">Transparansi Proses</h3><p class="mt-2 text-[13px] leading-7 text-slate-400">Tahapan kerja, ruang lingkup, dan progres dikomunikasikan dengan jelas.</p>
            </div>
            <div class="border-l border-cyan-400/50 pl-6">
              <div class="text-2xl text-cyan-300">↗</div><h3 class="mt-4 text-lg font-bold">Dukungan Berkelanjutan</h3><p class="mt-2 text-[13px] leading-7 text-slate-400">Kami siap mendampingi setelah solusi diluncurkan dan digunakan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="section-pad bg-slate-50">
      <div class="container-shell">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Cara kerja kami</span>
          <h2 class="mt-5 text-3xl font-extrabold text-slate-900 sm:text-[42px]">Dari ide menjadi solusi nyata.</h2>
          <p class="mt-5 text-sm leading-7 text-slate-500">Proses kolaboratif yang terstruktur agar setiap tahap memiliki tujuan dan hasil yang jelas.</p>
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(item, index) in process" :key="item.step" class="relative">
            <div v-if="index < process.length - 1" class="absolute left-12 top-6 hidden h-px w-[calc(100%-24px)] bg-slate-200 lg:block"></div>
            <div class="relative grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200 bg-white font-display text-sm font-extrabold text-cyan-700 shadow-sm">{{ item.step }}</div>
            <h3 class="mt-6 text-lg font-extrabold text-slate-900">{{ item.title }}</h3>
            <p class="mt-3 max-w-[230px] text-[13px] leading-7 text-slate-500">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Contact -->
    <section id="contact" class="bg-white py-24">
      <div class="container-shell">
        <div class="relative overflow-hidden rounded-[30px] bg-[#0b1c32] px-7 py-14 text-center text-white sm:px-14 sm:py-20">
          <div class="absolute -left-20 -top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]"></div>
          <div class="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"></div>
          <div class="relative mx-auto max-w-2xl">
            <span class="text-[10px] font-extrabold tracking-[.2em] text-cyan-300">LET'S BUILD SOMETHING GREAT</span>
            <h2 class="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">Punya ide digital untuk bisnis Anda?</h2>
            <p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">Mari diskusikan kebutuhan dan tantangan bisnis Anda. Tim EzyTekno siap membantu menemukan solusi teknologi yang tepat.</p>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-9 inline-flex items-center rounded-full bg-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300">Hubungi Kami via WhatsApp <span class="ml-3 text-lg">↗</span></a>
            <div class="mt-8 text-xs text-slate-400">PT EzyTekno Solusi Nusantara · Digital Solution & Technology Partner</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#071426] pb-8 pt-14 text-slate-400">
      <div class="container-shell">
        <div class="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_.7fr_.9fr]">
          <div>
            <a href="#home" class="flex items-center gap-3 text-white">
              <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 font-display text-lg font-extrabold text-slate-950">E</span>
              <span><span class="block font-display text-lg font-extrabold">EzyTekno</span><span class="block text-[9px] font-semibold tracking-[.2em] text-slate-500">SOLUSI NUSANTARA</span></span>
            </a>
            <p class="mt-5 max-w-sm text-xs leading-7">Partner teknologi untuk membantu bisnis bertransformasi melalui solusi digital yang tepat guna, terintegrasi, dan berkelanjutan.</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold tracking-widest text-white">NAVIGASI</h4>
            <div class="mt-5 flex flex-col gap-3 text-xs">
              <a href="#about" class="transition hover:text-cyan-300">Tentang Kami</a><a href="#services" class="transition hover:text-cyan-300">Layanan</a><a href="#products" class="transition hover:text-cyan-300">Produk</a><a href="#process" class="transition hover:text-cyan-300">Proses Kerja</a>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-extrabold tracking-widest text-white">HUBUNGI KAMI</h4>
            <div class="mt-5 flex flex-col gap-3 text-xs">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="transition hover:text-cyan-300">WhatsApp: +62 822-4449-2100</a>
              <a href="mailto:marketing@ezytekno.co.id" class="transition hover:text-cyan-300">marketing@ezytekno.co.id</a>
              <span>Surabaya, Jawa Timur, Indonesia</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-3 pt-7 text-[10px] sm:flex-row">
          <span>© {{ year }} PT EzyTekno Solusi Nusantara. All rights reserved.</span>
          <span>Built with purpose. Powered by technology.</span>
        </div>
      </div>
    </footer>

    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp" class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-xl shadow-emerald-900/20 transition hover:scale-105 hover:bg-emerald-400">✆</a>
  </div>
</template>
