pageextension 50702 "Customer Card" extends "Customer Card"
{
    layout
    {
        addLast(content)
        {
            usercontrol(Border; BorderShineAddin)
            {
                applicationArea = all;
                trigger OnControlAddinReady()
                begin
                    CurrPage.Border.Setup();
                end;
            }
        }
    }
    actions
    {
        addfirst(processing)
        {
            action(Test)
            {
                Caption = 'Test';
                ApplicationArea = all;
                Promoted = true;
                PromotedCategory = Process;
                PromotedIsBig = true;
                PromotedOnly = true;
                ToolTip = 'Test';

                trigger OnAction()
                begin
                    CurrPage.Border.DoIt();
                end;
            }
        }
    }
}
