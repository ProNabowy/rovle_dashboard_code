import { Link } from 'react-router-dom'
import { Checkbox } from "primereact/checkbox";
import { useDataGetter } from './data';


export default function Login() {

    const {
        checked,
        setChecked,
        setData,
        handelSubmit
    } = useDataGetter();

    return (
        <div className='login w-full h-[100vh] bg-red-500 flex items-center justify-center'
            style={{ background: 'linear-gradient(90deg, rgba(216,225,252,1) 0%, rgba(191,203,241,1) 33%, rgba(176,195,255,1) 100%)' }}>

            <img src={require('../../assets/images/login-vector.png')} className='absolute right-0 bottom-0' />

            <div className='container grid grid-cols-12 gap-5 items-center'>

                <div className='col-span-6 flex items-center justify-center relative'>

                    <img src={require('../../assets/images/login-vector-bg.png')} className='absolute  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]' />

                    <img src={require('../../assets/images/login-vector.gif')} className='max-w-full object-fill relative z-10' />

                </div>

                <div className='col-span-6 h-full flex items-center justify-center'>

                    <div className='p-[32px] h-full rounded-[10px]' style={{ background: 'linear-gradient(120deg, rgba(241, 241, 241, 0.43) -45.57%, rgba(243, 243, 243, 0.00) 134.89%)', backdropFilter: 'blur(5px)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)' }}>

                        <img src={require('../../assets/images/login-logo.png')} className='mb-[56px] mt-[59px] m-auto' />


                        <form onSubmit={handelSubmit}>

                            <div className='mb-[16px]'>

                                <label className='block font-medium' htmlFor='email'>Email address</label>

                                <input autoFocus onChange={e => setData(perv => ({ ...perv, email: e.target.value }))} id='email' type='email' className='w-[400px] h-[40px] px-5 rounded-[8px]' style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }} />

                            </div>

                            <div className='mb-[8px]'>

                                <label className='block font-medium' htmlFor='password'>Password</label>

                                <input onChange={e => setData(perv => ({ ...perv, password: e.target.value }))} id='password' type='password' className='w-[400px] h-[40px] px-5 rounded-[8px]' style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }} />

                            </div>

                            <Link to={'forget-password'} className='text-[#252525] text-[12px] font-medium underline'>
                                Forget Password ?
                            </Link>

                            <button className='w-full h-[45px] mt-[16px] text-center rounded-[8px] text-white bg-[#45B8EA]' style={{ backdropFilter: 'blur(12.343469619750977px)' }}>
                                Log in
                            </button>


                            <div className="flex items-center mt-[8px]">
                                <Checkbox inputId='rememberMe' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                <label htmlFor="rememberMe" className="ml-2 cursor-pointer text-[#252525]">Remember me</label>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
