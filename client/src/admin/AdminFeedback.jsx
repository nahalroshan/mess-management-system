import React from 'react'
import AdminNav from '../admin/AdminNav.jsx'

function AdminFeedback() {
  return (
<div className="flex flex-row">
  <AdminNav />
  <div className="flex flex-col mt-12 ">
    <h1 className="text-4xl ml-96">Feedback Table</h1>
    <div className="flex flex-col ml-96 mt-12">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    2023-11-23
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    5
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    Good service, liked the food.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    2
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    2023-11-23
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    4
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    Could improve the variety of dishes.
                  </td>
                </tr>
                {/* (Repeat similar rows for other data) */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdminFeedback
