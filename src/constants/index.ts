import {
  LayoutDashboard,
  Wallet,
  Receipt,
  PiggyBank,
  ClipboardList,
  FileText,
  BarChart3,
  Bell,
  Settings,
  ShieldCheck,
  Car,
  Landmark,
  Scale,
} from 'lucide-react'

export const APP_NAME = 'Platz Budget'
export const APP_TAGLINE = 'Personal finance + GrabCar driver intelligence.'

export const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/money', label: 'Income & Money', icon: Wallet },
  { to: '/commitments', label: 'Commitments', icon: Receipt },
  { to: '/grab', label: 'GrabFlow Hub', icon: Car },
  { to: '/reports', label: 'Insights', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
] as const

export const ADMIN_NAV_ITEM = { to: '/admin', label: 'Admin Portal', icon: ShieldCheck } as const

export const GRAB_NAV_ITEMS = [
  { to: '/grab', label: 'Overview' },
  { to: '/grab/session', label: 'Log Session' },
  { to: '/grab/history', label: 'History' },
  { to: '/grab/analytics', label: 'Analytics' },
  { to: '/grab/areas', label: 'Areas' },
  { to: '/grab/fuel', label: 'Fuel' },
  { to: '/grab/targets', label: 'Targets' },
] as const

export const EXPENSE_CATEGORIES = [
  'Food',
  'Transport',
  'Shopping',
  'Entertainment',
  'Education',
  'Healthcare',
  'Family',
  'Other',
] as const

export const TASK_CATEGORIES = ['Personal', 'Family', 'Finance', 'Vehicle', 'Home', 'Work', 'Documents'] as const
export const TASK_PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'] as const
export const TASK_STATUSES = ['Todo', 'In Progress', 'Completed'] as const

export const DOCUMENT_CATEGORIES = [
  'Passport',
  'Driving Licence',
  'Insurance',
  'Road Tax',
  'Property',
  'Warranty',
  'Certificate',
  'Other',
] as const

export const ASSET_CATEGORIES = ['Property', 'Vehicle', 'Investment', 'Cash & Savings', 'Other'] as const

export const DEMAND_LEVELS = ['Low', 'Medium', 'High', 'Very High'] as const

export const LONG_RIDE_THRESHOLDS = [20, 30, 40, 50] as const

export const CHART_COLORS = ['#4f46e5', '#818cf8', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7', '#ec4899']
