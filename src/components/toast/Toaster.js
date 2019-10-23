import { toast } from 'react-toastify';

export default {
    success: (msg) => {
        return toast(msg, {
            position: toast.POSITION.TOP_CENTER,
            type: 'success',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    },

    error: (msg) => {
        return toast(msg, {
            position: toast.POSITION.TOP_CENTER,
            type: 'error',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        }); 
    }
}