import { useAddPackage } from "./data";
import { RenderPacakges } from "./components";
import { getSelectedOption } from "../../assets/utils/utils";
import Input from "../Input/Input";

export default function AddPackage({ formik, roasters, provider_id }) {
  const {
    inputWeightRef,
    inputQuntiyRef,
    setAddNewPackage,
    inputPriceRef,
    handelAddNewPackage,
    removePackage,
    addNewPackage,
  } = useAddPackage(formik, roasters, provider_id);

  return (
    <div className="rounded-md sm:rounded-[20px] mt-5 sm:mt-20 border border-[#252525] p-3 sm:p-[32px] grid grid-cols-12 gap-3 md:gap-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
        className="col-span-12 md:col-span-6"
      >
        <div className="mb-5 sm:mb-8">
          <label htmlFor={"Weight /gm"} className="label">
            Peso
          </label>

          <Input
            type="number"
            ref={inputWeightRef}
            placeholder={"Ingresar Peso /gr"}
            value={parseFloat(addNewPackage.weight)}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value < 0) return;
              setAddNewPackage((prev) => ({ ...prev, weight: e.target.value }));
            }}
            id={"Weight /gm"}
          />
        </div>

        <div className="mb-5 sm:mb-8">
          <label htmlFor={"PriceEuro"} className="label">
            Precio
          </label>

          <Input
            type="number"
            ref={inputPriceRef}
            placeholder={"Ingresar Precio /Euro"}
            value={parseFloat(addNewPackage.price)}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value < 0) return;
              setAddNewPackage((prev) => ({ ...prev, price: e.target.value }));
            }}
            id={"PriceEuro"}
          />
        </div>

        {getSelectedOption(roasters, "id", provider_id)?.manage_stock ? (
          <div className="mb-8">
            <label htmlFor={"Units"} className="label">
              Cantidad
            </label>

            <Input
              type="number"
              ref={inputQuntiyRef}
              placeholder={"Cantidad"}
              onChange={(e) =>
                setAddNewPackage((prev) => ({ ...prev, units: e.target.value }))
              }
              id={"Units"}
            />
          </div>
        ) : null}

        <button
          type="button"
          onClick={handelAddNewPackage}
          className="bg-[#58291E] sm:text-[20px] text-center text-white font-medium w-full py-2 sm:py-[16px] px-4 sm:px-[24px] rounded-md sm:rounded-full"
        >
          Añadir Paquete
        </button>
      </form>

      <RenderPacakges formik={formik} removePackage={removePackage} />
    </div>
  );
}
