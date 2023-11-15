import Navbar from "./navbar"
import Card from "./card"
import Search from "./search"
import Table from './table'
import Stats from "./stats"

export default function Home() {
  return (
    <div className="bg-light-gray h-screen w-screen flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-28">
      <div className="w-full sm:w-40">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-6 sm:space-y-10 w-full">
        <div className="flex flex-row mt-6 justify-between">
          <p className="text-3xl font-medium ml-10">Dashboard</p>
          <div className="flex flex-row space-x-4 items-center">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white"><box-icon name='envelope' color='#CD6496'></box-icon></div>
            <div className="space-x-4 rounded-l-2xl bg-white w-56 h-16 flex flex-row items-center shadow-lg shadow-dark-gray">
              <div className="ml-4"><box-icon name='user-circle' size='lg'></box-icon></div>
              <div className="flex flex-col">
                <div> John Doe</div>
                <div className="text-xs text-dark-gray"> johndoe@gmail.com </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <Card 
                title='Mess Out'
                icon='task-x'
                count='54' />
              <Card 
                title='Departures'
                icon='briefcase-alt'
                count='54' />
              <Card 
                title='Vacancies'
                icon='bed'
                count='54' />
            </div>
            <Search />
            <Table />
          </div>
          <div><Stats /></div>
        </div>
      </div>
    </div>
  );
}
