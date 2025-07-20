
const licenseData = {
  headers: [
    "User license",
    "Read, print and download",
    "Redistribute or republish the article",
    "Translate the article",
    "Download for text and data mining purposes",
    "Reuse portions or extracts from the article in other works",
    "Sell or re-use for commercial purposes"
  ],
  rows: [
    {
      user_license: "CCBY 4.0",
      permissions: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes"]
    },
    {
      user_license: "CCBY-NC-ND 4.0",
      permissions: [
        "Yes",
        "Yes",
        "Yes, For private use only and not for distribution",
        "Yes",
        "Yes",
        "Yes"
      ]
    },
    {
      user_license: "Fifth Dimension Research Publications User license",
      permissions: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes"]
    }
  ]
};

const LicenseTable = () => {
  return (
    <div className="overflow-hidden shadow-lg rounded-md border border-gray-200">
      <table className="w-full table-auto border-collapse">
        <thead className="">
          <tr>
            {licenseData.headers.map((header, index) => (
              <th key={index} className="border border-gray-200 px-4 py-2 text-center text-gray-800 font-medium text-sm xl:text-base 2xl:text-lg">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {licenseData.rows.map((row, idx) => (
            <tr key={idx} className="text-sm xl:text-base 2xl:text-lg">
              <td className="border border-gray-200 px-4 py-2 font-medium text-gray-800">{row.user_license}</td>
              {row.permissions.map((perm, pIdx) => (
                <td key={pIdx} className="border border-gray-200 px-4 py-2 text-gray-700">
                  {perm}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicenseTable;
