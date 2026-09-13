import { useProjects } from '../hooks/useProjects'

export function ProjectList() {
  const { data, loading, error } = useProjects()

  if (loading) return <div>Carregando projetos...</div>
  if (error) return <div>Erro: {error.message}</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projetos</h1>
      <div className="space-y-2">
        {data.map((project: any) => (
          <div key={project.id} className="p-4 border rounded hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-gray-600">Cliente: {project.client}</p>
            <div className="flex gap-4 mt-2">
              <span className="text-sm">Status: {project.status}</span>
              <span className="text-sm">Receita: R$ {project.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
