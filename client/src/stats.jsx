import Graph from "./graph"

export default function Stats () {
    // const data = {
    //     labels: ['Category 1', 'Category 2', 'Category 3'],
    //     datasets: [
    //       {
    //         label: 'Dataset 1',
    //         data: [10, 20, 30],
    //         backgroundColor: 'rgba(75,192,192,0.2)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderWidth: 1,
    //       },
    //       // Add more datasets if needed
    //     ],
    //   };
      

    return (
        <div className="flex flex-col border-2 border-black w-96 h-96 mr-6 space-y-6">
            <div className="mt-4 font-medium ml-4"> Weekly Activities </div>
            <div className="flex flex-row justify-between mr-16 ml-4">
                <div className="flex flex-col">
                    <div className="text-white rounded-full flex items-center justify-center text-xl bg-onion w-14 h-14">52</div>
                    <div className="text-dark-gray text-sm">Students</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-white rounded-full flex items-center justify-center text-xl bg-onion w-14 h-14">52</div>
                    <div className="text-dark-gray text-sm">Students</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-white rounded-full flex items-center justify-center text-xl bg-onion w-14 h-14">52</div>
                    <div className="text-dark-gray text-sm">Students</div>
                </div>
            </div>
            <div className="ml-4"> Weekly Stats</div>
           

        </div>
    )
}