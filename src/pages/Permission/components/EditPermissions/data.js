import { useContext, useEffect, useState } from "react";
import { Permissions } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useLocation } from "react-router-dom";

const useDataGetter = _ => {

    const PermissionsUtailty = new Permissions();

    const [permissions, setPermissions] = useState({});

    const permissionsKeys = Object.keys(permissions);

    const location = useLocation().search;

    const roleId = location.slice(4);

    const [role, setRole] = useState([]);

    const [initialValues, setInitialValues] = useState({ name: "", permissions: [] });

    const { useFormData } = Formik();

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = (values) => {

        setIsLoading(true);

        return PermissionsUtailty.editPermissions(values, roleId).finally(_ => setIsLoading(false));

    };

    const { formik } = useFormData(initialValues, handelSubmit);

    const onOptionChange = (e, item) => {
        let _ingredients = [...formik.values?.permissions];

        if (e.checked)
            _ingredients.push(item?.id);
        else
            _ingredients.splice(_ingredients.indexOf(item?.id), 1);

        formik.setFieldValue('permissions', _ingredients);
    }

    useEffect(() => {

        PermissionsUtailty.fetchPermissions(setPermissions, true);
        PermissionsUtailty.getSinglePermission(setRole, roleId).then(data => formik.setFieldValue('name', data?.name));

    }, []);

    useEffect(() => {

        formik.setFieldValue('permissions', role?.map(item => item?.id));

    }, [role]);


    return {
        permissionsKeys,
        onOptionChange,
        permissions,
        formik
    }

}

export {
    useDataGetter
}