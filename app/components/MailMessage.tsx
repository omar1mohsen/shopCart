import * as React from "react";
import { Alert, AlertTitle, Slide } from "@mui/material";


export default function MailMessage({display }: {display : string}) {

  return (
    <Slide direction="left" in={display === "null" ? true : false } mountOnEnter unmountOnExit>
          <Alert
            severity="success"
            className={`w-fit px-12 fixed bottom-3 right-0 md:right-5 z-50 ${display}`}
          >
        
            <div className="time-bar absolute top-0 left-0 w-full h-2 rounded-2xl bg-green-500 shadow-[-1px_9px_17px_4px] shadow-green-400/70"></div>
            <h3 className="capitalize">This is a success message — Mail has been sent</h3> 
          </Alert>
        </Slide>
  );
}
