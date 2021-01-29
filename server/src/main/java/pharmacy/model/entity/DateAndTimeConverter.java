package pharmacy.model.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateAndTimeConverter {

	public static Long convertTimeToDBFormat(String time) {
		String[] parts = new String[2];
		if(time.contains(":")) {
			parts = time.split(":");						
		}else {
			if(time.length() == 4) {
			parts[0] = time.substring(0,2);
			parts[1] = time.substring(2,4);
			}
		}
		Long hours = Long.parseLong(parts[0]);
		Long minutes = Long.parseLong(parts[1]);
		Long timestamp = hours*3600+minutes*60;
		return timestamp;
		
	}
	public static String convertTimeFromDBFormat(Long seconds) {
		int hours = (int) (seconds / 3600);
		int minutes = (int)(seconds - hours*3600)/60;
		StringBuilder sb = new StringBuilder();
		if(hours < 10)
			sb.append('0');
		sb.append(hours);
		sb.append(':');	
		if(minutes < 10)
			sb.append('0');
		sb.append(minutes);
		
		return sb.toString();
		
	}
	public static String convertDateToDBFormat(String date) {
		return date.substring(0,10);
	}
	public static boolean isDateBehindToday(String date) {
		
		Date today =java.util.Calendar.getInstance().getTime();
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	    try {
			Date other = formatter.parse(formatter.format(new Date()));
			if(other.compareTo(today) < 0){
				return true;				
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
	    return false;
		
	}
}
