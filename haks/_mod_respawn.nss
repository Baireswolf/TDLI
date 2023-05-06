//::///////////////////////////////////////////////
//:: Generic On Pressed Respawn Button
//:: Copyright (c) 2001 Bioware Corp.
//:://////////////////////////////////////////////
/*
// * June 1: moved RestoreEffects into plot include
*/
//:://////////////////////////////////////////////
//:: Created By:   Brent
//:: Created On:   November
//:://////////////////////////////////////////////
#include "nw_i0_plot"
#include "x0_i0_position"

// * Applies an XP and GP penalty
// * to the player respawning
void ApplyPenalty(object oDead)
{
    // - XP PENALTY
    int nXP = GetXP(oDead);
    int nPenalty = 50 * GetHitDice(oDead);
    int nHD = GetHitDice(oDead);
    // * You can not lose a level with this respawning if your XP < 3000
    //int nMin = ((nHD * (nHD - 1)) / 2) * 1000;
    int nNewXP = nXP - nPenalty;
    if (nNewXP < 3000)
       nNewXP = 3000;
    SetXP(oDead, nNewXP);
    DelayCommand(4.0, FloatingTextStringOnCreature ("You have lost " + IntToString (nXP - nNewXP) + "XP.", oDead, FALSE));
    SetCampaignInt ("DB_TDLI","PC_Xp",GetXP(oDead),oDead);
    // - GP PENALTY
    int nGoldToTake =    FloatToInt(0.10 * GetGold(oDead));
    // * a cap of 10 000gp taken from you
    if (nGoldToTake > 10000)
    {
        nGoldToTake = 10000;
    }
    AssignCommand(oDead, TakeGoldFromCreature(nGoldToTake, oDead, TRUE));
    DelayCommand(4.4, FloatingTextStringOnCreature ("You have lost " + IntToString (nGoldToTake) + "Gold.", oDead, FALSE));
    SetCampaignInt ("DB_TDLI","PC_Gold",GetGold(oDead),oDead);
    // - ITEM PENALTY
    // drop items
    int i_slot;
    object oItemToDrop;
    float fDirPC = GetFacing(oDead);
    location lLocItem = GenerateNewLocation(oDead, DISTANCE_TINY, GetOppositeDirection(fDirPC),fDirPC);
    for (i_slot = 0; i_slot < 14; i_slot++) {
        oItemToDrop = GetItemInSlot(i_slot,oDead);
        if (i_slot == 4) {
            lLocItem = GenerateNewLocation(oDead, DISTANCE_TINY, GetHalfRightDirection(fDirPC),fDirPC);
        };
        if (i_slot == 5) {
            lLocItem = GenerateNewLocation(oDead, DISTANCE_TINY, GetHalfLeftDirection(fDirPC),fDirPC);
        };
        if (Random (5) == 0) {
            AssignCommand(oDead, ActionUnequipItem(oItemToDrop));
            CopyObject(oItemToDrop,lLocItem);
            DestroyObject(oItemToDrop);
        };
    };
    ExportSingleCharacter (oDead);
}

///////////////////////////////////////////////////////////////////////
// this function resets variabls and clears the arenas in the fighter
// 'gauntlet' subplot in chapter one
///////////////////////////////////////////////////////////////////////

void ClearArena(object oPC,string sArena)
{
    if(sArena == "Map_M1S4C")
    {
        DestroyObject(GetObjectByTag("M1S04CHRUSK02"));
        DestroyObject(GetObjectByTag("M1S4CBeast"));
        SetLocalInt(GetObjectByTag(sArena),"NW_A_M1S4HruskDef",0);
    }
    else if(sArena == "Map_M1S4D")
    {
        DestroyObject(GetObjectByTag("M1S04CFASHI02"));
        DestroyObject(GetObjectByTag("M1S4DBeast"));
        SetLocalInt(GetObjectByTag(sArena),"NW_A_M1S4FashiDef",0);
        CreateItemOnObject("M1S04IBADGELVL01",oPC);
    }
    else if(sArena == "Map_M1S4E")
    {
        DestroyObject(GetObjectByTag("M1S04CAGAR02"));
        DestroyObject(GetObjectByTag("M1S4EBeast"));
        SetLocalInt(GetObjectByTag(sArena),"NW_A_M1S4AgarDef",0);
        CreateItemOnObject("M1S04IBADGELVL02",oPC);
    }
    else if(sArena == "Map_M1S4F")
    {
        DestroyObject(GetObjectByTag("M1S04CCLAUDUS02"));
        DestroyObject(GetObjectByTag("M1S4FBeast",0));
        DestroyObject(GetObjectByTag("M1S4FBeast",1));
        SetLocalInt(GetObjectByTag(sArena),"NW_A_M1S4ClaudusDef",0);
        CreateItemOnObject("M1S04IBADGELVL03",oPC);
    }
    SetLocalInt(oPC,"NW_L_M1S4Won",FALSE);
    SetLocalInt(GetModule(),"NW_G_" + sArena + "_Occupied",FALSE);
}

//////////////////////////////////////////////////////////////////////////////


void main()
{
    object oRespawner = GetLastRespawnButtonPresser();
//  string sArea = GetTag(GetArea(oRespawner));
    // - GET IF HAS HENCHMEN
    int nPChen = 1;
    int iPChashen = FALSE;
    object oPChen = GetHenchman (oRespawner, nPChen);
    while (oPChen != OBJECT_INVALID)
    {
        iPChashen = TRUE;
        nPChen++;
    }
    // - PC Has Hench?
    if (iPChashen)
    {
        object oEnemy = GetNearestCreature(
            CREATURE_TYPE_IS_ALIVE, TRUE, oRespawner, 1,
            CREATURE_TYPE_REPUTATION, REPUTATION_TYPE_ENEMY
        );
    // - Yes, but enemy close >> Can't Respawn, must wait
        if(GetObjectSeen(oRespawner, oEnemy)) {
            FloatingTextStringOnCreature ("Your companions can't raise you. There are enemies nearby.", oRespawner, FALSE);
    // - Yes >> Can Respawn
        } else {
            SetCampaignInt ("DB_TDLI","PC_IS_DEAD",0,oRespawner);
            ApplyEffectToObject(DURATION_TYPE_INSTANT,EffectResurrection(),oRespawner);
            RemoveEffects(oRespawner);
            FloatingTextStringOnCreature ("You have been raised by your companions", oRespawner, FALSE);
        }
    // - No, PC is alone >> Go to temple
    } else {
        SetCampaignInt ("DB_TDLI","PC_IS_DEAD",0,oRespawner);

        string RespawnAREA = GetCampaignString ("db_tdli", "ResuAREA", oRespawner);
        location RespawnLOC = GetCampaignLocation ("db_tdli", "ResuLOC", oRespawner);
        vector RespawnPOS = GetPositionFromLocation (RespawnLOC);
        float RespawnFACE = GetFacingFromLocation (RespawnLOC);
        RespawnLOC = Location (GetObjectByTag (RespawnAREA),RespawnPOS,RespawnFACE);
        AssignCommand(oRespawner, ClearAllActions());

        if (GetObjectByTag (RespawnAREA) != OBJECT_INVALID) {
//            AssignCommand(oPC, ActionJumpToLocation(GetLocation (GetWaypointByTag (sRestWP))));
            AssignCommand(oRespawner, ActionJumpToLocation(RespawnLOC));
        }

        ApplyPenalty(oRespawner);

        SetCampaignString ("db_tdli", "RespawnAREA", RespawnAREA, oRespawner);
        SetCampaignLocation ("db_tdli", "RespawnLOC", RespawnLOC, oRespawner);

        string sResuSMS = "You have been raised back to life at: "
                            + GetName(GetArea(GetObjectByTag(RespawnAREA)));
        DelayCommand(3.6, FloatingTextStringOnCreature (sResuSMS, oRespawner, FALSE));

        ApplyEffectToObject(DURATION_TYPE_INSTANT,EffectResurrection(),oRespawner);
        ApplyEffectToObject(DURATION_TYPE_INSTANT,EffectHeal(GetMaxHitPoints(oRespawner)), oRespawner);
        RemoveEffects(oRespawner);
    }
}
/*


    /*
      CHAPTER 1 SPECIAL CASE

    if (sArea == "MAP_M1S3B")
    {
        sDestTag = "M1_WIZSPAWN";
    }
    else
    if (sArea == "Map_M1S4E" || sArea == "Map_M1S4C" || sArea == "Map_M1S4D" || sArea == "Map_M1S4F")
    {
        sDestTag = "M1_FIGSPAWN";
        ClearArena(oRespawner,sArea);
    }
    else
    /*
      CHAPTER 2 SPECIAL CASE
    */
/*
    if (sArea == "MAP_M2Q2F2" && GetDistanceBetweenLocations(GetLocation(GetObjectByTag("M2Q2F2_M2Q2G")), GetLocation(oRespawner)) < 5.0 && GetLocalInt(GetModule(),"NW_M2Q2E_WoodsFreed") == 0)
    {

      sDestTag = "WP_M2Q2GtoM2Q2F";
    }
    else

    // * Druid Match
    if (sArea == "MAP_M2Q2E2")
    {
      sDestTag = "WP_M2Q2E_ENDDCC";
      DestroyObject(GetObjectByTag("M2Q2EWELCARFT"));
      DestroyObject(GetObjectByTag("M2Q2EHENNAFT"));
      DestroyObject(GetObjectByTag("M2Q2EJANKENFT"));
      DestroyObject(GetObjectByTag("M2Q2EELGARFT"));
      // * June 2002: Destroy pets as well
      DestroyObject(GetObjectByTag("M2Q2EWELCARFTPET"));
        DestroyObject(GetObjectByTag("M2Q2EHENNAFTPET"));
        DestroyObject(GetObjectByTag("M2Q2EJANKENFTPET"));
        DestroyObject(GetObjectByTag("M2Q2EELGARFTPET"));


      SetLocalInt(GetObjectByTag("M2Q2EJAER"),"NW_M2Q2E_LFIGHT",FALSE);
    }

//       CHAPTER 3 SPECIAL CASE


    else
    // * time travel dungeon past - Dungeon
    if (sArea == "M3Q2G")
    {
        sDestTag = "WP_ALTERNATE_SPWN";
    }
    // * time travel dungeon past - Grove
    else
    if (sArea == "M3Q2I")
    {
        sDestTag = "WP_ALTERNATE_SPWN";
    }
    if (GetIsObjectValid(GetObjectByTag(sDestTag)))
    {

        if (sDestTag == "NW_DEATH_TEMPLE")
        {
            object oPriest = GetObjectByTag("NW_DEATH_CLERIC");
            //SetLocalInt(oPriest, "NW_L_SAYONELINER", 10);

            //AssignCommand(oPriest, DelayCommand(3.0,ActionStartConversation(oRespawner)));
            AssignCommand(oPriest, DelayCommand(2.1, PlayVoiceChat(VOICE_CHAT_TALKTOME, oPriest)));

            SetLocalLocation(oRespawner, "NW_L_I_DIED_HERE", GetLocation(GetLastRespawnButtonPresser()));
            SetLocalInt(oRespawner, "NW_L_I_DIED", 1);
            SetLocalObject(oPriest, "NW_L_LASTDIED", GetLastRespawnButtonPresser());
            // * April 2002: Moved penalty here, only when going back to the death temple
            ApplyPenalty(oRespawner);
        }
        object oSpawnPoint = GetObjectByTag(sDestTag);
        AssignCommand(oRespawner,JumpToLocation(GetLocation(oSpawnPoint)));
        // * mak
    }
    else
    {
        // * do nothing, just 'res where you are.
    }
 }

