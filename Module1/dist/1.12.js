"use strict";
{
    //nullable Types//unknown type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There si nothing to search");
        }
    };
    searchName(null);
    //  Unknown Type :
    const getConvertSpeedMeterPerSecond = (message) => {
        if (typeof message === "number") {
            const speed = (message * 1000) / 3600;
            console.log(`${speed} km^sec`);
        }
        else if (typeof message === "string") {
            let [result, unit] = message.split(" ");
            let speed = (parseFloat(result) * 1000) / 3600;
            console.log(`${speed} km^sec`);
        }
        else {
            console.log("Please Provide a correct value");
        }
    };
    getConvertSpeedMeterPerSecond(1000);
    getConvertSpeedMeterPerSecond("100 m^sec");
    function throwError(errorMsg) {
        throw new Error(errorMsg);
    }
    throw new Error("Your are unauthenticated user");
}
