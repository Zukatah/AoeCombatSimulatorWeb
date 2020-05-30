
export class Color{

	public r: number;
	public g: number;
	public b: number;

	constructor(r: number, g: number, b: number){
		this.r = Math.round(Math.min(Math.max(r, 0), 255));
		this.g = Math.round(Math.min(Math.max(g, 0), 255));
		this.b = Math.round(Math.min(Math.max(b, 0), 255));
	}

	public GetAsArray(): number[]{
		return [this.r, this.g, this.b];
	}

	public GetAsHex(): string{
		return "#" + (this.r == 0 ? "00" : this.r.toString(16)) + (this.g == 0 ? "00" : this.g.toString(16)) + (this.b == 0 ? "00" : this.b.toString(16));
	}
}