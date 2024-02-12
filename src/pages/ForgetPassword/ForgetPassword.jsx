import { useDataGetter } from './data';
import { FirstStep, SecondStep, ThiredStep } from './components';
import vector from '../../assets/images/login-vector.png'

export default function ForgetPassword() {

    const {
        setData,
        handelSubmit,
        activeIndex,
        setActiveIndex
    } = useDataGetter();

    return (
        <div className='login w-full h-[100vh] flex items-center justify-center'
            style={{ background: 'linear-gradient(90deg, rgba(216,225,252,1) 0%, rgba(191,203,241,1) 33%, rgba(176,195,255,1) 100%)' }}>

            <img src={vector} className='absolute right-0 bottom-0' />

            <div className='container flex justify-center items-center'>

                <div className='min-h-[450px] flex items-center justify-center'>

                    <div className='p-[32px] h-full rounded-[10px]' style={{ background: 'linear-gradient(120deg, rgba(241, 241, 241, 0.43) -45.57%, rgba(243, 243, 243, 0.00) 134.89%)', backdropFilter: 'blur(5px)', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)' }}>

                        {activeIndex === 0 ?
                            <FirstStep
                                handelSubmit={handelSubmit}
                                setData={setData}
                                setActiveIndex={setActiveIndex}
                            />
                            : null}
                        {activeIndex === 1 ?
                            <SecondStep
                                setActiveIndex={setActiveIndex}
                            /> : null}
                        {activeIndex === 2 ? <ThiredStep setActiveIndex={setActiveIndex} /> : null}


                        <div className='flex items-center justify-center mt-10'>

                            <div className={`w-[19px] h-[19px] rounded-full ${activeIndex === 0 ? "bg-[var(--primary-color)]" : "bg-white"} me-4`}>  </div>
                            <div className={`w-[19px] h-[19px] rounded-full ${activeIndex === 1 ? "bg-[var(--primary-color)]" : "bg-white"} me-4`}>  </div>
                            <div className={`w-[19px] h-[19px] rounded-full ${activeIndex === 2 ? "bg-[var(--primary-color)]" : "bg-white"} me-4`}>  </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
