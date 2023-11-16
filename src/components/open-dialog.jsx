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
                <DialogHeader className="pt-[15px] justify-center flex-col">
                    <p className="text-[16px] md:text-[15px] lg:text-[20px] font-spectral font-bold text-[#3a315d]t">Ma'ka'n jayimiz</p>
                </DialogHeader>
                <DialogBody className="px-[10px] py-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.8520909454235!2d59.61169705332601!3d42.46160794982637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b5158c4eab7%3A0xc31c1270105980d3!2sSultan%20Saray!5e0!3m2!1sen!2s!4v1700116749578!5m2!1sen!2s" width="100%" className="max-h-[50vh] min-h-[50vh] border-[2px] rounded-sm" loading="lazy"></iframe>
                </DialogBody>
                <DialogFooter>
                    <Button variant="filled" className="border-none outline-none rounded-sm text-[15px] px-[20px]" size="sm" color="teal" onClick={handleOpen}>
                        <span>OK</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}