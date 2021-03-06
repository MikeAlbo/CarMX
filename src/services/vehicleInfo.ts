class VehicleInfo {

  public years = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];


  public make = ["Acura", "Audi", "BMW", "Bat Mobile", "Buick", "Chevy", "Cadillac", "Dodge", "Ford", "Fiat", "GMC", "Hummer", "Honda", "Hyundai", "Kia", "Lexus", "Mazda", "Mercedez-Bienz", "Nissan", "Toyota", "Tesla", "Scion", "Volkswagon", "Home Made"];


  public odometerParse(input){
      let intRegex = /,|.|^\d+$|/;

      if(intRegex.test(input)){
         return (input.replace(/[,|.]/g , ""));
      } else {
        return null;
      }
  };

}


export {VehicleInfo};
