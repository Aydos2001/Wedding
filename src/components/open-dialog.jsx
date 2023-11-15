import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({open, handleOpen}) {

    return (
        <>
            <Dialog open={open} handler={handleOpen} size="lg" className="rounded-[5px]">
                <DialogHeader className="text-[18px] font-mont py-[10px]">Its a simple dialog.</DialogHeader>
                <DialogBody className="p-[10px] min-h-[60vh]">
                    <img className="object-cover" src="https://searchengineland.com/wp-content/seloads/2016/01/google_maps_android_driving_mode-376x600.png" alt="" />
                </DialogBody>
                <DialogFooter>
                    <Button variant="gradient" size="sm" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}