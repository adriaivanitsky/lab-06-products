this was overwhelming, got lost during the demo when the files got renamed and it all kinda turned to mush in my head and i wasn't sure what was what

so heres my plan to try to break it into understandable chronologocical steps so i dont get lost..

new folders and files:
cart folder
    index.html
    render-line-items.js
data folder
    cart-data.js
    
add to styles folder cart.css


### set up
* open yesterdays repo
* create a day two branch
* make a new folder called cart
* create an index.html file inside cart folder
* html boilerplate
* open live server and add /cart

### STEP ONE
* create a static html table in cart/index.html 
* <table>
    * table header: ```thead```
        * product name `th`
        * price `th`
        * quantitiy `th`
        * total
    * table body:
        * static element - empty `<tr>`
    * table footer: `<tfoot>`
        * order total

* place order button even tho it doesn't work, will make it work tomorrow

## at this point ACP

### STEP 2
* make a new folder called data
* in data make a new file called cart.js
* export an array literal
const cart = [ { items in cart}]

ACP

### step 3
* make a file called utils.js
* in utils create a function called 'findById' 

export const findById(id, array) {
    for (item of array) {
        if (item.id === id) {
            return item;
        } else {
            return null;
        }
    }
}

### step 4

* make a new file in cart folder called rander-line-items.js
* using static html example, copy in and comment these out 
* 