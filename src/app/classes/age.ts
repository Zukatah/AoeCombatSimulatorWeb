export class Age
{
	public name: string;
	public index: number; // dark age is 0, feudal age is 1, castle age is 2, imperial age is 3
	public imagePath: string;


	public constructor(name: string, index: number, imagePath: string)
	{
		this.name = name;
		this.index = index;
		this.imagePath = imagePath;
	}
}