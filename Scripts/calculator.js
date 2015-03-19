$(document).ready(function () {
    reset();
}
);

function reset() {
    $("#result").val("0");
    document.getElementById("lblmsg").innerHTML = "";
};
function Operator(s) {
    var v = $("#result").val();
    //var pattern = "[+\\-*/]+([0-9.]*)$";
    //var str = "123+456+789.";
    var n = v.search(/[+\-*/]([0-9.]*)$/i);
    var lastpartstr=v.substring(++n, v.length);
    if (lastpartstr.indexOf(".") > 0 && s == ".")
    {
        return;
    }
   
    if (IsNum(s)) //user inputs a number
    {
        if ((v == 0)&&v.indexOf(".")<0)
        {
            v = "";
        }
     
    }
    else //user inputs an operator or decimal point
    {
        var operatorpattern = /[+\-*/]$/;
        if (operatorpattern.test(v))
        {
            if (s == ".")
            {
                s = "0.";
            }
            else
            {
                $("#result").val(v.substring(0, v.length - 1) + s);
                return;
            }
        }
       
      }
    if ((v + s).length > 8)
    {
         $("#result").css("font-size", "20px");
    }
    else
    {
        $("#result").css("font-size", "25px");
    }
    $("#result").val(v + s);

}
function result()
{
    var v = $("#result").val();
    var i = v.indexOf("/");
    var lastinput = v.substring(v.length - 1, v.length);
     if (!IsNum(lastinput))
    {
         if (lastinput.toString() == ".") {
             lastinput = "0";
        }
        else
            return;
    }

    var r = eval($("#result").val()).toString();
    if (r.length > 16)
    {
        if (parseInt(r) > 0)
         {
            $("#result").val(Number(r).toExponential());
        }
        else
        {
            
            $("#result").val(Number(r).toFixed(15));
        }
    }
    else
    {
        $("#result").val(r);
    }
}
function IsNum(s)
{
    if (s!=null&&s!="")
    {
        return !isNaN(s);
    }
    return false;
}
