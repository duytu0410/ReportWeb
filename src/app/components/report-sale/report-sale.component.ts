
import { Component, OnInit,OnDestroy } from '@angular/core';

import{Variable} from './../../model/Variable.class';
import { Http,RequestOptions,Headers} from '@angular/http';
import {Subscription} from 'rxjs';
import { Chart } from 'chart.js';
import{DataService} from './../../service/data.service'

@Component({
  selector: 'app-report-sale',
  templateUrl: './report-sale.component.html',
  styleUrls: ['./report-sale.component.css']
})
export class ReportSaleComponent implements OnInit,OnDestroy {
  chart0: any;
  chart1:any;
  chart2:any;
  chart3:any;
  
  constructor(public http:Http,public dataService:DataService) {
    
   }
  public API1:string='https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/GetAllNhomSp' //lấy nhóm sản phầm
  public API2:string='https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/nhanvien' // lấy nhân viên
  public API3:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/PlanRevenue/GetSumWithTitle";
  public API4:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSumWithTitle";
  public API5:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSpecificStoresWithTitle"//6,7
  public API6:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetCountedOrders";//get counted order
  public API7:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetCountedCustomers"
  public API8:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetTopTenProductsWithTitle"
  public API9:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSumGroupByChannel"
  public API10:string="https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetTopTenStoresWithTitle"
  public months:Array<number>=[1,2,3,4,5,6,7,8,9,10,11,12];
  public systems=["BENTONI","DOMINO","ELENTRANG"];
  public shop=["ELENTRANG","HÀNG BÔNG","KIM MÃ","CÁT LINH","CẦU GIẤY"];
  public kind=["Bán buôn","Bán lẻ","Online"];
  public types:Variable[]=[];
  public saler:Array<string>=["Nguyễn Minh 01","Nguyễn Minh 02","Nguyễn Minh 03","Nguyễn Minh 04","Nguyễn Minh 05","Nguyễn Minh 06",];
  public titles:Array<string>=["Số lượng bán","Doanh thu bán hàng","Chiết khấu","Giảm giá","Hàng trả lại","Tổng giảm trừ","Doanh thu thuần","Giá vốn","LN gộp"]
  public title:string;
  public titlee:string;
  sidebar:boolean=true;
  public body=new Variable();
  public body2=new Variable();
  public years:Array<number>=[2018,2019,2020]
  public year:number=2018
  public subscription:Subscription;
  public subscription2:Subscription;
  public planRevenue:number=0;
  public realRevenueold:number=0;
  public realRevenuenow:number=0;
  public elenatrang:number;
  public bentoni:number;
  public domino:number;
  public tiSo1:number;
  public tiSo2:number;
  public checkedAllNhomSP:boolean=false;
   public checkedAllMonth:boolean=false;
   public checkedAllChanel:boolean=false;
   public checkedAllShop:boolean=false;
   public checkedAllSystem:boolean=false;
   public checkedAllNV:boolean=false;
   checkAllMonth(){
     this.checkedAllMonth=!this.checkedAllMonth;
      this.body.thang=[]
      this.body2.thang=[]
   }
   checkAllNhomSP(){
    this.checkedAllNhomSP=!this.checkedAllNhomSP;
      this.body.manhom=[]
      this.body2.manhom=[]
   }
   checkAllShop(){
     this.checkedAllShop=!this.checkedAllShop
      this.body.macuahang=[]
      this.body2.macuahang=[]
   }
   checkAllChanel(){
    this.checkedAllChanel=!this.checkedAllChanel
     this.body.kenhbanhang=[]
     this.body2.kenhbanhang=[]
   }
   checkAllSystem(){
     this.checkedAllSystem=!this.checkedAllSystem
       this.body.hethong=[]
       this.body2.hethong=[]

   }
   checkAllNV(){
     this.checkedAllNV=!this.checkedAllNV
     this.body.manhanvien=[]
     this.body2.manhanvien=[]
   }
  
  // hàm xóa dấu tiếng viết
  removeAccents(str:string) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }
  // Hàm trị tuyệt đối
 

  // Hàm tính tỉ số
  
  // Hàm xử lí dữ liệu truyền từ filter
  handleYear(event){
    this.body.nam=Number(this.year)    
    this.body2.nam=Number(this.year)-1    
  }

  handleCN(event){
    if(event.target.checked){
     this.body.machinhanh.push(event.target.value);
     this.body2.machinhanh.push(event.target.value);
    }
    else{
      this.body.machinhanh.splice(this.body.machinhanh.indexOf(event.target.value), 1);
      this.body2.machinhanh.splice(this.body.machinhanh.indexOf(event.target.value), 1);
    }
  }
  handleMonth(event){
    if(event.target.checked){
      this.body.thang.push(Number(event.target.value))
      this.body2.thang.push(Number(event.target.value))
     }
     else{
      this.body.thang.splice(this.body.thang.indexOf(event.target.value), 1);
      this.body2.thang.splice(this.body.thang.indexOf(event.target.value), 1);
    }
  }
  handleSystem(event){
    if(event.target.checked){
      this.body.hethong.push(event.target.value)
      this.body2.hethong.push(event.target.value)
     }
     else{
      this.body.hethong.splice(this.body.hethong.indexOf(event.target.value), 1);
      this.body2.hethong.splice(this.body.hethong.indexOf(event.target.value), 1);
    }
  }
  handleShop(event){
    if(event.target.checked){
      this.body.macuahang.push(event.target.value)
      this.body2.macuahang.push(event.target.value)
     }
     else{
      this.body.macuahang.splice(this.body.macuahang.indexOf(event.target.value), 1);
      this.body2.macuahang.splice(this.body.macuahang.indexOf(event.target.value), 1);
    }
  }
  handleKind(event){
    if(event.target.checked){
      this.body.kenhbanhang.push(this.removeAccents(event.target.value))
      this.body2.kenhbanhang.push(this.removeAccents(event.target.value))
     }
     else{
      this.body.kenhbanhang.splice(this.body.kenhbanhang.indexOf( this.removeAccents(event.target.value)), 1);
      this.body2.kenhbanhang.splice(this.body.kenhbanhang.indexOf( this.removeAccents(event.target.value)), 1);
    }
  }
  handleMaNhom(event){
    if(event.target.checked){
      this.body.manhom.push(event.target.value)
      this.body2.manhom.push(event.target.value)
     
     }
     else{
      this.body.manhom.splice(this.body.manhom.indexOf(event.target.value), 1);
      this.body2.manhom.splice(this.body.manhom.indexOf(event.target.value), 1);
    
    }
  }
  handleTitle(event){
      this.body.tieude=this.removeAccents(this.title).replace(/\s+/g, '');//xóa khoảng trắng và chuyển thành chữ không dấu 
      this.body2.tieude=this.removeAccents(this.title).replace(/\s+/g, '');//xóa khoảng trắng và chuyển thành chữ không dấu 
      this.titlee=this.title.toUpperCase();
    }
   
  getApi(){
    this.getPlanRevenue();
    this.getRealRevenuenow();
    this.getRealRevenueOld()
    this.getSpecificStore2(this.API5,this.chart2)
    this.getSpecificStore3(this.API5,this.chart3)
    this.getCountedOrder(this.API6)
    this.getCountedCustomer(this.API7)
    this.get10Product(this.API8);
    this.getTopChanel(this.API9,0,this.body)
    this.getTopChanel(this.API9,1,this.body2)
    this.getTopStore(this.API10)
  }
 
  sideBar(){
    this.sidebar=!this.sidebar;
 
  }
  getPlanRevenue(){
    this.subscription=this.dataService.post(this.API3,this.body).subscribe(data=>{
      if(data.status==200){
        this.planRevenue=Number(JSON.parse(data._body))
      }
    })
  }
  getRealRevenueOld(){
    this.subscription=this.dataService.post(this.API4,this.body2).subscribe(data=>{
      if(data.status==200){
       this.realRevenueold=Number(JSON.parse(data._body));
       this.tiSo2=this.dataService.PS(this.realRevenuenow,Number(JSON.parse(data._body)))
       this.addData(1,this.chart1,"Thực tế năm ngoái",Number(JSON.parse(data._body)))
     }
     }); 
  }
  getRealRevenuenow(){
    this.subscription=this.dataService.post(this.API4,this.body).subscribe(data=>{
      if(data.status==200){
       this.realRevenuenow=Number(JSON.parse(data._body))
       this.tiSo1= this.dataService.PS(Number(JSON.parse(data._body)),this.planRevenue)
       this.addData(0,this.chart0,"Thực tế năm nay",Number(JSON.parse(data._body)));
       this.addData(0,this.chart1,"Thực tế năm nay",Number(JSON.parse(data._body)));
       this.addData(1,this.chart0,"Kế hoạch năm nay",this.planRevenue)
     }
     });
  }
  getSpecificStore2(url:string,chart){
   let bodyFake={}
    bodyFake['nam']=this.body.nam
    bodyFake['machinhanh']=this.body.machinhanh
    bodyFake['thang']=this.body.thang
    bodyFake['tieude']=this.body.tieude
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
          this.addData(i,chart,element.hethong,this.dataService.handlePercent(this.realRevenuenow,element.tong))
          this.hori[i].name=element.hethong
          this.hori[i].value=element.tong
          this.hori=[...this.hori]
        });
      }
    })
  }
  getSpecificStore3(url:string,chart){
   let bodyFake={}
    bodyFake['nam']=this.body2.nam
    bodyFake['machinhanh']=this.body2.machinhanh
    bodyFake['thang']=this.body2.thang
    bodyFake['tieude']=this.body2.tieude
  
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
          this.addData(i,chart,element.hethong,this.dataService.handlePercent(this.realRevenueold,element.tong))
          this.hori2[i].name=element.hethong
          this.hori2[i].value=element.tong
        this.hori2=[...this.hori2]
        });
      }
    })
  }
  getCountedOrder(url:string){
    let bodyFake={}
    bodyFake['nam']=this.body.nam
    bodyFake['machinhanh']=this.body.machinhanh
    bodyFake['hethong']=this.body.hethong
    bodyFake['kenhbanhang']=this.body.kenhbanhang
    bodyFake['macuahang']=this.body.macuahang
    bodyFake['manhom']=this.body.manhom
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
          lineChartSeries[0].series[i].value=element.counted
          this.lineChartSeries=lineChartSeries
        });
      }
    })
   
  }
  getCountedCustomer(url){
    let bodyFake={}

    bodyFake['nam']=this.body.nam
    bodyFake['machinhanh']=this.body.machinhanh
    bodyFake['hethong']=this.body.hethong
    bodyFake['kenhbanhang']=this.body.kenhbanhang
    bodyFake['macuahang']=this.body.macuahang
    bodyFake['manhom']=this.body.manhom
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
          let value={name:element.thang,
          value:element.counted}
          barChart[i].value=value.value;
          barChart=[...barChart]
          this.barChart=barChart
        });
      }
    })
  }
  get10Product(url:string){
    let bodyFake={}
    bodyFake['nam']=this.body.nam
    bodyFake['machinhanh']=this.body.machinhanh
    bodyFake['hethong']=this.body.hethong
    bodyFake['kenhbanhang']=this.body.kenhbanhang
    bodyFake['macuahang']=this.body.macuahang
    bodyFake['manhom']=this.body.manhom
    bodyFake['tieude']=this.body.tieude
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
         this.top10Product[i].name=element.tensanpham
         this.top10Product[i].value=element.tong
         this.top10Product=[...this.top10Product]
        });
      }
    })
  }
  getTopChanel(url:string,j:number,body:Variable){
    this.subscription=this.dataService.post(url,body).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
        this.topChanel[i].name=element.kenhbanhang;
        this.topChanel[i].series[j].name=body.nam.toString()
        this.topChanel[i].series[j].value=element.tong
        this.topChanel=[...this.topChanel]
        });
      }
    })
  }
  getTopStore(url:string){
    let bodyFake={}
    bodyFake['nam']=this.body.nam
    bodyFake['machinhanh']=this.body.machinhanh
    bodyFake['hethong']=this.body.hethong
    bodyFake['kenhbanhang']=this.body.kenhbanhang
    bodyFake['macuahang']=this.body.macuahang
    bodyFake['manhom']=this.body.manhom
    bodyFake['tieude']=this.body.tieude
    this.subscription=this.dataService.post(url,bodyFake).subscribe(data=>{
      if(data.status==200){
        JSON.parse(data._body).forEach((element,i:number) => {
         this.top10Store[i].name=element.macuahang
         this.top10Store[i].value=element.tong
         this.top10Store=[...this.top10Store]
        });
      }
    })
  }
  addData(i:number,chart,label:string, data) {
    chart.data.datasets[0].data[i] = data;
    chart.data.labels[i] =label;
    chart.update();
   
}

  // hàm lấy về danh sách nhóm sản phẩm


  getTypes(){
    this.subscription=this.dataService.get(this.API1).subscribe(data=>{
      this.types=JSON.parse(data._body);
    },error=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getTypes();
    this.body.nam=2019;
    this.body.machinhanh= new Array;
    this.body.thang=new Array;
    this.body.hethong=new Array;
    this.body.macuahang=new Array;
    this.body.kenhbanhang=new Array;
    this.body.manhom=new Array;
    this.body.manhanvien=new Array;
    this.body.tieude="Doanhthubanhang";
    this.body2.nam=2018;
    this.body2.machinhanh= new Array;
    this.body2.thang=new Array;
    this.body2.hethong=new Array;
    this.body2.macuahang=new Array;
    this.body2.kenhbanhang=new Array;
    this.body2.manhom=new Array;
    this.body2.manhanvien=new Array;
    this.body2.tieude="Doanhthubanhang";
    

    //chart1
    this.chart0 = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ["Updating..."],
        datasets: [
          { 
            data: [50,50,50],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(0, 123, 255,0.5)'],
            fill: true
          },
        ]
      },
      options: {
        legend: {
         display:true
        },
        tooltips:{
          enabled:true
        }
      }
    });
    this.chart1 = new Chart('canvas1', {
      type: 'doughnut',
      data: {
        labels: ["Updating..."],
        datasets: [
          { 
            data: [50,50,50],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 193, 7, 0.5)'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
         display:true
        },
        tooltips:{
          enabled:true
        }
      }
    });
    this.chart2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: [
          "Updating...",
          "Updating...",
          "Updating..."
        ],
        datasets: [
          { 
            data: [50,50,50],
            backgroundColor: ['rgba(255, 0, 0)','rgba(255, 193, 7)','rgba(0, 123, 255)'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
         display:true
        },
        tooltips:{
          enabled:true
        }
      }
    });
    this.chart3 = new Chart('canvas3', {
      type: 'doughnut',
      data: {
        labels: [
          "Updating...",
          "Updating...",
          "Updating...",
        ],
        datasets: [
          { 
            data: [50,50,50],
            backgroundColor: ['rgba(255, 0, 0)','rgba(255, 193, 7)','rgba(0, 123, 255)'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
         display:true
        },
        tooltips:{
          enabled:true
        }
      }
    });
// các chart swimlane


  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  

  // Chart
  //chart1
  
  
  // horizonchart
  view: any[] = [200,150];
  public hori=[
    {
    name:"Updating...",
    value:5000
  },
    {
    name:"Updating..",
    value:5000
  },
  {
    name:"Updating.",
    value:5000
  }
  ];
  public hori2=[
    {
    name:"Updating...",
    value:5000
  },
    {
    name:"Updating..",
    value:5000
  },
  {
    name:"Updating.",
    value:5000
  }
  ];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';
  barPadding=10;
 
  public top10Product=[
    {"name":"Loading",
    "value":"200"},
  
    {"name":"Loading...",
    "value":"200"},
  
    {"name":"Loading...",
    "value":"200"},
  
    {"name":"Updating.....",
    "value":"200"},
  
    {"name":"Updating",
    "value":"200"},
  
    {"name":"Updating....",
    "value":"200"},
  
    {"name":"Updating....",
    "value":"200"},
  
    {"name":"Updating",
    "value":"200"},
  
    {"name":"Updating.",
    "value":"200"},
  
    {"name":"Updating..",
    "value":"200"},
  
  ];
  public top10Store=[
    {"name":"Loading....",
    "value":"2000"},
  
    {"name":"Loading...",
    "value":"2000"},
  
    {"name":"Loading....",
    "value":"2000"},
  
    {"name":"Updating.....",
    "value":"2000"},
  
    {"name":"Updating",
    "value":"2000"},
  
    {"name":"Updating....",
    "value":"200"},
  
    {"name":"Updating....",
    "value":"200"},
  
    {"name":"Updating",
    "value":"200"},
  
    {"name":"Updating.",
    "value":"200"},
  
    {"name":"Updating..",
    "value":"200"},
  
  ];
  view3=[450,280]
  colorScheme = {
    domain: ['rgba(255, 0, 0, 1)', '#ffc107', 'rgba(0, 123, 255)','#6610f2','#e83e8c','#fd7e14', '#AAAAAA']
  };
  // hết horizonchart

  // Bat dau barlinechart
  view2 = [600,300];
  showXAxis2 = true;
  showYAxis2 = true;
  gradient2 = false;
  showLegend2 = true;
  legendTitle = '';
  legendPosition = 'right';
  showXAxisLabel2 =false;
  xAxisLabel2 = 'Country';
  showYAxisLabel2 = false;
  yAxisLabel2 = 'Khách hàng';
  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;
  barChart  = barChart
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#a8385d']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#a8385d']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
  // Bắt đầu group horizoncal bar chart
  topChanel = [
    {
      "name": "Online",
      "series": [
        {
          "name": "2018",
          "value": 7300000
        },
        {
          "name": "2019",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "Bán lẻ",
      "series": [
        {
          "name": "2018",
          "value": 7870000
        },
        {
          "name": "2019",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "Bán buôn",
      "series": [
        {
          "name": "2018",
          "value": 5000002
        },
        {
          "name": "2019",
          "value": 5800000
        }
      ]
    }
  ];
  onSelect(event) {
    console.log(event);
  }
  
}
export let lineChartSeries = [
 
  {
  name: 'Số đơn hàng',
  series: [
        {
    value: 20000,
    name: 'Tháng 1',

  },
    {
      value: 40000,
      name: 'Tháng 2'
    },
    {
      value: 20000,
      name: 'Tháng 3'
    },
    {
      value: 30000,
      name: 'Tháng 4'
    },
    {
      value: 40000,
      name: 'Tháng5'
    },
    {
      value: 20000,
      name: 'Tháng 6'
    },
    {
      value: 30000,
      name: 'Tháng 7'
    },
    {
      value: 30999,
      name: 'Tháng 8'
    },
    {
      value: 40000,
      name: 'Tháng 9'
    },
    {
      value: 20000,
      name: 'Tháng 10'
    },
    {
      value: 30000,
      name: 'Tháng 11'
    },
    {
      value: 35000,
      name: 'Tháng 12'
    }
  ]
}
];

export let barChart: any = [
{
  name: 'Tháng 1',
  value: 50000
},
{
  name:'Tháng 2',
  value: 30000
},
{
  name:'Tháng 3',
  value: 10000
},
{
  name:'Tháng 4',
  value: 30000
},
{
  name:'Tháng 5',
  value: 20000
},
{
  name:'Tháng 6',
  value: 40000
},
{
  name:'Tháng 7',
  value: 50000
},
{
  name:'Tháng 8',
  value: 20000
},
{
  name:'Tháng 9',
  value: 60000
},
{
  name:'Tháng 10',
  value: 20000
},
{
  name:'Tháng 11',
  value: 50000
},
{
  name:'Tháng 12',
  value: 33000
},
];