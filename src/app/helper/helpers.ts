
export module Helpers {
	
	export function calculatePointsOfCivUnitType(combatResultsArray: number[]): number {
		let points: number = 0;
		for (let i: number = 0; i < combatResultsArray.length; i++){
			if (combatResultsArray[i] > 4.0){
				points += 8;
			} else if (combatResultsArray[i] > 2.0){
				points += 7;
			} else if (combatResultsArray[i] > 1.6){
				points += 6;
			} else if (combatResultsArray[i] > 1.25){
				points += 5;
			} else if (combatResultsArray[i] >= 0.8){
				points += 4;
			} else if (combatResultsArray[i] >= 0.625){
				points += 3;
			} else if (combatResultsArray[i] >= 0.5){
				points += 2;
			} else if (combatResultsArray[i] >= 0.25){
				points += 1;
			}//else => no points
		}
		return points;
	}
	
}