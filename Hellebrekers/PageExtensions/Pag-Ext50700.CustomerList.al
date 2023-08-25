pageextension 50700 "Customer List" extends "Customer List"
{
    layout
    {

        addfirst(content)
        {
            group(General)
            {
                Caption = 'General';
                usercontrol(PageUpdater; PageUpdaterControlAddin)
                {
                    trigger OnControlAddInReady();
                    begin
                        CurrPage.PageUpdater.StartUpdateLoop(2000);
                    end;

                    trigger OnUpdate()
                    begin
                        CurrPage.Update;
                    end;

                }
            }
        }
    }
}
