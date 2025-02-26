import { useContext, useEffect, useState } from "react";
import { Delete, Get } from "../../apis/apis";
import { SeeMore, TableActions } from "../../components";
import Table from "../../assets/utils/table";
import { AppContext } from "../../context/AppContext";

const tableService = new Table();

const useDataGetter = (_) => {
  const getUtility = new Get();

  const deleteUtility = new Delete();

  const [products, setProducts] = useState([]);

  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true); // Show the loader before making the API request

    getUtility
      .getProducts()
      .then((response) => setProducts(response))
      .finally((_) => setIsLoading(false));

    return () => {};
  }, []);

  const roastersBodyTemplate = (rowData) => {
    return (
      <p className="mb-1 capitalize text-[13px] font-medium">
        {rowData?.provider?.commercial_name}
      </p>
    );
  };

  const shopsBodyTemplate = (rowData) => {
    const shops = rowData?.coffee_shops;

    const itemBodyTamplate = (item, index, classNames) => (
      <p
        key={index}
        className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}
      >
        {item?.name}
      </p>
    );

    const renderShops = shops?.slice(0, 3)?.map((item, index) => {
      return itemBodyTamplate(item, index, "text-center");
    });

    return (
      <div>
        {renderShops}

        {shops?.length > 2 && (
          <SeeMore
            list={shops}
            headerName="Packages"
            tamplate={itemBodyTamplate}
          />
        )}
      </div>
    );
  };

  const packagesBodyTemplate = (rowData) => {
    const packages = rowData?.presentations;

    const itemBodyTamplate = (item, index, classNames) => (
      <p
        key={index}
        className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}
      >
        {parseInt(item?.weight)} Gr = {item?.price} Euro
      </p>
    );

    const renderPackages = packages?.slice(0, 3)?.map((item, index) => {
      return itemBodyTamplate(item, index, "text-center");
    });

    return (
      <div>
        {renderPackages}

        {packages?.length > 2 && (
          <SeeMore
            list={packages}
            headerName="Packages"
            tamplate={itemBodyTamplate}
          />
        )}
      </div>
    );
  };

  const useActionsBodyTemplate = (rowData) => {
    return (
      <TableActions
        path={`/products/list/edit-product?id=${rowData?.id}${
          rowData?.owner_name ? "?new-owner=true" : ""
        }`}
        disableEdit={rowData?.parent_id}
        handelDeleteFunction={deleteUtility.deleteProduct}
        rowData={rowData}
        state={setProducts}
        editKey={"dashboard.products.update"}
        deleteKey={"dashboard.products.destroy"}
        PagePermissionKey={"Products"}
        list={products}
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
      field: "commercial_name",
      header: "Nombre Productos",
      classNames: "!px-[0px]",
      tamplate: tableService.roasterNameBodyTemplate,
    },
    {
      field: "provider.commercial_name",
      header: "Tostadores",
      classNames: "!px-[15px]",
      tamplate: roastersBodyTemplate,
    },
    {
      field: "commercial_name",
      header: "Tiendas",
      classNames: "!px-[15px]",
      tamplate: shopsBodyTemplate,
    },
    {
      field: "commercial_name",
      header: "Paquetes",
      classNames: "!px-[15px]",
      tamplate: packagesBodyTemplate,
    },
    {
      field: "updated_at",
      header: "Fecha última",
      classNames: "!px-[15px]",
      tamplate: tableService.lastDateBodyTemplate,
    },
    {
      field: "auction",
      header: "Acción",
      classNames: "!px-[15px]",
      tamplate: useActionsBodyTemplate,
    },
  ];

  return { products, columns };
};

export { useDataGetter };
