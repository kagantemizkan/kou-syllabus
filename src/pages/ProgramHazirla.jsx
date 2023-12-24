import { Sidebar } from '../components/Sidebar'
import { FiGithub } from 'react-icons/fi'

export const ProgramHazirla = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
        <div className="flex items-center gap-3">
          <Sidebar />
          <p>Ders Programı Düzenle</p>
        </div>
      </nav>
      <div className="px-5 py-2">
        Program Hazirla
      </div>
    </div>
  )
}
