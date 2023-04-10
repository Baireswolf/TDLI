int StartingConditional()
{
    int iDBhas = FALSE;
    object oPC = GetPCSpeaker ();

	string sInitArea = GetCampaignString ("DB_TDLI", "ResuAREA", oPC);
	
	if (sInitArea != "") {iDBhas = TRUE;)

    return iDBhas;
}
