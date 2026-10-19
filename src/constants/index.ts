import { Home, Car, Wallet, ShieldCheck, Settings } from 'lucide-react'

export interface NavItem {
  title: string
  to: string
  icon: any
}

export const NAV_ITEMS: NavItem[] = [
  { title: 'Dashboard', to: '/', icon: Home },
  { title: 'GrabFlow Hub', to: '/grab/hub', icon: Car },
  { title: 'Income & Salary', to: '/money', icon: Wallet },
  { title: 'Commitments', to: '/commitments', icon: ShieldCheck },
  { title: 'Settings', to: '/settings', icon: Settings },
]

export const ADMIN_NAV_ITEM: NavItem = {
  title: 'Admin Portal',
  to: '/admin',
  icon: Settings,
}
