import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

function TimePicker() {
  const [date, setDate] = useState(new Date());
  return <DatePicker date={date} onDateChange={setDate} mode={'time'} />;
}

export default TimePicker;