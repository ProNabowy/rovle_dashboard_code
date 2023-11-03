import { useContext, useEffect, useState } from "react";
import { Permissions } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { AppContext } from "../../../../components/AppContext/AppContext";

const useDataGetter = _ => {

    const PermissionsUtailty = new Permissions();

    const [permissions, setPermissions] = useState({});

    const permissionsKeys = Object.keys(permissions);

    const [initialValues, setInitialValues] = useState({ name: "", permissions: [] });

    const { useFormData } = Formik();

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = (values) => {

        setIsLoading(true);

        return PermissionsUtailty.addPermissions(values).finally(_ => setIsLoading(false));

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

    }, []);


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