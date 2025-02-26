import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Get, Update, swal } from "../../../../../apis/apis";
import { useFormik } from "formik";
import { AppContext } from "../../../../../context/AppContext";

const useEditProduct = () => {
  const location = useLocation().search;

  const getUtailty = new Get();

  const updateUtailty = new Update();
  const [singleProduct, setSingleProduct] = useState({});

  const { user, setIsLoading } = useContext(AppContext);

  const productId = location.slice(4);

  const [initialValues, setInitialValues] = useState({});

  const handelSubmit = (values) => {
    if (
      !values?.presentations?.length ||
      !values?.provider_id ||
      !values?.origins?.length
    ) {
      if (!values?.provider_id) {
        return swal.warning(
          "Advertencia",
          "El campo del tostador es necesario, por favor complételo."
        );
      }

      if (!values?.origins?.length) {
        return swal.warning(
          "Advertencia",
          "Es necesario completar el campo de Origen, por favor."
        );
      }

      if (!values?.presentations?.length) {
        return swal.warning(
          "Advertencia",
          "Es necesario completar el campo de presentaciones, por favor."
        );
      }
    } else {
      const updatedData = { ...values };

      // Convert Objects To Arr Of Ids
      updatedData.origins = updatedData?.origins?.map(
        (item) => item?.id || item
      );
      updatedData.coffeeShops = updatedData?.coffeeShops?.map(
        (item) => item?.id || item
      );

      setIsLoading(true);

      return updateUtailty
        .updateProduct(productId, updatedData)
        .finally((_) => setIsLoading(false));
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handelSubmit,
  });

  useEffect(() => {
    setIsLoading(true);

    getUtailty
      .getSingleProduct(productId)
      .then((data) => {
        const defaultValues = {
          commercial_name: data?.commercial_name,
          code: data?.code,
          trade_name: data?.trade_name,
          region: data?.region,
          farm: data?.farm,
          sca_score: data?.sca_score,
          altitude: data?.altitude,
          process: data?.process,
          grades: data?.grades,
          provider_id: data?.provider_id,
          stock: data?.stock,
          description: data?.description,
          presentations: data?.presentations,
          origins: data?.origins,
          coffeeShops: data?.coffee_shops,
          owner_name: data?.owner_name,
          provider: data?.provider_id,
          parent_id: data?.parent_id,
        };

        formik.setValues(defaultValues);
      })
      .finally((_) => setIsLoading(false));

    // Clean up
    return () => {};
  }, []);

  useEffect(() => {
    if (
      user?.roles?.[0]?.name === "admin" &&
      formik.values?.provider_id !== formik.values?.provider
    ) {
      formik.setFieldValue("coffeeShops", []);
    }
  }, [formik.values?.provider_id]);

  return { formik };
};

export { useEditProduct };
