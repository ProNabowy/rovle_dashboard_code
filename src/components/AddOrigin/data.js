import { useEffect, useState } from "react";
import { Origins } from "../../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { setOrigins } from "../../store/reduces/origins";
import { Swal } from "../../apis/data";
import { hasPermissions } from "../../assets/js/utils";



const useGetOriginData = (formik, provider_id) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const [visible, setVisible] = useState(false);

    const [addOriginValue, setAddOriginValue] = useState(null);

    const permissions = useSelector(store => store.permissions);
    const user_access = useSelector(store => store?.userPeressmisons);

    const isHasPermissions = (PagePermissions, permissionKey) => hasPermissions(permissions[PagePermissions], user_access, permissionKey);

    const OriginsUtailty = new Origins();

    const origins = useSelector(store => store.origins);

    const dispatch = useDispatch();

    const handelAddOrigin = () => {

        if (addOriginValue) {

            setVisible(false);

            OriginsUtailty.addOrigin({ name: addOriginValue, provider_id: provider_id }, dispatch, origins);

        } else {

            return Swal.rejected('Oops!', 'el campo de nombre es obligatorio');

        }

    }

    useEffect(() => {

        OriginsUtailty.fetchOrigins(setOrigins, dispatch);

    }, []);


    useEffect(() => {

        if (selectedOrigin) {

            if (!Object.values(formik.values.origins).includes(selectedOrigin.name)) {

                formik.setFieldValue('origins', [...formik.values.origins, selectedOrigin]);

            }

        }

    }, [selectedOrigin]);


    return {
        selectedOrigin,
        setSelectedOrigin, visible, setVisible,
        addOriginValue, setAddOriginValue,
        origins,
        handelAddOrigin,
        isHasPermissions
    }

}


export {
    useGetOriginData
}