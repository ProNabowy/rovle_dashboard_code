import { useContext, useEffect, useState } from 'react';
import { Countries } from '../../../../apis/apis';
import { Formik } from '../../../../hooks';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, getSelectedOption } from '../../../../assets/js/utils';
import { AppContext } from '../../../../components/AppContext/AppContext';

const useDataGetter = _ => {

    const countries = new Countries();

    const countriesList = useSelector(store => store.countries);

    const { setIsLoading } = useContext(AppContext);

    const dispatch = useDispatch();

    const { useFormData } = Formik();

    const location = useLocation().search;

    const countryId = +location.slice(4);

    const [initialValues, setInitialValues] = useState({});

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return countries.editCountry(formik.values, countryId, dispatch, countriesList).finally(_ => setIsLoading(false));

    }, 1000);

    useEffect(() => {

        setInitialValues(getSelectedOption(countriesList, 'id', countryId));

    }, [countriesList]);

    return { formik, clickHandler }

}

export {
    useDataGetter
}