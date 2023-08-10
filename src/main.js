let index=0;
function openSearchBox(){
    let open_search=document.getElementById('open_search');
    let close_search=document.getElementById('close_search');
    let search_box=document.getElementById('search_box');
        open_search.classList.add('hidden');
        close_search.classList.remove('hidden');
        search_box.classList.remove('hidden');
}
function closeSearchBox(){
    let open_search=document.getElementById('open_search');
    let close_search=document.getElementById('close_search');
    let search_box=document.getElementById('search_box');
    open_search.classList.remove('hidden');
    close_search.classList.add('hidden');
    search_box.classList.add('hidden');
}
function submenu(){
    let submenu=document.getElementById('submenu');
    let close_submenu=document.getElementById('close_submenu');
    let open_submenu=document.getElementById('open_submenu');
    open_submenu.classList.add('hidden');
    close_submenu.classList.remove('hidden');
    submenu.classList.remove('hidden');
}
function submenuClose(){
    let submenu=document.getElementById('submenu');
    let close_submenu=document.getElementById('close_submenu');
    let open_submenu=document.getElementById('open_submenu');
    open_submenu.classList.remove('hidden');
    close_submenu.classList.add('hidden');
    submenu.classList.add('hidden');
}
let change= ()=>{
    let imgs_smalls=document.getElementById('img_smalls');
    let imgs_small1=document.getElementById('img_small1');
    let imgs_small2=document.getElementById('img_small2');
    let imgs_small3=document.getElementById('img_small3');
    let width_img=document.getElementById('width_img');
    imgs_smalls.classList.remove('relative');
    imgs_smalls.classList.add('w-2/3');
    width_img.classList.add('smm:w-full');
    imgs_small1.classList.remove('absolute');
    imgs_small2.classList.remove('absolute');
    imgs_small3.classList.remove('absolute');
}
let returnChange= ()=>{
    let imgs_smalls=document.getElementById('img_smalls');
    let imgs_small1=document.getElementById('img_small1');
    let imgs_small2=document.getElementById('img_small2');
    let imgs_small3=document.getElementById('img_small3');
    let width_img=document.getElementById('width_img');
    imgs_smalls.classList.add('relative');
    imgs_smalls.classList.remove('w-2/3');
    width_img.classList.remove('smm:w-full');
    imgs_small1.classList.add('absolute');
    imgs_small2.classList.add('absolute');
    imgs_small3.classList.add('absolute');
}
function setWord(input){
    let word = document.getElementById(`${input}`)
    let words = [...document.querySelector('#words').children];
    words.forEach((element)=> {
        element.classList.add('hidden');
    });

    word.classList.remove('hidden');
}
setInterval(()=>{
    index+=1;
    if(index==4){
        index=1;
    }
    setWord(`word${index}`)
},2000
)
function menuMobile(){
    let menu_mobile=document.getElementById('menu_mobile');
    let close_menuMobile=document.getElementById('close_menuMobile');
    let submenu_mobile=document.getElementById('submenu_mobile');
    menu_mobile.classList.add('hidden');
    close_menuMobile.classList.remove('hidden');
    submenu_mobile.classList.remove('hidden');
}
function menuMobileClose(){
    let menu_mobile=document.getElementById('menu_mobile');
    let close_menuMobile=document.getElementById('close_menuMobile');
    let submenu_mobile=document.getElementById('submenu_mobile');
    menu_mobile.classList.remove('hidden');
    close_menuMobile.classList.add('hidden');
    submenu_mobile.classList.add('hidden');
}
function submenu_mobile(){
    let sub_submenu=document.getElementById('sub_submenu');
    let close_submenuMobile=document.getElementById('close_submenuMobile');
    let open_submenuMobile=document.getElementById('open_submenuMobile');
    open_submenuMobile.classList.add('hidden');
    close_submenuMobile.classList.remove('hidden');
    sub_submenu.classList.remove('hidden');
}
function submenuClose_mobile(){
    let sub_submenu=document.getElementById('sub_submenu');
    let close_submenuMobile=document.getElementById('close_submenuMobile');
    let open_submenuMobile=document.getElementById('open_submenuMobile');
    open_submenuMobile.classList.remove('hidden');
    close_submenuMobile.classList.add('hidden');
    sub_submenu.classList.add('hidden');
}