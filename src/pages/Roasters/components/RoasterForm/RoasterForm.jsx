import { Dropdown } from "primereact/dropdown";
import {
  CitiesDropdown,
  Input,
  ProvincesDropDown,
} from "../../../../components";
import { getSelectedOption } from "../../../../assets/utils/utils";
import { useDataGetter } from "./data";

export default function RoasterForm({ formik, isRenderPassword }) {
  const { countries, handleBlur } = useDataGetter(formik);

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className="px-3 sm:px-10"
    >
      <div className="flex-container">
        <div className="w-full sm:w-[48%]">
          <label htmlFor={"user_email"} className="label">
            Email de login
          </label>

          <Input
            value={formik?.values?.user_email}
            name={"user_email"}
            type={"email"}
            required={true}
            onChange={formik.handleChange}
            id={"user_email"}
            placeholder={"Ingresar Email de login"}
          />
        </div>

        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_email"} className="label">
            Email de contacto
          </label>

          <Input
            value={formik?.values?.provider_email}
            name={"provider_email"}
            type={"email"}
            required={true}
            onChange={formik.handleChange}
            id={"provider_email"}
            placeholder={"Ingresar Correo electrónico"}
          />
        </div>
      </div>

      {isRenderPassword ? (
        <div className="flex-container">
          <div className="w-full sm:w-[48%]">
            <label htmlFor={"user_password"} className="label">
              Contraseña
            </label>

            <Input
              value={formik?.values?.user_password}
              name={"user_password"}
              type={"password"}
              required={true}
              onChange={formik.handleChange}
              id={"user_password"}
              placeholder={"Ingresar Contraseña"}
            />
          </div>

          <div className="w-full sm:w-[48%]">
            <label htmlFor={"user_password_confirmation"} className="label">
              Confirmación de contraseña
            </label>

            <Input
              value={formik?.values?.user_password_confirmation}
              name={"user_password_confirmation"}
              type={"password"}
              required={true}
              onChange={formik.handleChange}
              id={"user_password_confirmation"}
              placeholder={"Ingresar Confirmación de contraseña"}
            />
          </div>
        </div>
      ) : null}

      <div className="flex-container">
        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_nif"} className="label">
            NIF
          </label>

          <Input
            value={formik?.values?.provider_nif}
            name={"provider_nif"}
            type={"string"}
            required={true}
            onChange={formik.handleChange}
            id={"provider_nif"}
            placeholder={"Ingresar NIF"}
          />
        </div>

        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_commercial_name"} className="label">
            Nombre comercial
          </label>

          <Input
            value={formik?.values?.provider_commercial_name}
            name={"provider_commercial_name"}
            type={"text"}
            required={true}
            onChange={formik.handleChange}
            id={"provider_commercial_name"}
            placeholder={"Ingresar Nombre comercial"}
          />
        </div>
      </div>

      <div className="flex-container">
        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_official_name"} className="label">
            Nombre oficial
          </label>

          <Input
            value={formik?.values?.provider_official_name}
            name={"provider_official_name"}
            type={"text"}
            required={true}
            onChange={formik.handleChange}
            id={"provider_official_name"}
            placeholder={"Ingresar Nombre oficial"}
          />
        </div>

        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_address"} className="label">
            Dirección
          </label>

          <Input
            value={formik?.values?.provider_address}
            name={"provider_address"}
            type={"text"}
            required={true}
            onChange={formik.handleChange}
            id={"provider_address"}
            placeholder={"Ingresar Dirección"}
          />
        </div>
      </div>

      <div className="flex-container">
        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_phone"} className="label">
            Teléfono del tostador
          </label>

          <Input
            onChange={formik.handleChange}
            value={formik.values?.provider_phone}
            name="provider_phone"
            type="number"
            required
            id={"provider_phone"}
            placeholder={"Ingresar Teléfono"}
          />
        </div>

        <div className="w-full sm:w-[48%]">
          <label htmlFor={"user_phone"} className="label">
            Teléfono de contacto
          </label>

          <Input
            onChange={formik.handleChange}
            value={formik.values?.user_phone}
            name="user_phone"
            type="number"
            required
            id={"user_phone"}
            placeholder={"Ingresar Teléfono"}
          />
        </div>
      </div>

      <div className="flex-container">
        <div className="w-full sm:w-[48%]">
          <h2 className="label">País</h2>

          <Dropdown
            value={getSelectedOption(
              countries,
              "id",
              formik?.values?.provider_country_id
            )}
            onChange={(e) =>
              formik.setFieldValue("provider_country_id", e.target.value?.id)
            }
            options={countries}
            optionLabel="name"
            filter
            emptyFilterMessage="No hay opciones disponibles"
            emptyMessage="No hay opciones disponibles"
            placeholder="Seleccionar País"
            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
          />
        </div>

        <ProvincesDropDown
          formik={formik}
          countries={countries}
          country_Key={"provider_country_id"}
          province_Key={"provider_province_id"}
        />
      </div>

      <div className="flex-container">
        <CitiesDropdown
          formik={formik}
          provinces={
            getSelectedOption(
              countries,
              "id",
              formik?.values?.provider_country_id
            )?.provinces
          }
          province_Key={"provider_province_id"}
          city_Key={"provider_city_id"}
        />

        <div className="w-full sm:w-[48%]">
          <label htmlFor={"provider_zip"} className="label">
            Código postal
          </label>

          <Input
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value < 0 || value.toString().length > 5) return;
              formik.handleChange(e);
            }}
            onBlur={handleBlur}
            value={parseFloat(formik.values?.provider_zip)}
            name="provider_zip"
            type="number"
            required
            maxLength={5}
            minLength={5}
            id={"provider_zip"}
            placeholder={"Ingresar Código postal"}
          />
        </div>

        {/* <RedioGroup formik={formik} /> */}
      </div>

      <button type="submit" className="min-btn block !mt-10 ml-auto">
        Enviar
      </button>
    </form>
  );
}
