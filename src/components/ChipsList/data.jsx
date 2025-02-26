import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { hasRoutePermissions } from "../../assets/utils/utils";

const useGetShopData = (formik, dataKey, optionLabel, listOfState) => {
  const [selectedShop, setSelectedShop] = useState(null);

  const [visible, setVisible] = useState(false);

  const { userPeressmisons } = useContext(AppContext);

  const isHasPermissions = (permissionKey) =>
    hasRoutePermissions(userPeressmisons, permissionKey);

  useEffect(() => {
    if (selectedShop) {
      if (
        !formik.values[dataKey]?.includes(
          selectedShop[optionLabel] || selectedShop.name
        )
      ) {
        formik.setFieldValue(dataKey, [
          ...formik.values[dataKey],
          {
            name: selectedShop[optionLabel] || selectedShop.name,
            id: selectedShop.id,
          },
        ]);
      }
    }

    return () => {};
  }, [selectedShop]);

  const handleDuplicatedValue = (currentValue) => {
    const filter = formik.values[dataKey]?.filter(
      (item) => item.id === currentValue.id
    );

    return filter.length ? null : setSelectedShop(currentValue);
  };

  const handleRemove = (removedValue) => {
    const newValue = formik.values[dataKey]?.filter(
      (val) => val.id !== removedValue
    );

    formik.setFieldValue(dataKey, newValue);
    setSelectedShop(null);
  };

  useEffect(() => {
    if (listOfState) {
      const itHasValues = Object.keys(listOfState);

      if (itHasValues?.length) {
        setVisible(false);

        if (
          !formik.values?.[dataKey]?.includes(
            selectedShop?.[optionLabel] || listOfState?.name
          )
        ) {
          formik.setFieldValue(dataKey, [
            ...formik.values[dataKey],
            { name: listOfState?.name, id: listOfState?.id },
          ]);
        }
      }
    }

    return () => {};
  }, [listOfState]);

  const renderChipsItem = (item) => {
    return item.name || item[optionLabel];
  };

  return {
    selectedShop,
    handleDuplicatedValue,
    handleRemove,
    renderChipsItem,
    isHasPermissions,
    visible,
    setVisible,
  };
};

export { useGetShopData };
