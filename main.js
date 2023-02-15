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
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status: 'Inactive',
        position:false
     },
     {
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status: 'Inactive',
        position:false
   },
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
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status: 'Active',
        position:true
   },
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
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
        status: 'Active',
        position:true
   },
   {
        name:'Jane Cooper',
        company: 'Microsoft',
        number: '(225) 555-0118',
        email:'jane@microsoft.com',
        country:'United States',
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
        clas = 'active';
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
      <ul class="top_nav d-flex flex-row justify-content-between ">
            <img src="${el.logo}" class="logo_menu">
            <a><span>${el.title}</span></a>
            <img src="${Menu.arrow}" class=" arrow ">
      </ul>
            `

   });
}
createMenu(Menu.object,nav);

