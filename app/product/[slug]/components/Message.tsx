import { Alert, AlertTitle, Modal } from "@mui/material";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import MuiModal from "@mui/material/Modal";
import Link from "next/link";
import ScrollTop from "@/app/utilts/helpers/ScrollTop";



const Message = ({ message , showMsg ,  setShowMsg}:{message:string ,showMsg:boolean ,setShowMsg : React.Dispatch<React.SetStateAction<boolean>> }) => {

  const handleClose = () => {
    setShowMsg(false);
  };

  return (
    <Modal
    open={showMsg}
    onClose={handleClose}
    className="flex justify-center items-center"
    >
    <div className="message">
      <Alert severity="info" >
        <AlertTitle className="flex items-center justify-between">
          Info
        <RxCross1 className="!h-4 !w-4  cursor-pointer space-y-2 " onClick={handleClose}/>
        </AlertTitle>
         {message} — <strong><Link onLoadStart={ScrollTop}  href='/auth/signin'>Login</Link></strong>
      </Alert>
    </div>
    </Modal>

  );
};

export default Message;