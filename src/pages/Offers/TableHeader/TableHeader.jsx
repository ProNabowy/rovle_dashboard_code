import React, { Fragment, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import OfferListTable from "../OffersListTable/OfferListTable";


export default function TableHeader({ ingredients, setIngredients, data, columns }) {

    const [dialogVisible, setDialogVisible] = useState(false);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);

    }

    return (
        <Fragment>

            <Dialog header="Roasters Form"
                headerClassName='black-text'
                visible={dialogVisible}
                style={{ width: '75vw' }}
                maximizable={true}
                maximized={true}
                modal
                className="bg-white"
                contentClassName="!mt-3"
                contentStyle={{ height: '300px' }}
                onHide={() => setDialogVisible(false)}
                footer={dialogFooterTemplate}>

                <OfferListTable data={data} countOfEntries={13} columns={columns} />

            </Dialog>

            <div className='flex items-start sm:items-center justify-between flex-wrap gap-3 px-3 sm:px-10 mb-5'>

                <div className="flex flex-wrap justify-content-center gap-5">
                    <div className="flex items-center">
                        <Checkbox inputId="All" name={0} value={0} onChange={onIngredientsChange} checked={ingredients.includes(0)} />
                        <label htmlFor="All" className="ml-2 !mb-0">Todo</label>
                    </div>
                    <div className="flex items-center">
                        <Checkbox inputId="level_1" name={1} value={1} onChange={onIngredientsChange} checked={ingredients.includes(1)} />
                        <label htmlFor="level_1" className="ml-2 !mb-0">Nivel 1</label>
                    </div>
                    <div className="flex items-center">
                        <Checkbox inputId="level_2" name={2} value={2} onChange={onIngredientsChange} checked={ingredients.includes(2)} />
                        <label htmlFor="level_2" className="ml-2 !mb-0">Nivel 2</label>
                    </div>
                    <div className="flex items-center">
                        <Checkbox inputId="level_3" name={3} value={3} onChange={onIngredientsChange} checked={ingredients.includes(3)} />
                        <label htmlFor="level_3" className="ml-2 !mb-0">Nivel 3</label>
                    </div>
                </div>

                <div onClick={() => setDialogVisible(true)} className='flex items-center text-nowrap cursor-pointer  text-[#45B8EA]'>

                    <h3 className='font-medium me-5'>Mostrar todo</h3>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M22 1V7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8C20.7348 8 20.4804 7.89464 20.2929 7.70711C20.1054 7.51957 20 7.26522 20 7V3.41375L14.7075 8.7075C14.5199 8.89514 14.2654 9.00056 14 9.00056C13.7346 9.00056 13.4801 8.89514 13.2925 8.7075C13.1049 8.51986 12.9994 8.26536 12.9994 8C12.9994 7.73464 13.1049 7.48014 13.2925 7.2925L18.5863 2H15C14.7348 2 14.4804 1.89464 14.2929 1.70711C14.1054 1.51957 14 1.26522 14 1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0H21C21.2652 0 21.5196 0.105357 21.7071 0.292893C21.8946 0.48043 22 0.734784 22 1ZM7.2925 13.2925L2 18.5863V15C2 14.7348 1.89464 14.4804 1.70711 14.2929C1.51957 14.1054 1.26522 14 1 14C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15V21C0 21.2652 0.105357 21.5196 0.292893 21.7071C0.48043 21.8946 0.734784 22 1 22H7C7.26522 22 7.51957 21.8946 7.70711 21.7071C7.89464 21.5196 8 21.2652 8 21C8 20.7348 7.89464 20.4804 7.70711 20.2929C7.51957 20.1054 7.26522 20 7 20H3.41375L8.7075 14.7075C8.89514 14.5199 9.00056 14.2654 9.00056 14C9.00056 13.7346 8.89514 13.4801 8.7075 13.2925C8.51986 13.1049 8.26536 12.9994 8 12.9994C7.73464 12.9994 7.48014 13.1049 7.2925 13.2925ZM21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V18.5863L14.7075 13.2925C14.5199 13.1049 14.2654 12.9994 14 12.9994C13.7346 12.9994 13.4801 13.1049 13.2925 13.2925C13.1049 13.4801 12.9994 13.7346 12.9994 14C12.9994 14.2654 13.1049 14.5199 13.2925 14.7075L18.5863 20H15C14.7348 20 14.4804 20.1054 14.2929 20.2929C14.1054 20.4804 14 20.7348 14 21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM3.41375 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8C1.26522 8 1.51957 7.89464 1.70711 7.70711C1.89464 7.51957 2 7.26522 2 7V3.41375L7.2925 8.7075C7.48014 8.89514 7.73464 9.00056 8 9.00056C8.26536 9.00056 8.51986 8.89514 8.7075 8.7075C8.89514 8.51986 9.00056 8.26536 9.00056 8C9.00056 7.73464 8.89514 7.48014 8.7075 7.2925L3.41375 2Z" fill="#45B8EA" />
                    </svg>

                </div>

            </div>



        </Fragment>
    )
}
