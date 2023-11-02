const d = "./Js/menu.json"

document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch(d)
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");

            // Loop through the JSON data
            for (const category in data) {
                if (data.hasOwnProperty(category)) {
                    const categoryData = data[category];

                    // Create a column for the category
                    const col = document.createElement("div");
                    col.className = "col-md-4";

                    // Create the menu section for the category
                    const menuSection = document.createElement("div");
                    menuSection.className = "menu-section";

                    // Create the menu title (category name)
                    const menuTitle = document.createElement("h2");
                    menuTitle.className = "menu-title";
                    menuTitle.textContent = category;

                    // Create the menu list (ul)
                    const menuList = document.createElement("ul");
                    menuList.className = "menu-list";

                    // Loop through the items in the category
                    for (const item in categoryData) {
                        if (categoryData.hasOwnProperty(item)) {
                            const menuItem = document.createElement("li");
                            menuItem.className = "menu-item";

                            // Extract the item's price from the JSON data
                            const itemData = categoryData[item];
                            const itemPrice = itemData.price;

                            // Create the item name span with class "item-name"
                            const itemNameSpan = document.createElement("span");
                            itemNameSpan.className = "item-name";
                            itemNameSpan.textContent = item;

                            // Create the item price span with class "item-price"
                            const itemPriceSpan = document.createElement("span");
                            itemPriceSpan.className = "item-price";
                            itemPriceSpan.textContent = `$${itemPrice}`;

                            // Append the item name and price spans to the menu item
                            menuItem.appendChild(itemNameSpan);
                            menuItem.appendChild(itemPriceSpan);

                            // Append the item to the menu list
                            menuList.appendChild(menuItem);
                        }
                    }

                    // Assemble the menu section
                    menuSection.appendChild(menuTitle);
                    menuSection.appendChild(menuList);

                    // Assemble the column
                    col.appendChild(menuSection);

                    // Append the column to the menu container
                    menuContainer.appendChild(col);
                }
            }
        })
        .catch(error => console.error("Error fetching JSON data: ", error));
});
