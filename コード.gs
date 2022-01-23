function resister_inCalendar() {
  var calendar = CalendarApp.getCalendarById("jinsuzuki@yokohamalab.jp");
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var lastRow = sheet.getLastRow();
  var contents = sheet.getRange(`A2:E${lastRow}`).getValues();

  for(var i; i < contents.length; i++){
    var [status,day,title,startTime,endTime] = contents[i];
    if(status=="TRUE"){
      continue;
    }
    var date = new Date(day);
    console.log(title);
  }
}
