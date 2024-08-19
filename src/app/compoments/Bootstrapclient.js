"use client"

import { useEffect } from "react";


function Bootstrapclient() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);


}

export default Bootstrapclient