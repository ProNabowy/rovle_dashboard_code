import { Input, PageContent } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useDataGetter } from './data'
import default_user from '../../assets/images/default_user.png';
import { ProviderForm, UserForm } from './components'
import { Link } from 'react-router-dom';

export default function Profile() {

    const {
        formik,
        data,
        counteris,
        classList,
        setClassList,
        handleBlur,
        user,
        isProvider
    } = useDataGetter();


    return (

        <PageContent
            title={'Mi perfil'}
            showActions={false}
            titleJsx={
                isProvider && !user?.stripe_id
                    ?
                    <Link to={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_QFDuMB6yCn5mVkylYcoVu9RIeDhzIjLH&scope=read_write&state=${isProvider?.id}&redirect_uri=https://rovle.eslamghazy.net/onboardingresult`} target='_blank' type='button' className='min-btn text-center'>Haz el onboarding con Stripe</Link>
                    :
                    null
            }
        >

            <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-10'>

                <div className='w-[250px] h-[250px] shadow-lg mb-20 m-auto rounded-full flex items-center justify-center relative profile-image overflow-hidden'>

                    <img
                        src={
                            typeof
                                formik.values.image === "object"
                                ?
                                formik.values?.image ? URL?.createObjectURL(formik.values?.image)
                                    :
                                    `${data?.image}`
                                :
                                `${data?.image}`
                        }
                        alt=''
                        onError={e => {

                            e.target.src = default_user;
                            setClassList('!w-[150px] !object-contain');

                            return null;
                        }}
                        className={`w-full h-full object-cover rounded-full ${classList}`}
                    />

                    <div className='w-[250px] h-[250px] flex items-start justify-center rounded-full bg-[#45b9eae1] absolute left-0 z-20 transition bottom-[-250px] uploade-image'>

                        <Input
                            type='file'
                            accept="image/png, image/gif, image/jpeg"
                            onChange={e => {
                                formik.setFieldValue('image', e.target.files[0]);
                                setClassList('');
                            }}
                            id='uploade-img'
                            classNames='!w-0 !h-0 appearance-none !opacity-0 !scale-0' />

                        <label htmlFor='uploade-img'>

                            <FontAwesomeIcon icon={faImage} className='text-[40px] mt-8 -ms-3 cursor-pointer text-white' />

                        </label>

                    </div>

                </div>

                {
                    isProvider
                        ?

                        <ProviderForm
                            formik={formik}
                            handleBlur={handleBlur}
                            counteris={counteris}
                        />
                        :
                        <UserForm formik={formik} />
                }
                {console.log(isProvider)
                }

                <button type='submit' className='min-btn block ml-auto'>Guardar cambios</button>

            </form>

        </PageContent>
    )
}
