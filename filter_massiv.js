


let a = [
    {hotel:'Престиж',city:'Пионеровка',rating:2,price:6200,time:new Date(0,0,0,14)},
    {hotel:'Элита+',city:'Литяжевка',rating:3,price:8500,time:new Date(0,0,0,16)},
    {hotel:'Козырь',city:'Балашов',rating:2,price:7000,time:new Date(0,0,0,13)},
    {hotel:'Премиум',city:'Тростянка',rating:4,price:11200,time:new Date(0,0,0,12)}
]

let body = document.querySelector('body')
// let tbody = document.querySelector('tbody')

function one()
{
    table = CreateTable()
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)
    CreateTbody(a,table)
}
function two()
{
    a.sort((x,y)=>{if(x.rating>y.rating) return -1})
    console.log(a)
    table = CreateTable()
    CreateTbody(a,table)

}

function three()
{
    afilter=a.filter((i)=>{if (i.price<=7000) return i})
    table = CreateTable()
    CreateTbody(afilter,table)
}

function CreateTable(){
    let table = document.createElement('table')
    body.appendChild(table)
    table.classList.add("table")
    table.classList.add("table-striped")
    table.innerHTML=table.innerHTML+
        `<thead>
    <tr>
        <th>
            Название гостиницы
        </th>
        <th>
            Город
        </th>
        <th>
            Количество звезд
        </th>
        <th>
            Цена номера в сутки, руб
        </th>
        <th>
            Время заезда
        </th>
    </tr>
    </thead>`

    return table
}
function CreateTbody(massiv,table)
{
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)

    massiv.map((i)=>tbody.innerHTML=
        tbody.innerHTML+
        `<tr>
    <td>${i.hotel}</td>
    <td>${i.city}</td>
    <td>${i.rating}</td>
    <td>${i.price}</td>
    <td>${i.time.getHours()} : ${i.time.getMinutes()}</td>
    </tr>`

    )
}


one()
two()
three()


// a.map((i,index)=>tbody.innerHTML=
//     tbody.innerHTML+
//     `<tr>
//     <td>${i.hotel}</td>
//     <td>${i.city}</td>
//     <td>${i.rating}</td>
//     <td>${i.price}</td>
//     <td>${i.time.getHours()} : ${i.time.getMinutes()}</td>
//     </tr>`