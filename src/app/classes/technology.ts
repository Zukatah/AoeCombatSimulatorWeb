export class Technology
{
	public name: string;
	public accessibleFromAge: number; // age values defined in aoeData.ts
	public imagePath: string;


	public constructor(name: string, age: number, imagePath: string)
	{
		this.name = name;
		this.accessibleFromAge = age;
		this.imagePath = imagePath;
	}
}