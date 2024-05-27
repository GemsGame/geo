import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { add } from "../../../redux/slices/filtersSlice";

interface IDataPicker {
  id: string;
  name: string;
  value: string;
  min: string;
  max: string;
  label: string;
  data: string;
}
export const DatePicker: React.FC<IDataPicker> = ({
  id,
  name,
  min,
  max,
  label,
  data,
}) => {
  const dispath = useAppDispatch();

  return (
    <div>
      <div>
        <label htmlFor="start" style={{ paddingRight: 8 }}>
          {label}
        </label>
        <input
          type="date"
          id={id}
          name={name}
          min={min}
          max={max}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispath(
              add({
                data,
                name,
                value: event.target.value,
              })
            );
          }}
        />
      </div>
    </div>
  );
};
