void main()
{
    object oPC = GetPCSpeaker();
    string sInitWP = GetScriptParam ("InitWP");
	location sInitLoc = GetLocation (GetObjectByTag (sInitWP));
	string sInitArea = GetTag ( GetArea (GetObjectByTag (sInitWP)));

	SetCampaignString ("DB_TDLI", "ResuAREA", sInitArea, oPC);
	SetCampaignLocation ("DB_TDLI", "ResuLOC", sInitLoc, oPC);

}
