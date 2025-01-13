import { Fragment, useContext, useEffect, useState } from 'react';
import { Delete, Get, Store, swal } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import { AppContext } from '../../context/AppContext';
import Table from '../../assets/utils/table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

const tableService = new Table();

const useDataGetter = _ => {

    const [origins, setOrigins] = useState([]);

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const { setIsLoading, user } = useContext(AppContext);

    const storeUtailty = new Store();

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOrigins()
            .then(response => setOrigins(response))
            .finally(_ => { setIsLoading(false) });

        return () => { };
    }, []);

    const hostBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.commercial_name}</p>
    };

    const useActionsBodyTemplate = (rowData) => {

        const [visible, setVisible] = useState(false);

        const [selectedOrigin, setSelectedOrigin] = useState({});

        const isAdmin = user?.roles?.[0]?.name === "admin";

        const handleSwitch = () => {
            if (selectedOrigin?.id) {

                storeUtailty.switchOrigin({ origin_from: rowData?.id, origin_to: selectedOrigin?.id }).then(_ => {
                    getUtailty.getOrigins()
                        .then(response => setOrigins(response))
                }).then(_ => setVisible(false));

            } else swal.warning('Advertencia', 'Debe especificar el origen por el que quiere sustituirlo');
        }

        return <TableActions
            path={`/origins/list/edit-origin?id=${rowData?.id}`}
            handelDeleteFunction={deleteUtailty.deleteOrigin}
            rowData={rowData}
            state={setOrigins}
            editKey={'dashboard.origins.update'}
            deleteKey={'dashboard.origins.destroy'}
            PagePermissionKey={'Origins'}
            list={origins}
        >

            {
                isAdmin
                    ?
                    <Fragment>

                        <FontAwesomeIcon onClick={_ => setVisible(true)} icon={faRepeat} className='text-[20px] cursor-pointer ms-5' />

                        <Dialog header="" headerClassName='dialog-cancel-btn' visible={visible} className='w-[95vw] sm:w-[400px]' onHide={() => setVisible(false)}>

                            <label htmlFor={'origin_to'} className='label'>Cambiar origen a</label>

                            <Dropdown
                                value={selectedOrigin}
                                filter
                                onChange={(e) => setSelectedOrigin(e.value)}
                                options={origins?.filter((item) => item?.id != rowData?.id)}
                                optionLabel="name"
                                inputId='origin_to'
                                emptyFilterMessage="No hay opciones disponibles"
                                emptyMessage="No hay opciones disponibles"
                                required
                                placeholder="" className="w-full p-2 !shadow-none  border-[#b3b3b3] " />

                            <button onClick={handleSwitch} className='w-fit ml-auto flex items-center justify-center sm:justify-[initial] py-2 px-3 sm:px-5 lg:px-8 mt-4 rounded-md bg-[var(--primary-color)] text-white  border border-[var(--primary-color)]'>Enviar</button>

                        </Dialog>

                    </Fragment>
                    :
                    null
            }

        </TableActions>
    };


    const columns = [
        { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
        { field: "provider.commercial_name", header: "Introducido por", tamplate: hostBodyTemplate },
        { field: "created_at", header: "Fecha", tamplate: tableService.startDateBodyTemplate },
        { field: "status", header: "Acción", tamplate: useActionsBodyTemplate },
    ];

    return { origins, columns }

}

export {
    useDataGetter
}