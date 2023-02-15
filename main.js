  'use strict'

$(document).ready(function(){
    $('.burger-menu').click(function(){
      $('.burger-menu , .header-menu').toggleClass('active');
      $('body').toggleClass('lock');
    })
  })
  $('.menu-list').click(function() {
    $('.burger-menu , .header-menu').removeClass('active');
    $('body').removeClass('lock');
  })





const Customer= {
   object:[
     {
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status: 'Active',
        position:true
     },
     {
        name:'Floyd Miles',
        company: 'Adobe',
        number: '(205) 555-0100',
        email:'floyd@yahoo.com',
        country:'Kiribati',
        status: 'Inactive',
        position:false
     },
     {
        name:'Ronald Richards',
        company: 'Adobe',
        number: '(302) 555-0107',
        email:'ronald@adobe.com',
        country:'Israel',
        status: 'Inactive',
        position:false
   },
    {
        name:'Marvin McKinney',
        company: 'Tesla',
        number: '(252) 555-0126',
        email:'marvin@tesla.com',
        country:'Iran',
        status: 'Active',
        position:true
   },
   {
        name:'Jerome Bell',
        company: 'Google',
        number: '(629) 555-0129',
        email:'jerome@google.com',
        country:'Réunion',
        status: 'Active',
        position:true
   },
   {
        name:'Kathryn Murphy',
        company: 'Microsoft',
        number: '(406) 555-0120',
        email:'kathryn@microsoft.com',
        country:'Curaçao',
        status: 'Active',
        position:true
   },
   {
        name:'Jacob Jones',
        company: 'Yahoo',
        number: '(208) 555-0112',
        email:'jacob@yahoo.com',
        country:'Brazil',
        status: 'Active',
        position:true
   },
   {
        name:'Kristin Watson',
        company: 'Facebook',
        number: '(704) 555-0127',
        email:'kristin@facebook.com',
        country:'Åland Islands',
        status: 'Inactive',
        position:false
   }
    ]
}


const Form = document.querySelector('.block_form-card')


 
let clas='';


function createPerson (person,parent){
parent.innerHTML=''
   person.forEach((el) => {

       if(el.position){
        clas = 'active_form';
      }else clas = 'inactive'

    

      parent.innerHTML += `
            <ul class=" d-flex justify-content-between ps-0">
                  <li>${el.name} </li>
                  <li> ${el.company}</li>
                  <li>${el.number} </li>
                  <li>${el.email} </li>
                  <li>${el.country}</li>
                  <li><button class =${clas}>${el.status}</button></li>
            </ul>`

   });
}
createPerson(Customer.object,Form);



const Menu = {
   arrow:'img/arrow3.svg',
   object:[
     {
        logo:'img/dashboard.svg',
        title: 'Dashboard',
     },
     {
       logo:'img/product.svg',
       title: 'Product',
     },
     {
        logo:'img/customers.svg',
        title: 'Customers',
   },
    {
        logo:'img/income.svg',
        title: 'Income',
   },
   {
       logo:'img/promote.svg',
        title: 'Promote',
   },
   {
        logo:'img/help.svg',
        title: 'Help',
   }]
  }



const nav = document.querySelector('.header-menu')
  
  function createMenu (person,parent){
parent.innerHTML=''
   person.forEach((el) => {

       if(el.position){
        clas = 'active';
      }else clas = 'inactive'

      parent.innerHTML += `
      <ul class="top_nav d-flex flex-row  align-items-center justify-content-center">
            <img src="${el.logo}" class="logo_menu">
            <a><span>${el.title}</span></a>
            <img src="${Menu.arrow}" class=" arrow ">
      </ul>
            `

   });
}
createMenu(Menu.object,nav);

