import { PageContent } from "../../../../components";
import { useDataGetter } from "./data";
import ProvinceForm from "../ProvinceForm";

export default function EditProvince() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Add Province'} showActions={false}>

            <ProvinceForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
