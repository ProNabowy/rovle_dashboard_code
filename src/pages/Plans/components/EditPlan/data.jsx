import { useContext, useEffect } from "react";
import { Get, Update, swal } from "../../../../apis/apis";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";

const useEditPlan = () => {

    const getUtailty = new Get();

    const updateUtailty = new Update();

    const navigate = useNavigate();

    const location = useLocation().search;

    const planId = location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const handleSubmit = (values) => {

        if (!values?.provider_id || !values?.sizes?.length) {

            if (!values?.provider_id) {

                return swal.warning('Advertencia', 'El campo del tostador es necesario, por favor complételo.');

            }

            if (!values?.sizes?.length) {

                return swal.warning('Advertencia', 'Es necesario completar el campo de Talla y precio, por favor.');

            }

        } else {

            setIsLoading(true);

            const updatedData = { ...values };

            // Convert Products To Ids
            updatedData.products = updatedData.products?.map(item => {
                const newProductArct = { id: item?.id || item };
                return newProductArct;
            });

            // Convert Coffee Shops To Ids
            updatedData.coffee_shops = updatedData.coffee_shops?.map(item => {
                return item?.id || item;
            });

            return updateUtailty.updatePlan(planId, updatedData).then(_ => navigate('/products/plans/list')).finally(_ => setIsLoading(false));

        }

    }

    const formik = useFormik({
        initialValues: { sizes: [] },
        onSubmit: handleSubmit
    })

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSinglePlan(planId)
            .then(data => {
                formik.setValues({
                    name: data?.name,
                    status: data?.status,
                    description: data?.description,
                    provider_id: data?.provider_id,
                    sizes: data?.sizes?.map((item) => {

                        const newItem = { size_id: item.size_id, price: item?.price, id: item?.size_id };

                        return newItem;

                    }),
                    products: data?.products,
                    coffee_shops: data?.coffee_shops
                });
            })
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    return {
        formik,
    };

}

export {
    useEditPlan
}