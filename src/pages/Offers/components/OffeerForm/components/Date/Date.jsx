import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import React from "react";
import { useDataGetter } from "../../data";

export default function DateForm({ formik }) {
  const {
    handleStartDate,
    autoSelectStartData,
    autoSelectEndData,
    handleEndDate,
    setAutoSelectEndData,
  } = useDataGetter(formik);

  const formatDateForBackend = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = d.getFullYear();
    return `${year}/${month}/${day}`; // Ensure consistent format
  };

  return (
    <div className="flex-container">
      <div className="w-full sm:w-[48%]">
        <label
          htmlFor={"checkbox-1"}
          className="label flex items-center justify-between"
        >
          <h3>Fecha INI</h3>

          <div className="flex items-center">
            <label className="me-4" htmlFor="checkbox-1">
              Auto
            </label>

            <Checkbox
              inputId="checkbox-1"
              onChange={handleStartDate}
              checked={autoSelectStartData}
            ></Checkbox>
          </div>
        </label>

        <Calendar
          dateFormat="dd/m/yy"
          value={
            formik.values.start_date ? new Date(formik.values.start_date) : null
          }
          disabled={autoSelectStartData}
          onChange={(e) =>
            formik.setFieldValue("start_date", formatDateForBackend(e.value))
          }
          name="start_date"
          placeholder={formik.values.start_date || "Ingresar Fecha INI"}
          className="w-full my-2"
          showIcon
        />
      </div>

      <div className="w-full sm:w-[48%]">
        <label
          htmlFor={"checkbox-2"}
          className="label flex items-center justify-between"
        >
          <h3>Fecha FIN</h3>

          <div className="flex items-center">
            <label className="me-4" htmlFor="checkbox-2">
              Auto
            </label>

            <Checkbox
              inputId="checkbox-2"
              onChange={handleEndDate}
              checked={autoSelectEndData}
            ></Checkbox>
          </div>
        </label>

        <Calendar
          dateFormat="dd/m/yy"
          minDate={new Date(formik.values?.start_date)}
          value={
            formik.values.end_date ? new Date(formik.values.end_date) : null
          }
          onChange={(e) => {
            formik.setFieldValue("end_date", formatDateForBackend(e.value));
          }}
          name="end_date"
          placeholder={formik.values.end_date || "Ingresar Fecha FIN"}
          className="w-full my-2"
          showIcon
        />
      </div>
    </div>
  );
}
