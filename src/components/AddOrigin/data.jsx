import { useContext, useEffect, useState } from "react";
import { Get, Store, swal } from "../../apis/apis";
import { hasRoutePermissions } from "../../assets/utils/utils";
import { AppContext } from "../../context/AppContext";


const useGetOriginData = (formik, provider_id) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const getUtailty = new Get();

    const storeUtailty = new Store();

    const [visible, setVisible] = useState(false);

    const [addOriginValue, setAddOriginValue] = useState(null);

    const { userPeressmisons, setIsLoading } = useContext(AppContext);

    const isHasPermissions = (permissionKey) => hasRoutePermissions(userPeressmisons, permissionKey);

    const [origins, setOrigins] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOrigins()
            .then(response => setOrigins(response))
            .finally(_ => { setIsLoading(false) });

        return () => { };
    }, []);

    const handelAddOrigin = () => {

        if (addOriginValue) {

            const data = { name: addOriginValue, provider_id: provider_id };

            setVisible(false);

            storeUtailty.addOrigin(data)
                .then(response => {
                    setOrigins(perv => ([...perv, response.data]));
                })

        } else {

            return swal.rejected('Oops!', 'el campo de nombre es obligatorio');

        }

    }

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