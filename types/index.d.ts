import type { Icon } from 'lucide-react'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = Pick<NavItem, 'title' | 'href' | 'disabled'>

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  links: {
    twitter: string
    github: string
  }
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
