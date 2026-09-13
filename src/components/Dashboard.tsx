import { useDashboard } from '../hooks/useDashboard'

export function Dashboard() {
  const { data, loading, error } = useDashboard()

  if (loading) return <div>Carregando dashboard...</div>
  if (error) return <div>Erro: {error.message}</div>
  if (!data) return null

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded">
          <h2 className="text-lg font-semibold">Projetos Ativos</h2>
          <p className="text-3xl">{data.activeProjects}</p>
        </div>
        <div className="p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Receita Total</h2>
          <p className="text-3xl">R$ {data.totalRevenue}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded">
          <h2 className="text-lg font-semibold">Margem Média</h2>
          <p className="text-3xl">{data.avgMargin}%</p>
        </div>
      </div>
    </div>
  )
}
