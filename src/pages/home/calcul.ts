//import { HomePage } from 'home'
export module Calcul{
export class Calcul{
	public value1:number;
	public value2:number;
	public found:boolean;
	//public home:HomePage;

	conversion(vv:any,c:string){
	if(vv.length==2){
		let val:number,val2:number,i:number;
		val=vv[0];
		val2=vv[1];
		for(i=0;i<vv[0].length;i++)
		{
			if(val[i]=='.')
			{
				this.value1=parseFloat(vv[0]);
				this.value2=parseFloat(vv[1]);
				this.found=true;
				break;
			}
		}
		if(!this.found)
		this.value1=parseInt(vv[0],10);
		if(!this.found)
		{
			for(i=0;i<vv[1].length;i++)
			{
				if(val2[i]=='.')
				{
					this.value2=parseFloat(vv[1]);
					this.value1=parseFloat(vv[0]);
					this.found=true;
					break;
				}
			}
		}
		
			if(!this.found)
		this.value2=parseInt(vv[1],10);
		this.found=false;
	}
	this.sum(this.value1,this.value2);
	}
	sum(value1:number,value2:number){
        //this.home.champs=value1+value2;
        console.log(value1+value2);
	}
}
}