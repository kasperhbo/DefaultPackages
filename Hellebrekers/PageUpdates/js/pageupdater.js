//Set default interval to 10 seconds

function StartUpdateLoop(interval)
{

    if (interval < 1000)
    {
        console.warn("The interval is set to less than 1 second, this is not allowed. The interval is set to 1 second.");
        interval = 1000;
    }

    this.interval = interval;
    UpdatePage();

    // Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(
    //     "OnUpdate",
    //     arguments,
    //     false,
    //     () => {
    //         // Invoking the AL trigger has completed, invoke
    //         // the AL trigger again in 10 seconds
    //         window.setTimeout(() => {
    //             console.log("Invoking AL trigger again");
    //             StartUpdatePageLoop();
    //         },
    //         interval);
    //     },
    //     () => { /* error handling and perhaps retrying */ });
}

function UpdatePage()
{
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(
        "OnUpdate",
        arguments,
        false,
        () => {
            // Invoking the AL trigger has completed, invoke
            // the AL trigger again in 10 seconds
            window.setTimeout(() => {
                console.log("Invoking AL trigger again");
                UpdatePage();
            },
            interval);
        },
        () => { /* error handling and perhaps retrying */ });
}