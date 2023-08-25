controladdin PageUpdaterControlAddin
{
    StartupScript = 'Hellebrekers/PageUpdates/js/startup.js';
    Scripts = 'Hellebrekers/PageUpdates/js/pageupdater.js';

    RequestedHeight = 0;
    RequestedWidth = 0;


    event OnControlAddInReady();


    procedure StartUpdateLoop(interval: Integer);
    event OnUpdate();
}