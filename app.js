const ImageUrl = document.getElementById("img_url");
const Addbtn = document.getElementById("btn_add");
const FilterBtn = document.getElementById("select_item");
const ErrorMsg = document.getElementById("error_msg");
const display_row = document.getElementById("body");

selected_item_array = [];
item_array = [];

Addbtn.addEventListener('click', () => {
    const selectItem = document.getElementById("select_item").selectedIndex;
    const item = document.getElementsByClassName("select-opt")[selectItem].value;

    if(ImageUrl.value == ""){
        ErrorMsg.innerText = "Please enter image url"
        setTimeout(()=>{
            ErrorMsg.innerText="";
          },1000)

          return;
    }

    selected_item_array.push(item);
    item_array.push(ImageUrl.value);

    display_row.innerHTML += `<tr> 
       <td ${ImageUrl.value}></td>
       <td> ${item} </td>
    </tr>`;

    ImageUrl.value = "";
})


    const buttons = document.querySelectorAll(".btn")
    const storeImages = document.querySelectorAll(".store-item")

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach((item) => {
                if(filter === "all"){
                    item.style.display = 'block'
                } else{
                    if(item.classList.contains(filter)){
                        item.style.display ='block'
                    }else {
                        item.style.display ='none'
                    }
                }
            })
        })
    })
