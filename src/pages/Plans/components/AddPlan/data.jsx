import { useContext, useEffect, useState } from "react";
import { Store, swal } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
const useAddPlan = () => {
  const { user, setIsLoading } = useContext(AppContext);

  const storeUtailty = new Store();

  const provider = user?.provider;

  const is_created_by_provider = user?.created_by_provider;

  const handleSubmit = (values) => {
    if (!values?.provider_id || !values?.sizes?.length) {
      if (!values?.provider_id) {
        return swal.warning(
          "Advertencia",
          "El campo del tostador es necesario, por favor complételo."
        );
      }

      if (!values?.sizes?.length) {
        return swal.warning(
          "Advertencia",
          "Es necesario completar el campo de Talla y precio, por favor."
        );
      }
    } else {
      setIsLoading(true);

      const updatedData = { ...values };

      // Convert Products To Ids
      updatedData.products = updatedData.products?.map((item) => {
        const newProductArct = { id: item?.id || item };
        return newProductArct;
      });

      // Convert Coffee Shops To Ids
      updatedData.coffee_shops = updatedData.coffee_shops?.map((item) => {
        return item?.id || item;
      });

      return storeUtailty
        .addPlan(updatedData, navigate)
        .finally((_) => setIsLoading(false));
    }
  };

  const [initialValues, setInitialValues] = useState({
    name: "",
    status: "active",
    description: "",
    provider_id: provider?.id,
    sizes: [],
    coffee_shops: [],
    products: [],
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setValues(initialValues);

    return () => {};
  }, []);

  return { formik };
};

export { useAddPlan };
