const API_BASE = 'https://torre-control-tower-api-prod.leonamsilva-oz-inc.workers.dev/api'

export async function fetchDashboardKPIs() {
  const res = await fetch(`${API_BASE}/dashboard/kpis`)
  if (!res.ok) throw new Error('Failed to fetch dashboard')
  return res.json()
}

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects`)
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export async function fetchProjectKPIs(projectId: string) {
  const res = await fetch(`${API_BASE}/projects/${projectId}`)
  if (!res.ok) throw new Error('Failed to fetch project')
  return res.json()
}

export async function fetchProjectTAP(projectId: string) {
  const res = await fetch(`${API_BASE}/projects/${projectId}/tap`)
  if (!res.ok) throw new Error('Failed to fetch TAP')
  return res.json()
}
