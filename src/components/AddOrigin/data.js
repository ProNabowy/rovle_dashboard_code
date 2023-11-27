import { useEffect, useState } from "react";
import { Origins } from "../../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { setOrigins } from "../../store/reduces/origins";



const useGetOriginData = (formik, provider_id) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const [visible, setVisible] = useState(false);

    const [addOriginValue, setAddOriginValue] = useState(null);

    const OriginsUtailty = new Origins();

    const origins = useSelector(store => store.origins);

    const dispatch = useDispatch();

    const handelAddOrigin = () => {

        setVisible(false);

        OriginsUtailty.addOrigin({ name: addOriginValue, provider_id: provider_id }, dispatch, origins);

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
        handelAddOrigin
    }

}


export {
    useGetOriginData
}