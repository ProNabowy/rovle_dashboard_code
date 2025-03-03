import React, { Fragment } from "react";
import { Dropdown } from "primereact/dropdown";
import { useFormDataGetter } from "./data";
import { ChipsList, Input } from "../../../../../components";
import { getSelectedOption } from "../../../../../assets/utils/utils";

export default function ProductsForm() {
  const {
    rosters,
    formik,
    clickHandler,
    selectedProduct,
    setSelectedProduct,
    productInfo,
    selectedProvider,
    currentRoaster,
    setCurrentRoaster,
    setSelectedProvider,
    roasterFrom,
    roasterTo,
    user,
    setAddedShops,
    addedShops,
  } = useFormDataGetter();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      autoComplete="off"
      className="px-3 sm:px-10 add-product"
    >
      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div className={`${user?.provider ? "w-full" : "w-full sm:w-[48%]"}`}>
          <label htmlFor={"owner"} className="label">
            Desde el tostador
          </label>

          <Dropdown
            value={selectedProvider}
            filter
            emptyFilterMessage="No hay opciones disponibles"
            emptyMessage="No hay opciones disponibles"
            onChange={(e) =>
              setSelectedProvider(
                getSelectedOption(rosters, "id", e.target.value?.id)
              )
            }
            options={roasterFrom}
            optionLabel="commercial_name"
            inputId="owner"
            placeholder="Seleccionar Tostador"
            className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent"
          />
        </div>

        {!user?.provider ? (
          <div className="w-full sm:w-[48%]">
            <label htmlFor={"owner"} className="label">
              Al tostador
            </label>

            <Dropdown
              filter
              value={currentRoaster}
              onChange={(e) =>
                setCurrentRoaster(
                  getSelectedOption(rosters, "id", e.target.value?.id)
                )
              }
              options={roasterTo}
              optionLabel="commercial_name"
              inputId="owner"
              emptyFilterMessage="No hay opciones disponibles"
              emptyMessage="No hay opciones disponibles"
              placeholder="Seleccionar Tostador"
              className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent"
            />
          </div>
        ) : null}
      </div>

      <div className="mb-8">
        <label htmlFor={"name"} className="label">
          Nombre del Producto
        </label>

        <Dropdown
          value={selectedProduct}
          filter
          onChange={(e) =>
            setSelectedProduct(
              getSelectedOption(
                selectedProvider?.products,
                "id",
                e.target.value.id
              )
            )
          }
          options={selectedProvider?.products}
          optionLabel="commercial_name"
          inputId="name"
          emptyFilterMessage="No hay opciones disponibles"
          emptyMessage="No hay opciones disponibles"
          placeholder="Seleccionar Nombre del Producto"
          className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent"
        />
      </div>

      {productInfo?.id ? (
        <Fragment>
          <div className="flex-container">
            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Code"} className="label">
                Código
              </label>

              <Input
                value={productInfo?.code}
                disabled
                type={"text"}
                id={"Code"}
                placeholder={"Ingresar Código"}
              />
            </div>

            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Region"} className="label">
                Región
              </label>

              <Input
                value={productInfo?.region}
                disabled
                type={"text"}
                id={"Region"}
                placeholder={"Ingresar Región"}
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor={"Origin"} className="label">
              Origen
            </label>

            <Input
              value={productInfo?.origin}
              disabled
              type={"text"}
              id={"Origin"}
              className="p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]"
              placeholder={"Ingresar Origen"}
            />
          </div>

          <div className="flex-container">
            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Finca"} className="label">
                Finca
              </label>

              <Input
                value={productInfo?.farm}
                disabled
                type={"text"}
                id={"Finca"}
                placeholder={"Ingresar Finca"}
              />
            </div>

            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Nombre"} className="label">
                Nombre Comercial
              </label>

              <Input
                value={productInfo?.commercial_name}
                disabled
                type={"text"}
                id={"Nombre"}
                placeholder={"Ingresar Nombre Comercial"}
              />
            </div>
          </div>

          <div className="flex-container">
            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Sca"} className="label">
                Puntuación Sca s
              </label>

              <Input
                value={productInfo?.sca_score}
                disabled
                type={"text"}
                id={"Sca"}
                placeholder={"Ingresar Puntuación Sca s"}
              />
            </div>

            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Altitud"} className="label">
                Altitud
              </label>

              <Input
                value={productInfo?.altitude}
                disabled
                type={"text"}
                id={"Altitud"}
                placeholder={"Ingresar Altitud"}
              />
            </div>
          </div>

          <div className="flex-container">
            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Variedad"} className="label">
                Variedad
              </label>

              <Input
                value={productInfo?.grades}
                disabled
                type={"text"}
                id={"Variedad"}
                placeholder={"Ingresar Variedad"}
              />
            </div>

            <div className="w-full sm:w-[48%]">
              <label htmlFor={"Proceso"} className="label">
                Proceso
              </label>

              <Input
                value={productInfo?.process}
                disabled
                type={"text"}
                id={"Proceso"}
                placeholder={"Ingresar Proceso"}
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor={"Description"} className="label">
              Descripción
            </label>

            <textarea
              rows={5}
              type="text"
              value={productInfo?.description}
              disabled
              id={"Description"}
              className="p-3 w-full border-b bg-white mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]"
              placeholder={"Ingresar Descripción"}
            />
          </div>

          <div className="w-full mb-8">
            <label
              htmlFor={"Presentation"}
              className="text-[18px] mb-2 text-[#252525] font-medium"
            >
              Presentación
            </label>

            <div className="border border-[#b3b3b3] p-3 sm:p-10 sm:px-20 rounded-md sm:rounded-[20px] grid grid-cols-12 gap-5">
              {productInfo?.presentations?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-12 sm:col-span-6 border border-[#58291E] text-center rounded-[5px] p-2"
                  >
                    {item?.price} Euro por {item?.weight} Gr
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Add CoffeShop */}
          <ChipsList
            formik={formik}
            dataKey={"coffeeShops"}
            url={"/setups/coffee-shop/add-coffee"}
            title={"Tu Tienda"}
            pageKey={"Coffee Shops"}
            pagePermissionKeyName={"dashboard.coffeeShops.store"}
            options={
              user?.provider?.coffee_shops || currentRoaster?.coffee_shops
            }
            stateList={setAddedShops}
            listOfState={addedShops}
          />

          <button
            onClick={clickHandler}
            type="submit"
            className="min-btn block !mt-10 ml-auto"
          >
            Enviar
          </button>
        </Fragment>
      ) : null}
    </form>
  );
}
