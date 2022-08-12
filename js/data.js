    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* отримання дати й часу */
    function date_time()
    {
        var current_datetime = new Date();
        var day = (current_datetime.getDate());
        var month = (current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());


        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }
    setInterval(function () {
        document.getElementById('current_date_time_block').innerHTML = date_time();
    }, 1000);
    /* виведення дати в блок з id "current_date_time_block" */
    document.getElementById('current_date_time_block').innerHTML = date_time();
/* https://www.veed.io/view/73e22584-50ba-49bf-988b-bf8e8bc31409 */