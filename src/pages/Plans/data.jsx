import { Fragment, useContext, useEffect, useState } from "react";
import { Delete, Get } from "../../apis/apis";
import { SeeMore, TableActions } from "../../components";
import { AppContext } from "../../context/AppContext";
import Table from "../../assets/utils/table";

const tableService = new Table();

const useDataGetter = (_) => {
  const getUtailty = new Get();

  const deleteUtailty = new Delete();

  const [plans, setPlans] = useState([]);

  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true); // Show the loader before making the API request

    getUtailty
      .getPlans()
      .then((response) => setPlans(response))
      .finally((_) => setIsLoading(false));

    return () => {};
  }, []);

  const roasterNameBodyTemplate = (rowData) => {
    return (
      <p className="mb-1 capitalize text-[13px] font-medium">
        {rowData?.provider?.commercial_name}
      </p>
    );
  };

  const sizeBodyTemplate = (rowData) => {
    const sizes = rowData?.sizes;

    const itemBodyTamplate = (item, classNames) => (
      <p
        key={item.index}
        className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}
      >
        -{item?.size?.name} = {item?.price} Euro
      </p>
    );

    const renderPackages = sizes?.slice(0, 3)?.map((item, index) => {
      return (
        <Fragment key={index}>{itemBodyTamplate(item, "text-center")}</Fragment>
      );
    });

    return (
      <div>
        {renderPackages}

        {sizes?.length > 2 && (
          <SeeMore
            list={sizes}
            headerName="Paquetes"
            tamplate={itemBodyTamplate}
          />
        )}
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <p
        className={`mb-1 capitalize text-[13px] font-medium ${
          rowData.status === "active" ? "text-[#28C76F]" : "text-[#FF5C34]"
        }`}
      >
        {rowData.status}
      </p>
    );
  };

  const useActionsBodyTemplate = (rowData) => {
    return (
      <TableActions
        path={`/products/plans/edit-plan?id=${rowData?.id}`}
        handelDeleteFunction={deleteUtailty.deletePlan}
        rowData={rowData}
        editKey={"dashboard.plans.update"}
        deleteKey={"dashboard.plans.destroy"}
        PagePermissionKey={"Plans"}
        list={plans}
        state={setPlans}
      ></TableActions>
    );
  };

  const columns = [
    {
      field: "id",
      header: "ID",
      classNames: "!px-[15px]",
      tamplate: tableService.idBodyTemplate,
    },
    {
      field: "name",
      header: "Nombre Planes",
      classNames: "!px-[0px]",
      tamplate: tableService.nameBodyTemplate,
    },
    {
      field: "provider.commercial_name",
      header: "Nombre del Tostador",
      classNames: "!px-[15px]",
      tamplate: roasterNameBodyTemplate,
    },
    {
      field: "status",
      header: "Estado",
      classNames: "!px-[15px]",
      tamplate: statusBodyTemplate,
    },
    {
      field: "provider.commercial_name",
      header: "Tallas",
      classNames: "!px-[15px]",
      tamplate: sizeBodyTemplate,
    },
    {
      field: "rowData.updated_at",
      header: "Fecha de inicio",
      classNames: "!px-[15px]",
      tamplate: tableService.lastDateBodyTemplate,
    },
    {
      field: "action",
      header: "Acción",
      classNames: "!px-[15px]",
      tamplate: useActionsBodyTemplate,
    },
  ];

  return { plans, columns };
};

export { useDataGetter };
