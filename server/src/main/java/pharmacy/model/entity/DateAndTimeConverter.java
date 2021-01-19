package pharmacy.model.entity;

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
		System.out.println(timestamp);
		return timestamp;
		
	}
	public static String convertTimeFromDBFormat(Long seconds) {
		int minutes = (int) (seconds / 60);
		int hours = (int) (seconds / 3600);
		StringBuilder sb = new StringBuilder();
		
		sb.append(hours);
		sb.append(':');
		sb.append(minutes);
		System.out.println(sb.toString());
		return sb.toString();
		
	}
	public static String convertDateToDBFormat(String date) {
		StringBuilder sb = new StringBuilder();
		if(date.length() == 6) {
			sb.append(date.substring(0,2));
			sb.append("/");
			sb.append(date.substring(2,4));
			sb.append("/");
			sb.append(date.substring(4,6));
			System.out.println(sb.toString());			
		}
		return sb.toString();
	}
}
