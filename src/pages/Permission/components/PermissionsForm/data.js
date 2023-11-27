import { useContext, useEffect, useState } from "react";
import { Roles } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useLocation } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { useDispatch, useSelector } from "react-redux";

const useDataGetter = asEdit => {

    const rolesUtailty = new Roles();

    const permissions = useSelector(store => store?.permissions);

    const permissionsKeys = Object.keys(permissions);

    const roles = useSelector(store => store.roles);

    const dispatch = useDispatch();

    const location = useLocation().search;

    const roleId = location.slice(4);

    const [role, setRole] = useState([]);

    const [initialValues, setInitialValues] = useState({ name: "", permissions: [] });

    const { useFormData } = Formik();

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = (values) => {

        setIsLoading(true);

        return asEdit ? rolesUtailty.editRole(values, roleId, dispatch, roles).finally(_ => setIsLoading(false)) : rolesUtailty.addRole(values, dispatch, roles).finally(_ => setIsLoading(false));

    };

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    const onOptionChange = (e, item) => {
        let _ingredients = [...formik.values?.permissions];

        if (e.checked)
            _ingredients.push(item?.id);
        else
            _ingredients.splice(_ingredients.indexOf(item?.id), 1);

        formik.setFieldValue('permissions', _ingredients);
    }


    useEffect(() => {

        asEdit && rolesUtailty.getSingleRole(setRole, roleId).then(data => formik.setFieldValue('name', data?.name));

    }, []);

    useEffect(() => {

        formik.setFieldValue('permissions', role?.map(item => item?.id));

    }, [role]);


    return {
        permissionsKeys,
        onOptionChange,
        permissions,
        formik,
        clickHandler
    }

}

export {
    useDataGetter
}