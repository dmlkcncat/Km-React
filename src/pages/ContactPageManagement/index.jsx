import SideBarProcesses from "../ProcessesManagement/components/SideBarProcesses"
import ContactCard from "./components/ContactCard"

const index = () => {
  return (
    <div className="p-3">
      <div className="flex flex-row gap-4">
        <div className="container p-2">
          <p>İletişim Sayfası</p>
          {/* <div
            className="size-a-2 bg-3"
            style={{ backgroundColor: "#2C3E50" }}
          ></div> */}
          <div className="p-3">
            <ContactCard />
          </div>
        </div>
        <div className="flex-none">
          <SideBarProcesses />
        </div>
      </div>
    </div>
  )
}
export default index
