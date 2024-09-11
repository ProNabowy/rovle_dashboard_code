import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import Update from "../../../../apis/Update";
import { Get, Store } from "../../../../apis/apis";

const useDataGetter = asEdit => {

    const [permissions, setPermissions] = useState([]);

    const updateUtailty = new Update();

    const getUtailty = new Get();

    const storeUtailty = new Store();

    const [isDisabled, setIsDisabled] = useState(false);

    const permissionsKeys = Object.keys(permissions);

    const location = useLocation().search;

    const roleId = location.slice(4);

    const navigate = useNavigate();

    const [role, setRole] = useState([]);

    const [initialValues, setInitialValues] = useState({ name: "", permissions: [] });

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = (values) => {

        setIsLoading(true);

        return asEdit ?
            updateUtailty.updateRole(roleId, values)
                .finally(_ => setIsLoading(false))
            :
            storeUtailty.addRole(values, navigate)
                .finally(_ => setIsLoading(false));

    };

    const formik = useFormik({
        initialValues,
        onSubmit: handelSubmit
    });

    useEffect(() => {

        formik.setValues({ name: "", permissions: [] });

        return () => { };
    }, []);

    const onOptionChange = (e, item) => {
        let _ingredients = [...formik.values?.permissions];

        if (e.checked)
            _ingredients.push(item?.id);
        else
            _ingredients.splice(_ingredients.indexOf(item?.id), 1);

        formik.setFieldValue('permissions', _ingredients);
    }


    useEffect(() => {

        setIsLoading(true);

        getUtailty.getPermissions().then(response => setPermissions(response))
            .finally(_ => setIsLoading(false));

        if (asEdit) {
            getUtailty.getSingleRole(roleId)
                .then(response => {

                    setIsDisabled(response?.owner_id ? false : true);
                    setRole(response?.permissions || []);
                    formik.setFieldValue('name', response?.name);
                })
        }

        return () => { };
    }, []);

    useEffect(() => {

        formik.setFieldValue('permissions', role?.map(item => item?.id));

    }, [role]);
    return {
        permissionsKeys,
        onOptionChange,
        permissions,
        formik,
        isDisabled
    }

}

export {
    useDataGetter
}