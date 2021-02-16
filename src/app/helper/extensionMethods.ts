
export abstract class ExtensionMethods
{
	// static Random rnd = new Random(Environment.TickCount);

	public static Shuffle<T>(list: T[]): void // used to shuffle the start formations of the armies (of course melee and ranged units seperately)
	{
		let n: number = list.length;
		while (n > 1)
		{
			n--;
			let k: number = Math.floor(Math.random() * (n + 1));
			let value: T = list[k];
			list[k] = list[n];
			list[n] = value;
		}
	}
}