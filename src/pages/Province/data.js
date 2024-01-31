import { useDispatch, useSelector } from 'react-redux';
import { Province } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';
import { hasPermissions } from '../../assets/js/utils';
import { setProvince } from '../../store/reduces/province';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../components/AppContext/AppContext';

const ProvinceUtility = new Province();

const useDataGetter = () => {

    const permissions = useSelector(store => store.permissions);

    const user_access = useSelector(store => store?.userPeressmisons);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    const province = useSelector(store => store.province);

    useEffect(() => {

        if (hasPermissions(permissions.Provinces, user_access, 'dashboard.provinces.index')) {

            setIsLoading(true);

            ProvinceUtility.fetchProvinces(setProvince, dispatch).finally(_ => setIsLoading(false));

        }

        return () => { };

    }, [permissions, user_access]);

    return { province };
}

const tableService = new Table();

const useActionsBodyTemplate = (rowData) => {

    const provinces = useSelector(store => store.province);

    return <TableActions
        path={`/settings/province/list/edit-province?id=${rowData?.id}`}
        handelDeleteFunction={ProvinceUtility.deleteProvince}
        rowData={rowData}
        editKey={'dashboard.provinces.update'}
        deleteKey={'dashboard.provinces.destroy'}
        PagePermissionKey={'Provinces'}
        list={provinces}
    >

    </TableActions>

};


const columns = [
    { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
    { field: "country.name", header: "País", tamplate: tableService.countryBodyTemplate },
    { field: "created_at", header: "Fecha", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Última Fecha", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Acción", tamplate: useActionsBodyTemplate },
];


export {
    columns,
    useDataGetter
};