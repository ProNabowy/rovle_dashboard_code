import { SwalControlar } from '../assets/utils/utils';
import Auth from './Auth'
import Get from './Get/Get'
import Delete from './Delete/Delete'
import Update from './Update/Update'
import Store from './Store/Store'

const swal = new SwalControlar();
export {
    swal,
    Auth,
    Get,
    Update,
    Delete,
    Store,
}
