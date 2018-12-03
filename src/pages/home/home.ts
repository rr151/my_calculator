import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import { Calcul } from './calcul'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public champs:any;
public value1:number=null;
public value2:number=null;
public found:boolean=false;
public error:boolean=false;

constructor(public navCtrl: NavController,public toastCtrl: ToastController ) {
  	
  }
puts(value){
	if(typeof this.champs!=='undefined'){
		if(this.champs=="Cannot divide by zero" || this.champs=="Result is undefined" || this.champs=="Error format not supported")
		{
			this.champs=value;
			this.error=false;
		}
		else
		{
			var v=this.champs;
			this.champs=v+''+value;	
		}
			
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
		i=0;
		v=this.champs.toString()
		
		this.equal();
		if(v[v.length-1]!='+'&&v[v.length-1]!='-'&&v[v.length-1]!='*'&&v[v.length-1]!='/'&& v.length!=0){
			if(this.error==false)
			this.champs=this.champs+signe;
		}
	}
}

equal(){
	if(typeof this.champs.length!=='undefined'){
		
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
		if(vv.length==2)
		this.convert(vv,c);
		}
		
	}
	

clearOne(){
	if(typeof this.champs!=='undefined'){
		let v:string=this.champs.toString();
		let new_v=v.slice(0,v.length-1);
		this.champs=new_v;
		
		}
}
clearAll(){
	this.champs='';
}

convert(vv:any,c:string){
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
	switch(c){
		case '+':
			this.sum(this.value1,this.value2);
		break;
		case '-':
			this.subtraction(this.value1,this.value2);
		break;
		case '*':
			this.multiplication(this.value1,this.value2);
		break;
		case '/':
			this.division(this.value1,this.value2);
		break;
	}
	
	}
sum(value1:number,value2:number){
        this.champs=value1+value2;
        //console.log(value1+value2);
	}

subtraction(value1:number,value2:number){
       this.champs=value1-value2;
       //console.log(value1+value2);
}
multiplication(value1:number,value2:number){
	this.champs=value1*value2;
	//console.log(value1+value2);
}
division(value1:number,value2:number){
	if(value2!=0)
	this.champs=value1/value2;
	else if(value1==0&&value2==0)
	{
		this.champs="Result is undefined";
		this.error=true;
	}
	else
	{
		this.champs="Cannot divide by zero";
		this.error=true;
	}
	//console.log(value1+value2);
}
special(s:string){
	let i:number,val:number;
	let sfound:boolean=false;
	let found:boolean=false;
	if(typeof this.champs!=="undefined" )
	{
	for(i=0;i<this.champs.length;i++)
		{
			if(this.champs[i]=='+'|| this.champs[i]=='-' ||this.champs[i]=='*' ||this.champs[i]=='/')
			{
				found=true;
				break;
			}
		}
	if(!found && this.champs!=='Error format not supported')
	{
		for(i=0;i<this.champs.length;i++)
			{
				if(this.champs[i]=='.')
				{
				//	val=parseFloat(this.champs);
					sfound=true;
					break;
				}
			}
			if(!sfound)
			{val=parseInt(this.champs,10);}
			if(s=="√")
			{this.champs=Math.sqrt(val)}
			else
			this.champs=val*val;
			sfound=false;
	}
	else
	{
		this.champs="Error format not supported";
		this.error=true;
	}
}

}
presentToast() {
    const toast = this.toastCtrl.create({
      message: "The programming of this function is not end,sorry",
      duration: 5000
    });
    toast.present();
  }
}
