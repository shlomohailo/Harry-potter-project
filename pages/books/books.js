const api_Books = (`https://fedeperin-harry-potter-api-en.herokuapp.com/books`);


let counter = 0;
function photoForCard() {
    let array = [
        "../../images/book1.webp",
        "../../images/book2.webp",
        "../../images/book3.webp",
        " ../../images/book4.webp",
        "../../images/book5.webp",
        "../../images/book6.webp",
        "../../images/book7.webp",
        "../../images/book8.webp",
        "../../images/book9.webp",
    ];
    let pic = array[counter];
    counter++;
    return pic;
}
let divbooks = document.getElementById("div_books")

async function dataBooks() {





    try {
        await fetch(api_Books).then(response => response.json())
            .then(data => data.forEach(element => {

                divbooks.innerHTML += `
                <div class=" container-fluid my-1 mx-5  text-danger" style="width: 18rem;">
                  <div class="card-body">
        
                     <img  src=${photoForCard()} style="height:50%" class="card-img-top" alt="...">
                    <h5 class="card-title" > ${element["title"]}</h5>
                    <p class="card-text">${element["author"]}  
                    <button type="button" class="btnshow bg-danger" >&#10146;</button>
                    </p>
                    <p  id="p_rweviow" class="discri card-text d-none" >${element["description"]}</p>
                    <button type="button" class="btn btn-primary" onclick="paymaymnt()">Buy</button>
                    
                   </div>
              
              </div>
                `
            }))
    } catch (error) {
        alert(error)
    }
    showdescription()
}
dataBooks()


function showdescription(){

  document.querySelectorAll(".btnshow").forEach((btn,i)=>{
btn.addEventListener("click",()=>{

  document.querySelectorAll(".discri")[i].classList.toggle("d-block")
  document.querySelectorAll(".discri")[i].classList.toggle("d-none")

})
  })

}


function paymaymnt() {

    divbooks.innerHTML = ""


    divbooks.innerHTML = `
    <div class="row p-5">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">
      
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="">

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="">
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="">
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="">
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="">
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="">
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" class="btn">
      </form>
    </div>
  </div>
  
    </div>
  </div>
</div>
    
    `
}



