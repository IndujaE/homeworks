n = int(input("enter a number"))
print(n)
num=n
def pal(num):
    rm = 0
    rev=0
    while(num>0):
        rm = n%10
        rev = (rev*10)+rm
        num=num//10
    return rev

    if(rev==num):
        print("palindrome")
    else:
        print("not a palindrome")

pal(num)