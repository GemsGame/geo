import { useAppSelector } from "../../../redux/hooks";
import "./index.scss";

export const DataTable = () => {
  const { measurements } = useAppSelector<any>((state) => state?.data);

  const getDeptKeys = (array: any[]) => {
    const keys: string[] = [];

    array.forEach((item: any) => {
      keys.push(...Object.keys(item?.data));
    });

    return [...new Set(keys)].sort((a, b) => +a - +b);
  };

  const deptKeys = getDeptKeys(measurements?.data || []);

  return (
    <table className="table table-bordered table-hover table-responsive mt-4 data-table">
      <thead className="sticky-top">
        <tr>
          <td rowSpan={2}>Дата и время измерения</td>
          <td rowSpan={2}>Те</td>
          <td colSpan={99} className="text-center">
            Глубина, м
          </td>
        </tr>
        <tr>
          {deptKeys.map((item: string, key: number) => {
            return <td key={key}>{item}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {measurements?.data.map((item: any, index_0: number) => {
          return (
            <tr key={index_0}>
              <td>{new Date(item.time)?.toLocaleString()}</td>
              <td>{item.averageTemperature?.toFixed(2)}</td>
              {deptKeys?.map((i, index_1) => {
                if (Object.keys(item.data)?.includes(i)) {
                  return (
                    <td key={index_1 + index_0}>
                      {item.data[i].value?.toFixed(2)}
                    </td>
                  );
                } else {
                  return (
                    <td className="table-light" key={index_1 + index_0}></td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
