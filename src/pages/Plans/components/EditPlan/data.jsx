import { useContext, useEffect } from "react";
import { Get, Update } from "../../../../apis/apis";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";

const useEditPlan = () => {

    const getUtailty = new Get();

    const updateUtailty = new Update();

    const navigate = useNavigate();

    const location = useLocation().search;

    const planId = location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const formik = useFormik({
        initialValues: { sizes: [] },
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


    const clickHandler = debounce((_) => {

        setIsLoading(true);

        const updatedData = { ...formik.values };

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
    }, 1000)


    return {
        formik,
        clickHandler
    };

}

export {
    useEditPlan
}