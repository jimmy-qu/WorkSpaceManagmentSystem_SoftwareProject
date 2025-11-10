export  function CaseRow({ name, startDate, status, payment, employee, fee, notes }) {
    return (
      <tr>
        <td className="px-4 py-2">{name}</td>
        <td className="px-4 py-2">{startDate}</td>
        <td className="px-4 py-2">{status}</td>
        <td className="px-4 py-2">{payment}</td>
        <td className="px-4 py-2">{employee}</td>
        <td className="px-4 py-2">{fee}</td>
        <td className="px-4 py-2">{notes}</td>
      </tr>
    );
  }
  
export default CaseRow;