import { PackagesForm } from './components';

export default function AddPackage({ formik }) {

    return (
        <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>

            <PackagesForm formik={formik} />

        </div>
    )
}
