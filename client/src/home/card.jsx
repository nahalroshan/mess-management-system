export default function Card(props) {
    return (
        <div className="w-48 h-44 shadow-lg shadow-dark-gray rounded-xl bg-white flex flex-col justify-between ml-10">
            <div className="flex mt-4 items-center">
                <div className="ml-4 w-8 h-8 bg-pink-icon-bg rounded-full flex items-center justify-center">
                    <box-icon name={props.icon} color='#CD6496'></box-icon>
                </div>
                <div className="ml-2 flex flex-col">
                    <div className="font-medium text-dark-dark-gray">{props.title}</div>
                    <div className="text-dark-gray text-xs">This Week</div>
                </div>
            </div>
            <div className="text-right text-3xl mb-4 mr-4 text-dark-dark-gray">{props.count}</div>
        </div>

      
    );
  }
  