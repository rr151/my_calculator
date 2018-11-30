import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public champs:any;
public value1:number=null;
public value2:number=null;
public found:boolean=false;
  constructor(public navCtrl: NavController ) {
  	
  }
add(value){
	if(typeof this.champs!=='undefined'){
		var v=this.champs;
		this.champs=v+''+value;
	}
	else{
		this.champs=value;
	}
	
}
signe(signe:String){
	var v:any=this.champs;
	if(typeof this.champs!=='undefined'){
		let i:number;
		let c:string;
		c='';
		i=0;v=this.champs.toString()
		//document.getElementById("t").innerHTML=v.length+""+this.champs;
		while(i!=v.length){
			
			c=this.champs[i];
			if(c=='+'||c=='-' ||c=='/'||c=='*'){
				//his.found=true;
				break;
			}	
			i++
		}
		let vv=v.split(c);
		document.getElementById("t").innerHTML=v[v.length-1];
		if(vv.length==2)
		this.equal();
		if(v[v.length-1]!='+'&&v[v.length-1]!='-'&&v[v.length-1]!='*'&&v[v.length-1]!='/'){
			this.champs=this.champs+signe;
		}
	}
}

equal(){
	let v:string=this.champs;
	if(typeof this.champs!=='undefined'){
		
		let i:number;
		let c:string;
		c='';
		i=0;
		while(i!=this.champs.length){
			c=this.champs[i];
			if(c=='+'||c=='-' ||c=='/'||c=='*'){
				//this.foundS=true;
				break;
			}			
			i++
		}
		i=0;
		let vv=this.champs.split(c);
		if(vv.length==2){
			let val:number;
			let val2:number;
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
		switch (c){
		case '+':
		this.champs=this.value1+this.value2;
		//document.getElementById("t").innerHTML=this.champs;
		break;
		case '*':
		this.champs=this.value1*this.value2;
		break;
		case '-':
		this.champs=this.value1-this.value2;
		break;
		case '/':
		this.champs=this.value1/this.value2;
		break;
		}
		}
		
	}
	
}
back(){
	if(typeof this.champs!=='undefined'){
		let v:string=this.champs.toString();
		let new_v=v.slice(0,v.length-1);
		this.champs=new_v;
		document.getElementById("t").innerHTML=typeof v+" "+v.length;

		}
}
}
