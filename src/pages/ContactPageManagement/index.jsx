import SideBarProcesses from '../ProcessesManagement/components/SideBarProcesses'
import ContactCard from './components/ContactCard'

const index = () => {
  return (
    <div className="p-3">
      <div className="flex flex-row gap-4">
        <div className="container p-2">
          <div className="p-3 mx-auto">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  )
}
export default index
