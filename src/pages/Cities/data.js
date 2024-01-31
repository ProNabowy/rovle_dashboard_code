import { useDispatch, useSelector } from 'react-redux';
import { Cities } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';
import { AppContext } from '../../components/AppContext/AppContext';
import { useContext, useEffect } from 'react';
import { setCities } from '../../store/reduces/cities';
import { hasPermissions } from '../../assets/js/utils';

const tableService = new Table();

const citiesUtility = new Cities();

const useDataGetter = () => {

    const permissions = useSelector(store => store.permissions);

    const user_access = useSelector(store => store?.userPeressmisons);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    const cities = useSelector(store => store.cities);

    useEffect(() => {

        if (hasPermissions(permissions.Cities, user_access, 'dashboard.cities.index')) {

            setIsLoading(true);

            citiesUtility.fetchCities(setCities, dispatch).finally(_ => setIsLoading(false));

        }

        return () => { };

    }, [permissions, user_access]);

    return { cities };
}

const provinceBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.province?.name}</p>
};

const useActionsBodyTemplate = (rowData) => {

    const cities = useSelector(store => store.cities);

    return <TableActions
        path={`/settings/cities/list/edit-city?id=${rowData?.id}`}
        handelDeleteFunction={citiesUtility.deleteCity}
        rowData={rowData}
        editKey={'dashboard.cities.update'}
        deleteKey={'dashboard.cities.destroy'}
        PagePermissionKey={'Cities'}
        list={cities}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "province?.name", header: "Provincia", classNames: "!px-[15px]", tamplate: provinceBodyTemplate },
    { field: "created_at", header: "Fecha de inicio", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns,
    useDataGetter
}