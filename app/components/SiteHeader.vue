<script setup lang="ts">
const mobileMenuOpen = ref(false)
const whatsappUrl = whatsappLink()

const links = [
  { label: 'Tentang Kami', to: '/#about' },
  { label: 'Layanan', to: '/#services' },
  { label: 'Produk', to: '/products' },
  { label: 'Proses', to: '/#process' },
  { label: 'Kontak', to: '/#contact' }
]
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 border-b border-white/10">
    <nav class="container-shell flex h-[82px] items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="EzyTekno home">
        <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-lg font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20">E</span>
        <span class="leading-tight text-white">
          <span class="block font-display text-[17px] font-extrabold tracking-tight">EzyTekno</span>
          <span class="block text-[9px] font-semibold tracking-[.2em] text-slate-400">SOLUSI NUSANTARA</span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-8 text-[13px] font-semibold text-slate-300 lg:flex">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="transition hover:text-cyan-300" exact-active-class="text-cyan-300">{{ link.label }}</NuxtLink>
      </div>

      <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="hidden rounded-full bg-cyan-400 px-5 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-cyan-300 lg:inline-flex">Konsultasi Gratis <span class="ml-2">↗</span></a>
      <button class="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white lg:hidden" aria-label="Buka menu" @click="mobileMenuOpen = !mobileMenuOpen">
        <span class="text-xl">{{ mobileMenuOpen ? '×' : '☰' }}</span>
      </button>
    </nav>
    <div v-if="mobileMenuOpen" class="border-t border-white/10 bg-[#071426] px-6 py-5 text-sm text-slate-200 lg:hidden">
      <div class="container-shell flex flex-col gap-4">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="mobileMenuOpen = false">{{ link.label }}</NuxtLink>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950">Konsultasi Gratis ↗</a>
      </div>
    </div>
  </header>
</template>
