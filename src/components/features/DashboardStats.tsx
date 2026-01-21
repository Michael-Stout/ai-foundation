import { Card, CardContent } from '@/components/ui'

interface Stat {
  label: string
  value: string | number
  icon: React.ReactNode
  change?: string
}

interface DashboardStatsProps {
  stats: Stat[]
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              {stat.change && (
                <p className="text-xs text-success">{stat.change}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
