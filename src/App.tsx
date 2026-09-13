import { Dashboard } from './components/Dashboard'
import { ProjectList } from './components/ProjectList'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Torre de Controle 2.0</h1>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Dashboard />
        <div className="mt-8">
          <ProjectList />
        </div>
      </main>
    </div>
  )
}

export default App
