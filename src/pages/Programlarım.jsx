import { Sidebar } from '../components/Sidebar'
import { FiGithub } from 'react-icons/fi'
import WeekSchedule from '../components/WeekSchedule';

export const Programlarım = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
        <div className="flex items-center gap-3">
          <Sidebar />
          <p>Ders Programım</p>
        </div>
      </nav>
      <div className="flex justify-center p-4">
          <WeekSchedule />  
      </div>
    </div>
  )
}
