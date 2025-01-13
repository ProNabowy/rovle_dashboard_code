import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';

export default function useExportTable(exportPDFColumns, list, exportedExcelList) {

  // const exportColumns = columns?.map((col) => ({
  //   title: col.header,
  //   dataKey: col.field,
  // }));

  const saveAsExcelFile = (buffer, fileName) => {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  };

  const exportExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(exportedExcelList);
    const workBook = {
      Sheets: { data: workSheet },
      SheetNames: ['data'],
    };
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });
    saveAsExcelFile(excelBuffer, 'rovle');
  };


  const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        // Preprocess the data
        const processedList = list.map((item) => {
          const newItem = {};
          exportPDFColumns.forEach((col) => {
            const keys = col.dataKey.split("."); // Handle nested keys
            let value = item;
            keys.forEach((key) => {
              value = value ? value[key] : ""; // Traverse nested keys
            });

            if (Array.isArray(value)) {
              value = value.length; // Replace arrays with their length
            }

            newItem[col.dataKey] = value || 0; // Set the value or empty string if undefined
          });
          return newItem;
        });

        const doc = new jsPDF.default(0, 0);
        doc.autoTable({
          columns: exportPDFColumns, // Columns configuration
          body: processedList, // Preprocessed data
        });
        doc.save(`${'rovle'}.pdf`);
      });
    });
  };


  return { exportPDF, exportExcel }

}
