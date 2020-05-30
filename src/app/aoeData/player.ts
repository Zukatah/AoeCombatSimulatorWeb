import { UnitType } from "./../aoeData/unitType";
import { Color } from "./../helper/color";
import { AoECombatSimulatorComponent } from "./../aoeCombatSimulator/aoeCombatSimulator.component";
import { AoeData } from "./aoeData";

export class Player{
	public userInterface: AoECombatSimulatorComponent; // a reference to the user interface instance to which this player's gui elements will be added
	public sumWins: number = 0; // number of battle wins (actually win = 2 points, draw = 1 point)
	public attackAttacker: number = 0; // DEBUG purposes
	public attackRandomNearbyTarget: number = 0; // DEBUG purposes
	public regularHit: number = 0; // DEBUG purposes
	public missTotalMainTargetAlive: number = 0; // DEBUG purposes
	public missTotalMainTargetDead: number = 0; // DEBUG purposes
	public missMainTarget: number = 0; // DEBUG purposes
	public missSideTarget: number = 0; // DEBUG purposes
	public playerIndex: number; // currently either 0 (first player) or 1 (second player)

	public amountStartUnits: number[] = []; // contains the number of start units of each unit type; a list of all unit types can be found in the static AoeData.cs class
	public survivorsSumArmy: Map<UnitType, number>  = new Map<UnitType, number>(); // the sum of survivors of all battles by unit type
	public avgSurvivorsNumber: number[] = [];
	public avgSurvivorsPercent: number[] = [];
	public avgSurvivorsColor: Color[] = [];

	public resourcesInvested: number[] = [0, 0, 0]; // worth (food, wood, gold) of all starting units
	public resourcesInvestedTotal: number = 0;
	public resourcesLost: number[] = [0, 0, 0]; // worth (food, wood, gold) of all lost units
	public resourcesLostTotal: number = 0;
	public resourcesRemaining: number[] = [0, 0, 0]; // worth (food, wood, gold) of all surviving units
	public resourcesRemainingTotal: number = 0;
	public resourcesGenerated: number[] = [0, 0, 0]; // sum of all generated resources (currently only for Keshiks)
	public resourcesGeneratedTotal: number = 0;

	public populationInvested: number = 0;
	public populationLost: number = 0;
	public populationRemaining: number = 0;
	public populationGenerated: number = 0;

	public uts: UnitType[] = AoeData.unitTypesList;

	// Player GUI //
	public playerColor: Color;
	
	/*
	public numberOfAverageSurvivorsLabel: Label;
	public resourcesLostLabel: Label;
	public resourcesLostTextboxes: TextBox[] = [];
	public resourcesLostLabels: Label[] = [];
	public totalResourcesLostTextbox: TextBox;
	public sumWinsLabel: Label;
	public sumWinsTextbox: Textbox;
	public utNameLabel: Label[] = [];
	public enterAmountTextbox: Textbox[] = [];
	public avgSurvivorsTextbox: Textbox[] = [];
	*/

	public constructor(playerColor: Color, userInterface: AoECombatSimulatorComponent, playerIndex: number)
	{
		AoeData.unitTypesList.forEach(ut => {
			this.survivorsSumArmy.set(ut, 0);
			this.amountStartUnits.push(0);
			this.avgSurvivorsNumber.push(0);
			this.avgSurvivorsPercent.push(0);
			this.avgSurvivorsColor.push(new Color(128, 128, 128));
		});
		this.playerColor = playerColor;
		this.userInterface = userInterface;
		this.playerIndex = playerIndex;
		this.CreatePlayerUIElements();
	}

	public ResetData(): void
	{
		this.sumWins = 0;
		for (let i: number = 0; i < 3; i++)
		{
			//this.resourcesInvested[i] = 0;
			this.resourcesRemaining[i] = 0;
			this.resourcesGenerated[i] = 0;
		}
		this.attackAttacker = 0;
		this.attackRandomNearbyTarget = 0;
		AoeData.unitTypesList.forEach(ut => { this.survivorsSumArmy.set(ut, 0); });
	}

	public CreatePlayerUIElements(): void
	{
		/*
		this.resourcesLostLabel = new Label();
		this.resourcesLostLabel.Location = new Point(160 + 600 * this.playerIndex, 850);
		this.resourcesLostLabel.Text = "Resources lost";
		this.resourcesLostLabel.AutoSize = true;
		this.resourcesLostLabel.ForeColor = this.playerColor;
		this.userInterface.Controls.Add(this.resourcesLostLabel);

		for (let j: number = 0; j < 3; j++)
		{
			this.resourcesLostLabels[j] = new Label();
			this.resourcesLostLabels[j].Location = new Point(160 + 81 * j + 600 * this.playerIndex, 869);
			this.resourcesLostLabels[j].Size = new Size(80, 20);
			this.resourcesLostLabels[j].Image = AoeData.resourceImages[j];
			this.userInterface.Controls.Add(this.resourcesLostLabels[j]);
			this.resourcesLostTextboxes[j] = new TextBox();
			this.resourcesLostTextboxes[j].ReadOnly = true;
			this.resourcesLostTextboxes[j].Location = new Point(160 + 81 * j + 600 * this.playerIndex, 890);
			this.resourcesLostTextboxes[j].Size = new Size(80, 20);
			this.userInterface.Controls.Add(this.resourcesLostTextboxes[j]);
		}

		this.totalResourcesLostTextbox = new TextBox();
		this.totalResourcesLostTextbox.ReadOnly = true;
		this.totalResourcesLostTextbox.Location = new Point(160 + 600 * this.playerIndex, 911);
		this.totalResourcesLostTextbox.Size = new Size(242, 20);
		this.userInterface.Controls.Add(this.totalResourcesLostTextbox);

		this.sumWinsLabel = new Label();
		this.sumWinsLabel.Location = new Point(220 + 600 * this.playerIndex, 935);
		this.sumWinsLabel.Text = "#Wins Army " + (this.playerIndex + 1);
		this.sumWinsLabel.AutoSize = true;
		this.sumWinsLabel.ForeColor = this.playerColor;
		this.userInterface.Controls.Add(this.sumWinsLabel);
		this.sumWinsTextbox = new TextBox();
		this.sumWinsTextbox.ReadOnly = true;
		this.sumWinsTextbox.Location = new Point(220 + 600 * this.playerIndex, 950);
		this.sumWinsTextbox.Size = new Size(80, 20);
		this.userInterface.Controls.Add(this.sumWinsTextbox);
		*/
	}
}