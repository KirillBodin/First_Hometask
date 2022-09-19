const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export function getDates (content)
{
    return content.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g) || []
}

export function NowDate () {
    let date = new Date()

    let day = date.getDate()
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear()
    if(day < 10) day = '0' + day
    return `${month} ${day}, ${year}`
}




