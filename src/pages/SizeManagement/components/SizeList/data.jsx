import { Delete, Get } from "../../../../apis/apis";
import { TableActions } from "../../../../components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import Table from "../../../../assets/utils/table";

const tableService = new Table();

const useDataGetter = _ => {

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const { setIsLoading, user } = useContext(AppContext);

    const provider = user?.provider;

    const [sizes, setSizes] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSizes().then(response => setSizes(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    const weightBodyTemplate = (rowData) => {

        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.weight}</p>

    };

    const useActionsBodyTemplate = (rowData) => {

        return <TableActions
            disableEdit={true}
            handelDeleteFunction={deleteUtailty.deleteSize}
            rowData={rowData}
            deleteKey={'dashboard.sizes.destroy'}
            PagePermissionKey={'Sizes'}
            state={setSizes}
            list={sizes}
        ></TableActions>

    };

    const columns = [
        { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Personaje", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
        { field: "weight", header: "Peso", classNames: "!px-[15px]", tamplate: weightBodyTemplate },
        { field: "updated_at", header: "Fecha", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
        { field: "status", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
    ];


    return {
        sizes,
        provider,
        columns
    };

}



export {
    useDataGetter
}
