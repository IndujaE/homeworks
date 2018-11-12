function display(){
    var n=document.getElementById("name").value;
  //  window.alert(n);
    console.log(n); 
    document.getElementById('sname').innerHTML=n;

    var rno=document.getElementById("regno").value;
    document.getElementById('rn').innerHTML=rno;

   var s=document.getElementById("sem");
    var semester=s.options[s.selectedIndex].text;
   // console.log(semester)
     document.getElementById("seme").innerHTML=semester;
  
    var c=document.getElementById("cname").value;
    document.getElementById("colg").innerHTML=c;

    var sub1=document.getElementById("subj1").value;
    document.getElementById("su1").innerHTML=sub1;
    var m1=document.getElementById("mark1").value;
    document.getElementById("ma1").innerHTML=m1;
    var tm1=document.getElementById("tmark1").value;
    document.getElementById("tma1").innerHTML=tm1;
    var p1=(m1/tm1)*100;
    if(p1>=95)
    {
      var grade1=document.getElementById("g1").innerHTML="S";
    }
    else if((p1<95)&&(p1>=90))
    {
      var grade1=document.getElementById("g1").innerHTML="A+";
    }
    else if((p1<90)&&(p1>=85))
    {
      var grade1=document.getElementById("g1").innerHTML="A";
    }
    else if((p1<85)&&(p1>=80))
    {
      var grade1=document.getElementById("g1").innerHTML="B+";
    }
    else if((p1<80)&&(p1>=75))
    {
      var grade1=document.getElementById("g1").innerHTML="B";
    }
    else if((p1<75)&&(p1>=70))
    {
      var grade1=document.getElementById("g1").innerHTML="C+";
    }
    else if((p1<70)&&(p1>=65))
    {
      var grade1=document.getElementById("g1").innerHTML="C";
    }
    else if((p1<65)&&(p1>=60))
    {
      var grade1=document.getElementById("g1").innerHTML="D+";
    }
    else if((p1<60)&&(p1>=55))
    {
      var grade1=document.getElementById("g1").innerHTML="D";
    }
    else 
    {
      var grade1=document.getElementById("g1").innerHTML="F";
    }
   // document.getElementById("g1").innerHTML=grade1;

    var sub2=document.getElementById("subj2").value;
    document.getElementById("su2").innerHTML=sub2;
    var m2=document.getElementById("mark2").value;
    document.getElementById("ma2").innerHTML=m2;
    var tm2=document.getElementById("tmark2").value;
    document.getElementById("tma2").innerHTML=tm2;
    var p2=(m2/tm2)*100;
    if(p2>=95)
    {
      var grade2=document.getElementById("g2").innerHTML="S";
    }
    else if((p2<95)&&(p2>=90))
    {
      var grade2=document.getElementById("g2").innerHTML="A+";
    }
    else if((p2<90)&&(p2>=85))
    {
      var grade2=document.getElementById("g2").innerHTML="A";
    }
    else if((p2<85)&&(p2>=80))
    {
      var grade2=document.getElementById("g2").innerHTML="B+";
    }
    else if((p2<80)&&(p2>=75))
    {
      var grade2=document.getElementById("g2").innerHTML="B";
    }
    else if((p2<75)&&(p2>=70))
    {
      var grade2=document.getElementById("g2").innerHTML="C+";
    }
    else if((p2<70)&&(p2>=65))
    {
      var grade2=document.getElementById("g2").innerHTML="C";
    }
    else if((p2<65)&&(p2>=60))
    {
      var grade2=document.getElementById("g2").innerHTML="D+";
    }
    else if((p2<60)&&(p2>=55))
    {
      var grade2=document.getElementById("g2").innerHTML="D";
    }
    else 
    {
      var grade2=document.getElementById("g2").innerHTML="F";
    }
   // document.getElementById("g2").innerHTML=grade2;

    var sub3=document.getElementById("subj3").value;
    document.getElementById("su3").innerHTML=sub3;
    var m3=document.getElementById("mark3").value;
    document.getElementById("ma3").innerHTML=m3;
    var tm3=document.getElementById("tmark3").value;
    document.getElementById("tma3").innerHTML=tm3;
    var p3=(m3/tm3)*100;
    if(p3>=95)
    {
      var grade3=document.getElementById("g3").innerHTML="S";
    }
    else if((p3<95)&&(p3>=90))
    {
      var grade3=document.getElementById("g3").innerHTML="A+";
    }
    else if((p3<90)&&(p3>=85))
    {
      var grade3=document.getElementById("g3").innerHTML="A";
    }
    else if((p3<85)&&(p3>=80))
    {
      var grade3=document.getElementById("g3").innerHTML="B+";
    }
    else if((p3<80)&&(p3>=75))
    {
      var grade3=document.getElementById("g3").innerHTML="B";
    }
    else if((p3<75)&&(p3>=70))
    {
      var grade3=document.getElementById("g3").innerHTML="C+";
    }
    else if((p3<70)&&(p3>=65))
    {
      var grade3=document.getElementById("g3").innerHTML="C";
    }
    else if((p3<65)&&(p3>=60))
    {
      var grade3=document.getElementById("g3").innerHTML="D+";
    }
    else if((p3<60)&&(p3>=55))
    {
      var grade3=document.getElementById("g3").innerHTML="D";
    }
    else 
    {
      var grade3=document.getElementById("g3").innerHTML="F";
    }
   // document.getElementById("g1").innerHTML=grade1;

    var sub4=document.getElementById("subj4").value;
    document.getElementById("su4").innerHTML=sub4;
    var m4=document.getElementById("mark4").value;
    document.getElementById("ma4").innerHTML=m4;
    var tm4=document.getElementById("tmark4").value;
    document.getElementById("tma4").innerHTML=tm4;
    var p4=(m4/tm4)*100;
    if(p4>=95)
    {
      var grade4=document.getElementById("g4").innerHTML="S";
    }
    else if((p4<95)&&(p4>=90))
    {
      var grade4=document.getElementById("g4").innerHTML="A+";
    }
    else if((p4<90)&&(p4>=85))
    {
      var grade4=document.getElementById("g4").innerHTML="A";
    }
    else if((p4<85)&&(p4>=80))
    {
      var grade4=document.getElementById("g4").innerHTML="B+";
    }
    else if((p4<80)&&(p4>=75))
    {
      var grade4=document.getElementById("g4").innerHTML="B";
    }
    else if((p4<75)&&(p4>=70))
    {
      var grade4=document.getElementById("g4").innerHTML="C+";
    }
    else if((p4<70)&&(p4>=65))
    {
      var grade4=document.getElementById("g4").innerHTML="C";
    }
    else if((p4<65)&&(p4>=60))
    {
      var grade4=document.getElementById("g4").innerHTML="D+";
    }
    else if((p4<60)&&(p4>=55))
    {
      var grade4=document.getElementById("g4").innerHTML="D";
    }
    else 
    {
      var grade4=document.getElementById("g4").innerHTML="F";
    }
  //  document.getElementById("g1").innerHTML=grade1;
   
  if((grade1!='F')&&(grade2!='F')&&(grade3!='F')&&(grade4!='F'))
  {
    document.getElementById("g").innerHTML="PASS";
  }
  else{
    document.getElementById("g").innerHTML="FAIL";
  }
 
}