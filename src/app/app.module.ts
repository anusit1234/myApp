import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CateCreditCardProvider } from '../providers/category-services/cate-cradit-card';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { LoginPage } from '../pages/login/login';
import { CateDailyExpensesProvider } from '../providers/category-services/cate-daily-expenses';
import { CateFixedExpensesProvider } from '../providers/category-services/cate-fixed-expenses';
import { CateIncomeProvider } from '../providers/category-services/cate-icome';
import { CatePaymentChannelProvider } from '../providers/category-services/cate-payment-channel';
import { BalancedProvider } from '../providers/calculate-services/balance';
import { SumIncomeProvider } from '../providers/calculate-services/sum-income';
import { SumFixedExpensesProvider } from '../providers/calculate-services/sum-fixed-expenses';
import { SumDailyExpensesProvider } from '../providers/calculate-services/sum-daily-expenses';
import { MoneyPerDayProvider } from '../providers/calculate-services/sum-money-perday';
import { ChannelExpensesProvider } from '../providers/summary-services/channel-expenses';
import { DispensableExpensesProvider } from '../providers/summary-services/dispensable-expenses';
import { ExpensesDebtProvider } from '../providers/summary-services/expenses-debt';
import { IncomeDebtProvider } from '../providers/summary-services/income-debt';
import { DispensableExpensesPage } from '../pages/dispensable-expenses/dispensable-expenses';
import { IncomeProvider } from '../providers/income-services/income';
import { DailyExpensesProvider } from '../providers/daily-expenses-services/daily-expenses';
import { FixedExpensesProvider } from '../providers/fixed-expenses-services/fixed-expenses';
import { Risk1Provider } from '../providers/risk-services/risk1';
import { MaxExpensesProvider } from '../providers/summary-services/max-expenses';
import { AddUserProvider } from '../providers/user-service/add-users';
import { FormsModule } from '@angular/forms';
import { AddDueDateProvider } from '../providers/due-date-services/add-due-date-services';
import { AddIncomeProvider } from '../providers/income-services/add-income';
import { AddFixedExpensesProvider } from '../providers/fixed-expenses-services/add-fixed_expenses';
import { AddDailyExpensesProvider } from '../providers/daily-expenses-services/add-daily-expenses';
import { IncomeByMonthProvider } from '../providers/income-services/incomeByMonth';
import { SumIncomeByMonthProvider } from '../providers/calculate-services/sum-incomeByMonth';
import { BalancedByMonthProvider } from '../providers/calculate-services/balanceByMonth';
import { SumDailyExpensesByMonthProvider } from '../providers/calculate-services/sum-daily-expensesByMonth';
import { SumFixedExpensesByMonthProvider } from '../providers/calculate-services/sum-fixed-expensesByMonth';
import { MoneyPerDayByMonthProvider } from '../providers/calculate-services/sum-money-perdayByMonth';
import { DailyExpensesByMonthProvider } from '../providers/daily-expenses-services/daily-expensesByMonth';
import { FixedExpensesByMonthProvider } from '../providers/fixed-expenses-services/fixed-expensesByMonth';
import { ChannelExpensesByMonthProvider } from '../providers/summary-services/channel-expensesByMonth';
import { DispensableExpensesByMonthProvider } from '../providers/summary-services/dispensable-expensesByMonth';
import { ExpensesDebtByMonthProvider } from '../providers/summary-services/expenses-debtByMonth';
import { IncomeDebtByMonthProvider } from '../providers/summary-services/income-debtByMonth';
import { MaxExpensesByMonthProvider } from '../providers/summary-services/max-expensesByMonth';
import { SumDispensableExpensesProvider } from '../providers/summary-services/sum-dispensable-expenses';
import { SumDispensableExpensesByMonthProvider } from '../providers/summary-services/sum-dispensable-expensesByMonth';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule,
    // FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    UserServiceProvider,
    CateCreditCardProvider,
    CateDailyExpensesProvider,
    CateFixedExpensesProvider,
    CateIncomeProvider,
    CatePaymentChannelProvider,
    BalancedProvider,
    SumIncomeProvider,
    SumFixedExpensesProvider,
    SumDailyExpensesProvider,
    MoneyPerDayProvider,
    ChannelExpensesProvider,
    DispensableExpensesProvider,
    ExpensesDebtProvider,
    IncomeDebtProvider,
    IncomeProvider,
    DailyExpensesProvider,
    FixedExpensesProvider,
    Risk1Provider,
    MaxExpensesProvider,
    AddUserProvider,
    AddDueDateProvider,
    AddIncomeProvider,
    AddFixedExpensesProvider,
    AddDailyExpensesProvider,
    IncomeByMonthProvider,
    SumIncomeByMonthProvider,
    BalancedByMonthProvider,
    SumDailyExpensesByMonthProvider,
    SumFixedExpensesByMonthProvider,
    MoneyPerDayByMonthProvider,
    DailyExpensesByMonthProvider,
    FixedExpensesByMonthProvider,
    ChannelExpensesByMonthProvider,
    DispensableExpensesByMonthProvider,
    ExpensesDebtByMonthProvider,
    IncomeDebtByMonthProvider,
    MaxExpensesByMonthProvider,
    SumDispensableExpensesProvider,
    SumDispensableExpensesByMonthProvider
  ]
})
export class AppModule {}
