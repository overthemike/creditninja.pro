declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: {
        url: string
        text: string
        color: string
        textColor: string
      }) => void
      initPopupWidget: (config: { url: string }) => void
      initInlineWidget: (config: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

export {}
