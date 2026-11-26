export const WHATSAPP_NUMBER = '6282244492100'
export const WHATSAPP_DISPLAY = '+62 822-4449-2100'

const DEFAULT_MESSAGE = 'Halo EzyTekno, saya ingin konsultasi kebutuhan solusi digital untuk bisnis saya.'

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
