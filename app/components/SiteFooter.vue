<script setup lang="ts">
const year = new Date().getFullYear()
const whatsappUrl = whatsappLink()
const whatsappDisplay = WHATSAPP_DISPLAY
</script>

<template>
  <footer class="bg-[#071426] pb-8 pt-14 text-slate-400">
    <div class="container-shell">
      <div class="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_.7fr_.9fr]">
        <div>
          <NuxtLink to="/" class="flex items-center gap-3 text-white">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 font-display text-lg font-extrabold text-slate-950">E</span>
            <span><span class="block font-display text-lg font-extrabold">EzyTekno</span><span class="block text-[9px] font-semibold tracking-[.2em] text-slate-500">SOLUSI NUSANTARA</span></span>
          </NuxtLink>
          <p class="mt-5 max-w-sm text-xs leading-7">Partner teknologi untuk membantu bisnis bertransformasi melalui solusi digital yang tepat guna, terintegrasi, dan berkelanjutan.</p>
        </div>
        <div>
          <h4 class="text-xs font-extrabold tracking-widest text-white">NAVIGASI</h4>
          <div class="mt-5 flex flex-col gap-3 text-xs">
            <NuxtLink to="/#about" class="transition hover:text-cyan-300">Tentang Kami</NuxtLink>
            <NuxtLink to="/#services" class="transition hover:text-cyan-300">Layanan</NuxtLink>
            <NuxtLink to="/products" class="transition hover:text-cyan-300">Produk</NuxtLink>
            <NuxtLink to="/#process" class="transition hover:text-cyan-300">Proses Kerja</NuxtLink>
          </div>
        </div>
        <div>
          <h4 class="text-xs font-extrabold tracking-widest text-white">HUBUNGI KAMI</h4>
          <div class="mt-5 flex flex-col gap-3 text-xs">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="transition hover:text-cyan-300">WhatsApp: {{ whatsappDisplay }}</a>
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
</template>
