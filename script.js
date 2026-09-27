const channelID = " 3510953";

async function getData() {

    try {

        const response = await fetch(
            `https://api.thingspeak.com/channels/${channelID}/feeds/last.json`
        );

        const data = await response.json();

        document.getElementById("distance").textContent =
            data.field1 + " cm";

        document.getElementById("displacement").textContent =
            data.field2 + " cm";

        document.getElementById("tilt").textContent =
            data.field3 + "°";

        document.getElementById("rate").textContent =
            data.field4 + " cm/min";

        document.getElementById("risk").textContent =
            data.field5;

        document.getElementById("time").textContent =
            data.field6 + " min";

        document.getElementById("status").textContent =
            "Live data connected";

    }

    catch (error) {

        document.getElementById("status").textContent =
            "Unable to connect to sensor data";

        console.log(error);
    }
}

getData();

setInterval(getData, 15000);