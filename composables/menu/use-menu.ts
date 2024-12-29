interface Contact {
  value: string
  type: 'phone' | 'mail'
}

interface MenuItem {
  title: string
  key?: string
  link?: string
}

export function useMenu() {
  const MENU_ITEMS: MenuItem[] = [
    { title: 'Головна', key: 'main' },
    { title: 'Про компанію', key: 'about' },
    { title: 'Ціни', key: 'prices' },
    { title: 'Пропозиції', key: 'products' },
    { title: 'Новини', link: 'news' },
  ]

  const CONTACTS: Contact[] = [
    {
      value: '+38 (048) 750-25-45',
      type: 'phone',
    },
    {
      value: '+38 (048) 750-25-46',
      type: 'phone',
    },
    {
      value: '+38 (067) 518-00-76',
      type: 'phone',
    },
    {
      value: 'sales@rezonplus.com.ua',
      type: 'mail',
    },
  ]

  function scrollToSection(sectionId: string | undefined) {
    if (!sectionId) {
      return
    }

    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function getLinkAttributes(item: Contact) {
    if (item.type === 'phone') {
      return {
        href: `tel:${item.value.replace(/\D/g, '')}`,
      }
    }
    if (item.type === 'mail') {
      return {
        href: `mailto:${item.value}`,
      }
    }
    return {
      href: '#',
    }
  }

  return {
    MENU_ITEMS,
    CONTACTS,
    scrollToSection,
    getLinkAttributes,
  }
}
