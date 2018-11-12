def leap(y):
    if((y%400==0)or((y%4==0)and(y%100!=0))):
        return True
    else:
        return False
    
y = int(input("enter a year"))
l = leap(y)
if(l==True):
    print("leap year")
else:
    print("not a leap year")





