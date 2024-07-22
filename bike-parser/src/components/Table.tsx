import './Table.css';

interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key as string}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key as string}>
                {row[column.key] as unknown as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
