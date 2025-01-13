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

            // Call the 'addOrigin' function from the 'storeUtailty' object, passing the 'data' parameter.
            storeUtailty.addOrigin(data)
                // When the promise is resolved, execute the following callback with the 'response' parameter.
                .then(response => {
                    // Update the 'origins' state by appending the new data from the response.
                    if (!response?.data) return;
                    
                    setOrigins(perv => ([...perv, response.data]));
                    // Reset the input value to null after successfully adding the origin.
                    
                    setAddOriginValue(null);
                    // Check if the 'origins' property in 'formik.values' is an array.
                    const type_of_old_origin = Array.isArray(formik?.values?.origins);


                    // Create a new array 'origins' containing the previous values and the new origin data.
                    const origins = type_of_old_origin ? [...formik?.values?.origins, response.data] : [response.data];

                    // Update the 'origins' property in the 'formik' form values with the new array.
                    formik?.setFieldValue('origins', origins);
                });

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