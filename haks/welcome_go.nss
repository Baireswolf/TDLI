void main()
{
    object oPC = GetPCSpeaker();
	string RespawnAREA = GetCampaignString ("db_tdli", "ResuAREA", oPC);
	location RespawnLOC = GetCampaignLocation ("db_tdli", "ResuLOC", oPC);
	vector RespawnPOS = GetPositionFromLocation (RespawnLOC);
	float RespawnFACE = GetFacingFromLocation (RespawnLOC);
	RespawnLOC = Location (GetObjectByTag (RespawnAREA),RespawnPOS,RespawnFACE);
	AssignCommand(oPC, ClearAllActions());
	AssignCommand(oPC, ActionJumpToLocation(RespawnLOC));
}
