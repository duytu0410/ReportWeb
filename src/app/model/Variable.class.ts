export class Variable{
 
    public manhomsp:string;
    public tennhomsp:string;
    public nam:number;
    public hovaten:string;
    public machinhanh:Array<string>;
    public thang:Array<number>;
    public hethong:Array<string>;
    public macuahang:Array<string>;
    public kenhbanhang:Array<string>;
    public manhom:Array<string>;
    public manhanvien:Array<string>;
    public tieude:string;
    constructor(
            nam?:number,
            tieude?:string,
            manhomsp?:string,
            tennhomsp?:string,
        
            machinhanh?:Array<string>,
            thang?:Array<number>,
            hethong?:Array<string>,
            macuahang?:Array<string>,
            kenhbanhang?:Array<string>,
            manhom?:Array<string>,
            manhanvien?:Array<string>,
            hovaten?:string,
            ){
                manhomsp=this.manhomsp;
                tennhomsp=this.tennhomsp;
                tieude=this.tieude;
                nam=this.nam;
                machinhanh=this.machinhanh;
                thang=this.thang;
                hethong=this.hethong;
                macuahang=this.macuahang;
                kenhbanhang=this.kenhbanhang;
                manhom=this.manhom;
                manhanvien=this.manhanvien;
                hovaten=this.hovaten;
    }
}