import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';

export default function useExportTable(columns, list, saveName) {

  const exportColumns = columns?.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

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
    const workSheet = XLSX.utils.json_to_sheet(list);
    const workBook = {
      Sheets: { data: workSheet },
      SheetNames: ['data'],
    };
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });
    saveAsExcelFile(excelBuffer, saveName);
  };


  const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, list);
        doc.save(`${saveName}.pdf`);
      });
    });
  };

  return { exportPDF, exportExcel }

}
