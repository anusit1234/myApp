import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Content, ActionSheet, ActionSheetController, AlertController, App} from 'ionic-angular';
import { IncomeProvider } from '../../providers/income-services/income';
import { SumIncomeProvider } from '../../providers/calculate-services/sum-income';
import { Income } from '../../model/income';
import { Month } from '../../model/month';
import { IncomeByMonthProvider } from '../../providers/income-services/incomeByMonth';
import { SumIncomeByMonthProvider } from '../../providers/calculate-services/sum-incomeByMonth';
import { SumIncome } from '../../model/get-sumIncome';
import { DeleteIncomeProvider } from '../../providers/income-services/delete-income';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  @Input() events: any;
  @ViewChild(Content)

  content: Content;
  incomeList:Income;
  sumIncome:SumIncome;
  sumIncom1:number;
  year:string;

  month_now:string;
  month_select:string

  animateClass: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public alertCtrl: AlertController,
              public sumIncome_: SumIncomeProvider,
              public sumIncomeByMonth: SumIncomeByMonthProvider,
              public income: IncomeProvider,
              public deleteIncome: DeleteIncomeProvider,
              public actionSheetCtrl: ActionSheetController,
              public toast: ToastProvider,
              public incomeByMonth: IncomeByMonthProvider) {

                //ดึงค่าผลรวมรายรับ
    this.sumIncome_.getSumIncome().then((data:SumIncome) => {
      this.sumIncome = data;
      this.sumIncom1 = this.sumIncome.totalIncome;
    })

    //ดึงรายการรายรับ
    this.income.getIncome().then((data:Income) => {
      this.incomeList = data;

    })
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.sumIncome_.getSumIncome().then((data:SumIncome) => {
        this.sumIncome = data;
        this.sumIncom1 = this.sumIncome.totalIncome;
      })
  
      //ดึงรายการรายรับ
      this.income.getIncome().then((data:Income) => {
        this.incomeList = data;
  
      })
      let month_n = parseInt(sessionStorage.getItem("month"));
    let month = month_n+1;
    console.info('month='+month);
    if(month == 1){
      this.month_now = "มกราคม";
    }
    if(month == 2){
      this.month_now = "กุมภาพันธ์";
    }
    if(month == 3){
      this.month_now = "มีนาคม";
    }
    if(month == 4){
      this.month_now = "เมษายน";
    }
    if(month == 5){
      this.month_now = "พฤษภาคม";
    }
    if(month == 6){
      this.month_now = "มิถุนายน";
    }
    if(month == 7){
      this.month_now = "กรกฎาคม";
    }
    if(month == 8){
      this.month_now = "สิงหาคม";
    }
    if(month == 9){
      this.month_now = "กันยายน";
    }
    if(month == 10){
      this.month_now = "ตุลาคม";
    }
    if(month == 11){
      this.month_now = "พฤศจิกายน";
    }
    if(month == 12){
      this.month_now = "ธันวาคม";
    }
      refresher.complete();
    }, 1000);
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomePage');
    this.animateClass = { 'fade-in-right-item': true };

    this.sumIncome_.getSumIncome().then((data:SumIncome) => {
      this.sumIncome = data;
      this.sumIncom1 = this.sumIncome.totalIncome;
    })

    //ดึงรายการรายรับ
    this.income.getIncome().then((data:Income) => {
      this.incomeList = data;

    })
    
    this.year = sessionStorage.getItem("year");

    //เดือนปัจจุบัน
    let month_n = parseInt(sessionStorage.getItem("month"));
    let month = month_n+1;
    console.info('month='+month);
    if(month == 1){
      this.month_now = "มกราคม";
    }
    if(month == 2){
      this.month_now = "กุมภาพันธ์";
    }
    if(month == 3){
      this.month_now = "มีนาคม";
    }
    if(month == 4){
      this.month_now = "เมษายน";
    }
    if(month == 5){
      this.month_now = "พฤษภาคม";
    }
    if(month == 6){
      this.month_now = "มิถุนายน";
    }
    if(month == 7){
      this.month_now = "กรกฎาคม";
    }
    if(month == 8){
      this.month_now = "สิงหาคม";
    }
    if(month == 9){
      this.month_now = "กันยายน";
    }
    if(month == 10){
      this.month_now = "ตุลาคม";
    }
    if(month == 11){
      this.month_now = "พฤศจิกายน";
    }
    if(month == 12){
      this.month_now = "ธันวาคม";
    }

    
  }

  doMonth() {
    let actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
        {
          text: 'มกราคม',
          handler: () => {
            console.log('1');
            let month = 1;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "มกราคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'กุมภาพันธ์',
          handler: () => {
            console.log('2');
            let month = 2;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "กุมภาพันธ์";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'มีนาคม',
          handler: () => {
            console.log('3');
            let month = 3;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "มีนาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'เมษายน',
          handler: () => {
            console.log('4');
            let month = 4;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "เมษายน";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'พฤษภาคม',
          handler: () => {
            console.log('5');
            let month = 5;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "พฤษภาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'มิถุนายน',
          handler: () => {
            console.log('6');
            let month = 6;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "มิถุนายน";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'กรกฎาคม',
          handler: () => {
            console.log('7');
            let month = 7;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "กรกฎาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'สิงหาคม',
          handler: () => {
            console.log('8');
            let month = 8;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "สิงหาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'กันยายน',
          handler: () => {
            console.log('9');
            let month = 9;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "กันยายน";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'ตุลาคม',
          handler: () => {
            console.log('10');
            let month = 10;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "ตุลาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'พฤศจิกายน',
          handler: () => {
            console.log('11');
            let month = 11;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "พฤศจิกายน";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'ธันวาคม',
          handler: () => {
            console.log('12');
            let month = 12;

            this.incomeByMonth.getIncomeByMonth(month).then((data:Income) => {
              this.incomeList = data;
              this.month_now = "ธันวาคม";
            })
            this.sumIncomeByMonth.getSumIncomeByMonth(month).then((data:SumIncome) => {
              this.sumIncome = data;
              this.sumIncom1 = this.sumIncome.totalIncome;
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  editIncome(item) {
    let actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
        {
          icon: 'eye',
          text: 'รายละเอียด',
          handler: () => {
            console.log(item.income_cate_id);
            this.navCtrl.push('DetailIncomePage',item)
          }
        },
        {
          icon: 'create',
          text: 'แก้ไข',
          handler: () => {
            console.log(item.income_cate_id);
            this.navCtrl.push('EditIncomePage',item);
          }
        },
        {
          icon: 'trash',
          text: 'ลบ',
          handler: () => {
            let income_id = item.income_id;
            this.DeleteConfirm(income_id);
          }
        },
        {
          icon: 'close-circle',
          text: 'ยกเลิก',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  DeleteConfirm(income_id) {
    let confirm = this.alertCtrl.create({
      title: 'คุณต้องการจะลบรายรับนี้ใช่หรือไม่',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
          
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.deleteIncome.DeleteIncome(income_id);
            this.toast.ToastService('ลบรายการสำเร็จ');
            this.navCtrl.setRoot('IncomePage');   
            const root = this.app.getRootNav();
            root.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }
}
