package pharmacy.model.entity.helper;

import java.util.List;

class Period{
	public String start;
	public String end;
	
}
public class DateAndTime{
	public String date;
	public String start;
	public String end;
	
	@Override
	public String toString() { return ">>>" + date + "  " + start + " - " + end + "<<<";}
}
