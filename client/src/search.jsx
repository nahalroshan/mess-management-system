export default function Search() {
    return (
      <div className="flex flex-row space-x-10 items-center">
        <div className="font-semibold text-lg">Admissions</div>
        <div className="w-80 h-10 shadow-md shadow-dark-gray flex items-center flex-row gap-4 rounded-3xl bg-white">
          <div className="ml-4 mt-1">
            <box-icon name='search-alt-2'></box-icon>
          </div>
          <div className="flex items-center flex-grow text-dark-gray text-xs text-center">
            Search name, room, or id
          </div>
        </div>
        <button className="bg-purple text-white flex items-center rounded-md w-20 h-9">
          <div className="ml-2 mt-1"><box-icon name='plus' color='white'></box-icon></div>
          <span className="ml-2">Add</span>
        </button>
      </div>
    );
  }
  