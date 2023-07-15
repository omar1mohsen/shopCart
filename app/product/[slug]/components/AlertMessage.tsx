
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Btn from '@/app/components/Btn';
const style = {
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 35,
  p: 4,
};


export default function AlertMessage({open , setOpen} : {open : boolean, setOpen : React.Dispatch<React.SetStateAction<boolean>>}) {
  const handleClose = () => {
    setOpen(false);
  }

  return (
    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='flex justify-center items-center'
      >
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>                 
        <Box sx={style} className="rounded-lg py-10 bg-success-100 px-6  text-base relative overflow-hidden">
          <div className="time-bar absolute top-0 left-0 w-full h-2 rounded-2xl bg-green-500 shadow-[-1px_9px_17px_4px] shadow-green-400/70"></div>
          <CheckCircleIcon className='!w-[40%] !h-[40%] !mx-auto text-[var(--sec-color)] mb-5 !block' />
          <p className='text-xl text-center font-semibold text-[var(--main-color)] capitalize'>your order has <br /> been added sucessfully</p>
          <Btn content='continue shopping' className=' mx-auto my-5' handleClose={handleClose} />
        </Box>
    </Slide>
      </Modal>
  );
}