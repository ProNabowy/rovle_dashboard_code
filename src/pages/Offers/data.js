import { useContext, useEffect } from 'react';
import TableActions from '../../components/TableActions/TableActions';
import { Offers } from '../../apis/apis';
import { AppContext } from '../../components/AppContext/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { setOffeers } from '../../store/reduces/offeers';
import Table from '../../assets/js/table';

const tableService = new Table();


const roasterNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.provider?.commercial_name}</p>
};

const recurrenBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.recurren}</p>
};


const useActionsBodyTemplate = (rowData) => {

    const passportsUtailty = new Offers();

    const offeers = useSelector(store => store.offeers);

    return <TableActions
        path={`/setups/offers/edit-offer?id=${rowData?.id}`}
        handelDeleteFunction={passportsUtailty.deleteOffer}
        rowData={rowData}
        editKey={'dashboard.passports.update'}
        deleteKey={'dashboard.passports.destroy'}
        PagePermissionKey={'Passports'}
        list={offeers}
    ></TableActions>

};

const useDataGetter = _ => {

    const passportsUtailty = new Offers();

    const offers = useSelector(store => store.offeers);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        passportsUtailty.fetchOffers(setOffeers, dispatch).finally(_ => setIsLoading(false));

    }, []);

    const level_one = offers.filter(item => item?.level_id === 1);
    const level_two = offers.filter(item => item?.level_id === 2);
    const level_three = offers.filter(item => item?.level_id === 3);

    return { offers, level_one, level_two, level_three };

}

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Offer Name", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "name", header: "Roaster Name", classNames: "!px-[15px]", tamplate: roasterNameBodyTemplate },
    { field: "recurren", header: "Recurren", classNames: "!px-[15px]", tamplate: recurrenBodyTemplate },
    { field: "created_at", header: "Start Date", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    useDataGetter,
    columns
}